const cartKey = 'cart'

function setUpShoppingCart(){
    if(localStorage.getItem(cartKey) == null){
        localStorage.setItem(cartKey, JSON.stringify({
            totalPrice: 'R$0.00',
            items: []
        }))
    }
}

function getShoppingCart(){
    return JSON.parse(localStorage.getItem(cartKey))
}

function setShoppingCart(cart){
    localStorage.setItem(cartKey, JSON.stringify(cart))
}

function addItemToCart(item){
    const cart = getShoppingCart()
    cart.items.push(item)
    cart.totalPrice = calculateTotalPrice(cart.items)
    setShoppingCart(cart)
}

function removeItemFromCart(id){
    const cart = getShoppingCart()
    for(let i = 0; i < cart.items.length; i++){
        if(cart.items[i].id == id){
            cart.items.splice(i, 1)
        }
    }
    cart.totalPrice = calculateTotalPrice(cart.items)
    setShoppingCart(cart)
}

function calculateTotalPrice(cartItems){
    let totalPrice = 0
    for(let item of cartItems){
        totalPrice += parseFloat(removeMonetarySymbol(item.price)) * item.amount
    }
    return `R$${totalPrice}`
}

function removeMonetarySymbol(text){
    return text.slice(2, text.length)
}

function increment(id){
    const cart = getShoppingCart()
    for(let item of cart.items){
        if(item.id == id){
            item.amount++
        }
    }
    cart.totalPrice = calculateTotalPrice(cart.items)
    setShoppingCart(cart)
}

function decrement(id){
    const cart = getShoppingCart()
    for(let i = 0; i < cart.items.length; i++){
        if(cart.items[i].id == id){
            cart.items[i].amount--
        }
        if(cart.items[i].amount == 0){
            cart.items.splice(i, 1)
        }
    }
    cart.totalPrice = calculateTotalPrice(cart.items)
    setShoppingCart(cart)
}

setUpShoppingCart()