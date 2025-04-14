import fs from 'fs/promises'

class ProductManager{
    constructor(){
        this.path = './products.json'
    }

    addProduct = async(product)=>{
        let products = await this.getProducts()

        if(products.length){
            product.id = products[products.length - 1].id + 1
        }else{
            product.id = 1
        }

        products.push(product)
        console.log('Product Added')
        await fs.writeFile(this.path, JSON.stringify(products,null,2))
        try {
            console.log('Product Added')
            return product
        } catch (error) {
            console.error("We couldn't add the product.", error)
        }

    }

    getProducts = async()=>{
        try {
            let data = await fs.readFile(this.path, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            console.error('Error during the reading...', error)
            return []
        }
    }

    getProductById = async(pid)=>{
        const products = await this.getProducts()
        return products.find(product => product.id === pid) || null
    }

}

export default ProductManager