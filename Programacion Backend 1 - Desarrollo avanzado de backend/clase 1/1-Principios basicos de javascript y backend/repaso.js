class ProductManager{
    constructor(){
        this.products = []
        this.id = 1 
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const isCode = this.products.some( product => product.code == code)
        if(isCode){
            console.log('')
            console.log("I'm sorry, there's allready an element with that code in the system.")
        }else if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('')
            console.log("All the fields of the product must be puted in.")
        }else{

            const newProduct = {
                id: this.id++,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }

            this.products.push(newProduct)

            console.log('')
            console.log("Product successfully added to the products list.", newProduct)

        }
    }

    getProducts(){
        console.log('')
        console.log('The products in the list are: ')
        console.log(this.products)
    }

    getProductById(id){
        const product = this.products.find( product => product.id === id)

        if(!product){
            console.log('Not found')
        }else{
            console.log('')
            console.log(`The product with the id ${id} is: `)
            console.log(product)
        }
    }


}


const manager = new ProductManager()

console.log('Adding products...')
manager.addProduct('deck','wood',300,'./img/deck.jpg',12,1000)
manager.addProduct('trucks','steel',500,'./img/trucks.jpg',123,1000)


console.log('')
console.log('Adding product with errors:')

manager.addProduct('wheels',200)
manager.addProduct('bearings','steel',100,'./img/bearings.jpg',12,1000)

manager.getProducts()

console.log('')
console.log('Now We will find a product that exists in the list: ')
manager.getProductById(2)

console.log('')
console.log("Now we will look for a product that doesn't exist in the list: ")
manager.getProductById(5)