import express from 'express'
import ProductManager from './ProductManager.js'

let app = express()
let PORT = 8080

app.use(express.json())
let productManager = new ProductManager()

app.listen(PORT,()=>{console.log(`Server running in port ${PORT}`)})

app.post('/api/products', async(req, res) => {
    const product = await productManager.addProduct(req.body)
    res.status(201).json(product)
})

app.get('/products', async(req,res)=>{
    res.json(await productManager.getProducts())
})

app.get('/products/:pid', async(req,res) => {
    const product = await productManager.getProductById(parseInt(req.params.pid))
    product ? res.json(product) : res.status(404).send('Product not found')
})