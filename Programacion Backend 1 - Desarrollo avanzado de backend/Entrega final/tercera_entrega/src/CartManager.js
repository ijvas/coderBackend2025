import fs from 'fs/promises';

class CartManager {
  constructor() {
    this.file = './data/carts.json'
  }

  async getCarts() {
    try {
      const data = await fs.readFile(this.file, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      return []
    }
  }

  async getCartById(cid) {
    const carts = await this.getCarts()

    if(!carts){
        return null
    }

    return carts.find(cart => cart.id === cid)
  }

  async createCart() {
    const carts = await this.getCarts()
    const newCart = { id: carts.length ? carts[carts.length - 1].id + 1 : 1, products: [] }
    carts.push(newCart)
    await fs.writeFile(this.file, JSON.stringify(carts, null, 2))
    return newCart
  }

  async addProductToCart(cid, pid) {
    let carts = await this.getCarts()
    const cartIndex = carts.findIndex(cart => cart.id === cid)
    if (cartIndex === -1) return null

    const productIndex = carts[cartIndex].products.findIndex(p => p.product === pid)
    if (productIndex === -1) {
      carts[cartIndex].products.push({ product: pid, quantity: 1 })
    } else {
      carts[cartIndex].products[productIndex].quantity += 1
    }

    await fs.writeFile(this.file, JSON.stringify(carts, null, 2))
    return carts[cartIndex]
  }
}

export default CartManager;