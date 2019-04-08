// const data = require('./data.js')
// *************** TOY STORE **************

class Item {
  constructor(name, price, qty) {
    this.name = name
    this.price = price
    this.qty = qty
  }
  subtotal() {
    return this.price * this.qty
  }
}

class ShoppingCart {
  constructor(items = []) {
    this.items = items
  }
  totalPrice() {
    let total = 0
    for(let i = 0; i < this.items.length; i++) {
      total += this.items[i].subtotal()
    }
    return total
  }
  // addItem(item) {
  //   this.items.push(item)
  // }
  addItem(name, price, qty) {
    const newItem = new Item(name, price, qty)
    this.items.push(newItem)
  }

}


// Creating Items
let barbie = new Item('barbie', 49.99, 2)
let pikachu = new Item('pikachu', 17.99, 2)

// Init Shopping Cart
let cart = new ShoppingCart()

// Adding items :
cart.addItem(barbie)
cart.addItem(pikachu)

//
console.log(cart.items)

//
console.log(cart.totalPrice())
// Adding more items :
// cart.addItem2('Barbie Dream House', 799)
// cart.addItem2('Mercedez', 200, 3)

// console.log(cart.addItem(barbie))
// console.log(cart.addItem(pikachu))

// console.log(cart.addItem2('EarPods', 150, 1))
// console.log(cart.addItem(barbies))
// console.log(toy.subtotal())


