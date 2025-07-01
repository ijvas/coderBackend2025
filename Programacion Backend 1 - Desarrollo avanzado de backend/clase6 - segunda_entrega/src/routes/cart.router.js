import express from 'express'
import CartManager from '../CartManager.js'

const cartsRouter = express.Router()
const cartManager = new CartManager('./carts.json')


cartsRouter.post('/', async(req, res) => {
    res.status(201).json(await cartManager.createCart());
});

cartsRouter.get('/:cid', async(req, res) => {
    const cart = await cartManager.getCartById(parseInt(req.params.cid));
    cart ? res.json(cart) : res.status(404).send("Cart not found");
});

cartsRouter.post('/:cid/product/:pid', async(req, res) => {
    const cart = await cartManager.addProductToCart(parseInt(req.params.cid), req.params.pid);
    cart ? res.json(cart) : res.status(404).send("Cart or product not founded");
});


export default cartsRouter