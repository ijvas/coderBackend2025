import express from 'express'
import ProductManager from './ProductManager.js'
import CartManager from './CartManager.js'



const app = express()
const port = 8080

app.use(express.json())

const productManager = new ProductManager()
const cartManager = new CartManager()


app.get('/api/products', async(req, res)=>{
    res.json(await productManager.getProducts())
})

app.get('/api/products/:pid', async(req, res) => {
    const product = await productManager.getProductById(parseInt(req.params.pid));
    product ? res.json(product) : res.status(404).send("Product not found");
});

app.post('/api/products', async(req, res) => {
    const product = await productManager.addProduct(req.body)
    res.status(201).json(product)
})

app.put('/api/products/:pid', async(req, res) => {
    const updatedProduct = await productManager.updateProduct(parseInt(req.params.pid), req.body);
    updatedProduct ? res.json(updatedProduct) : res.status(404).send("Product not found");
});

app.delete('/api/products/:pid', async(req, res) => {
    const deleted = await productManager.deleteProduct(parseInt(req.params.pid));
    deleted ? res.send("Product deleted") : res.status(404).send("Product not found.");
});



app.post('/api/carts', async(req, res) => {
    res.status(201).json(await cartManager.createCart());
});

app.get('/api/carts/:cid', async(req, res) => {
    const cart = await cartManager.getCartById(parseInt(req.params.cid));
    cart ? res.json(cart) : res.status(404).send("Cart not found");
});

app.post('/api/carts/:cid/product/:pid', async(req, res) => {
    const cart = await cartManager.addProductToCart(parseInt(req.params.cid), req.params.pid);
    cart ? res.json(cart) : res.status(404).send("Cart or product not founded");
});


app.listen(port,()=>{console.log(`Servidor corriendo en el puerto https://localhost:${port}`)})