import express from 'express'
import Cart from '../models/cart.model.js'

const cartsRouter = express.Router()


cartsRouter.post('/', async(req, res) => {
    try {
        const cart = new Cart()
        await cart.save()
        res.status(201).json({ status: "success", payload: cart })
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

cartsRouter.get('/:cid', async(req, res) => {
    try {
        const cid = req.params.cid
        const cart = await Cart.findById(cid).populate("products.product")
        if(!cart) return res.status(404).json({ status: "error", message: "Carrito no encontrado"})

        res.status(200).json({ status: "success", payload: cart})
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

cartsRouter.post('/:cid/product/:pid', async(req, res) => {
    try {
        const { cid, pid } = req.params
        const { quantity } = req.body
        
        const updatedCart = await Cart.findByIdAndUpdate(cid, { $push: { products: { product: pid, quantity} } }, { new: true })
        res.status(201).json({ status: "success", payload: updatedCart })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default cartsRouter