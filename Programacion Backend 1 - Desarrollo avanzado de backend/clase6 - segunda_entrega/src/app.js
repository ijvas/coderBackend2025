import express from 'express'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/cart.router.js'
import ProductManager from './ProductManager.js'
import { engine } from 'express-handlebars'
import { Server } from 'socket.io'
import http from 'http'

//Server
const app = express()
const server = http.createServer(app)
const io = new Server(server)
const PORT = 8080
app.use(express.json())
app.use(express.static('public'))


//HANDLEBARS
app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

//ROUTES
app.use('/', viewsRouter)
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

//WEBSOCKET
const productManager = new ProductManager('./data/products.json')
io.on('connection', (socket)=>{
    console.log('Nuevo usuario conectado.')

    // socket.on('newProduct', async(productData)=>{
    //     try {
    //         const newProduct = await productManager.addProduct(productData)

    //         io.emit('productAdded', newProduct)
    //     } catch (error) {
    //         console.error('Error al añadir el producto.')
    //     }
    // })
})

server.listen(PORT, ()=>{
    console.log(`Server runing in port ${PORT}`)
})
