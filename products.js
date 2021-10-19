let products = []
const productCards = document.getElementsByClassName('gallery-card')

for(let i = 0; i < productCards.length; i++){
    products.push({
        id: i,
        amount: 1,
        price: getProductPrice(productCards[i]),
        name: getProductName(productCards[i]),
        image: getProductImage(productCards[i])
    })

    productCards[i].appendChild(generateAddToCartBtn(i))
}

function getProductPrice(productCard){
    return 'R$' + productCard.querySelector('.gallery-text').innerHTML.replaceAll(' ', '').replaceAll(',', '.')
}

function getProductName(productCard){
    return productCard.querySelector('.gallery-title').innerHTML
}

function getProductImage(productCard){
    return productCard.querySelector('img').getAttribute('src')
}

function generateAddToCartBtn(id){
    const button = document.createElement('button')
    button.innerHTML = 'adicionar ao carrinho'
    button.addEventListener('click', () => addToCart(id))
    return button
}

function addToCart(id){
    const product = getProductById(id)
    //TODO
}

function getProductById(id){
    for(product of products){
        if(product.id == id){
            return product
        }
    }
}