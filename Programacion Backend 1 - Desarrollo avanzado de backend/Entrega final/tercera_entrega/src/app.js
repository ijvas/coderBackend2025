import express from 'express'
import viewsRouter from './routes/views.router.js'
import cartsRouter from './routes/cart.router.js'
import productsRouter from './routes/product.router.js'
import connectMongoDB from './config/db.js'
import dotenv from 'dotenv'

import { engine } from 'express-handlebars'
import { Server } from 'socket.io'
import http from 'http'


//Inicializamos las variables de entorno:
dotenv.config()


const app = express()
app.use(express.json())
const server = http.createServer(app)
const io = new Server(server)
const PORT = process.env.PORT

app.engine('handlebars', engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

io.on('connection', (socket)=>{
    console.log('nuevo usuario conectado')
})


connectMongoDB()

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

server.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})