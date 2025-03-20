class ProductManager{
    constructor(){
        this.products = []
        this.id = 1
    }

    addProduct(title, description, price, thumbnail, code, stock){

        const isCode = this.products.find(product => product.code === code)

        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log(' ')
            console.log('All fields are required...')
        }else if(isCode){
            console.log(' ')
            console.log('There is allready another product with that code...')
        }else{
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id: this.id++
            }
    
            this.products.push(product)
            console.log(' ')
            console.log('Product succesfully added', product)
        }

    }

    getProducts(){
        console.log(' ')
        console.log(this.products)
    }

    getProductById(id){
        const producto = this.products.find(product => product.id === id)

        if(producto){
            console.log(' ')
            console.log('Producto encontrado: \n', producto)
        }else{
            console.log('Not found')
        }

    }

}

const manager = new ProductManager()

manager.addProduct('Skate', 'Skateboard', 500, './skate.jpg', 12345, 100)
manager.addProduct('wheels', 200, './wheels.jpg',21, 100)
manager.addProduct('Trucks','Skateboard Trucks', 300, './trucks.jpg', 12345, 100)
manager.addProduct('Bearings', 'Skateboard Bearings', 50, './bearings.jpg',12,1500)


manager.getProducts()


manager.getProductById(1)