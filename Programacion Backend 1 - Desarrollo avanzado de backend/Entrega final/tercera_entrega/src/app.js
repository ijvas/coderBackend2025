import express from 'express'
import viewsRouter from './routes/views.router.js'
import cartsRouter from './routes/cart.router.js'
import productsRouter from './routes/product.router.js'
import connectMongoDB from './config/db.js'
import dotenv from 'dotenv'
import { engine } from 'express-handlebars'
import { Server } from 'socket.io'
import http from 'http'
import mongoose from 'mongoose'
import Product from './models/product.model.js'
import methodOverride from 'method-override'


//Inicializamos las variables de entorno:
dotenv.config()


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(methodOverride('_method'))
const server = http.createServer(app)
const io = new Server(server)
const PORT = process.env.PORT

app.engine('handlebars', engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

//Websockets desde el server 
io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado")

    //Agregar nuevo producto
    socket.on("newProduct", async (productData) => {
        try {
            const newProduct = new Product(productData);
            await newProduct.save();
            io.emit("productAdded", newProduct)

        } catch (error) {
            console.error("Error al añadir un producto", error.message);
        }
    });

    //Eliminar un producto 
    socket.on("deleteProduct", async (productId) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(productId)) {
                return socket.emit("errorMsg", "ID de producto inválido");
            }
            
            const result = await Product.findByIdAndDelete(productId);
            if (result) {
                io.emit("productDeleted", productId);
                console.log(`Product ${productId} deleted.`)
            } else {
                socket.emit("error", "Producto no encontrado");
            }
        } catch (error) {
            socket.emit("deleteProductError", "No se pudo eliminar el producto.");
            console.error(error);
        }
    });
});


connectMongoDB()

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

server.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})