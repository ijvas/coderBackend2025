import fs from 'fs/promises'

class ProductManager{
    constructor(file){
        this.file = file
    }

    getProducts = async() =>{
        try {
            const products = await fs.readFile(this.file, 'utf-8')
            return JSON.parse(products)
        } catch (error) {
            console.log('Error during the reading.')
            return []
        }
    }


    getProductById = async(pid) =>{
        const products = await this.getProducts()
        return products.find(product => product.id === pid) || null
        
    }
    
    
    addProduct = async(product)=>{
        let products = await this.getProducts()
        
        if(products.length){
            product.id = products[products.length - 1].id + 1
        }else{
            product.id = 1
        }

        products.push(product)
        console.log('Product added.')
        await fs.writeFile(this.file, JSON.stringify(products,null,2))
        try {
            console.log('Products has been added to the list.')
            return product
        } catch (error) {
            console.log("We couldn't add the products to the list.", error)
        }

    }


    updateProduct = async(pid,changes) => {
        let products = await this.getProducts()
        const index = products.findIndex(product => product.id === pid)
        if(index === -1) return null

        products[index] = {...products[index], ...changes}
        await fs.writeFile(this.file, JSON.stringify(products,null,2))
        return products[index]
    }


    deleteProduct = async(pid) => {
        let products = await this.getProducts()
        const filteredProducts = products.filter(product => product.id !== pid)

        if(filteredProducts.length === products.length) return null

        await fs.writeFile(this.file, JSON.stringify(filteredProducts,null,2))
        return true
    }

    
}

export default ProductManager