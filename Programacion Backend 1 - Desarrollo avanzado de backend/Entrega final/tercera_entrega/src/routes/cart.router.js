import express from 'express'
import Cart from '../models/cart.model.js'
import mongoose from 'mongoose'

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

cartsRouter.get('/', async(req,res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json({ status: "success", payload: carts })
    } catch (error) {
        res.status(404).json({ status: "error", message: error.message })
    }
})

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
        if(!updatedCart) return res.status(404).json({ status: "error", message: "Carrito no encontrado"})

        res.status(201).json({ status: "success", payload: updatedCart })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

cartsRouter.delete('/:cid/product/:pid', async(req,res)=>{
    try {
        const { cid, pid } = req.params

        const cart = await Cart.findById(cid)
        if (!cart) return res.status(404).json({ status: "error", message: "Carrito no encontrado" })

        cart.products = cart.products.filter(item => item.product.toString() !== pid)

        await cart.save()

        res.status(200).json({ status: "success", payload: cart })

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message })
    }
})


cartsRouter.put('/:cid', async(req,res)=>{
    try {
        const cid = req.params.cid
        const cart = await Cart.findById(cid)
        if(!cart) return res.status(404).json({ status: "error", message: "Carrito no encontrado" })

        cart.products = []
        await cart.save()

        res.status(200).json({ status: "success", payload: cart })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


cartsRouter.put('/:cid/product/:pid', async(req,res)=>{
    try {
        const { cid, pid } = req.params
        const { quantity } = req.body
        const { ObjectId } = mongoose.Types

        if (!quantity || quantity < 1) return res.status(400).json({ status: "error", message: "La cantidad debe ser mayor o igual a 1" })
        
        const updatedCart = await Cart.findByIdAndUpdate(cid, { $set: { "products.$[elem].quantity": quantity } }, { new: true, arrayFilters: [{ "elem.product": new ObjectId(pid) }] })
        if(!updatedCart) return res.status(404).json({ status: "error", message: "Carrito no encontrado"})

        res.status(200).json({ status: "success", payload: updatedCart })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


cartsRouter.delete('/:cid', async(req,res)=>{
    try {
        const cid = req.params.cid

        const deletedCart = await Cart.findByIdAndDelete(cid)

        if(!deletedCart) return res.status(404).json({ status: "error", message: "Carrito no encontrado" })

        res.status(200).json({ status: "success", payload: deletedCart })

    } catch (error) {
        res.status(500).json({ status: "error", message: "error al eliminar carrito" })
    }
})

export default cartsRouter