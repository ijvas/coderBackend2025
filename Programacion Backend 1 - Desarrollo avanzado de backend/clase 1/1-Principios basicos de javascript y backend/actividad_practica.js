class ProductManager{
    constructor(){
        this.products = []
        this.id = 1
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const codeYaesta = this.products.some( product => product.code == code )

        if (codeYaesta){
            console.log('Error: el código del producto ya existe.')
            
        }else if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error('Error: todos los campos son obligatorios.')
        }else{

            const newProduct = {
                id : this.id++,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }

            this.products.push(newProduct)

            console.log('Producto agregado exitosamente:', newProduct)
            console.log('')
        }
    }

    getProducts(){
        console.log(this.products)
        console.log('')
    }

    getProductById(id){
        const product = this.products.find( prod => prod.id == id)
        if(!product){
            console.log('Not found.')
        }else{
            console.log(product)
        }
    }

}

const manager = new ProductManager()

manager.addProduct('Tabla de skate', 'madera', 200, './img/zero.jpg', 2504, 350)
manager.addProduct('titanio', 1000, './img/direccion.jpg', 1234, 300)
manager.addProduct('Trucks', 'acero', 500, './img/independent.jpg', 2143, 200)
manager.addProduct('ruedas', 'goma', 100, './img/bones.jpg', 1800, 500)
manager.addProduct('rulemanes', 'acero', 60, './img/spitfire.jpg', 2504, 500)

manager.getProducts()

manager.getProductById(2)

