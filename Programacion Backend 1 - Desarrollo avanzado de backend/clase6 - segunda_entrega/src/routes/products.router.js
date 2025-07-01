import express from 'express'
import ProductManager from '../ProductManager.js'

const productsRouter = express.Router()
const productManager = new ProductManager('./products.json')

productsRouter.get('/', async(req, res)=>{
    res.json(await productManager.getProducts())
})

productsRouter.get('/:pid', async(req, res) => {
    const product = await productManager.getProductById(parseInt(req.params.pid));
    product ? res.json(product) : res.status(404).send("Product not found");
});

productsRouter.post('/', async(req, res) => {
    const product = await productManager.addProduct(req.body)
    res.status(201).json(product)
})

productsRouter.put('/:pid', async(req, res) => {
    const updatedProduct = await productManager.updateProduct(parseInt(req.params.pid), req.body);
    updatedProduct ? res.json(updatedProduct) : res.status(404).send("Product not found");
});

productsRouter.delete('/:pid', async(req, res) => {
    const deleted = await productManager.deleteProduct(parseInt(req.params.pid));
    deleted ? res.send("Product deleted") : res.status(404).send("Product not found.");
});

export default productsRouter