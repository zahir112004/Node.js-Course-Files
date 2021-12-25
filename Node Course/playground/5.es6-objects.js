// Object porperty shorthand
const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Dhaka'
}

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label: productLabel, stock, rating} = product
// console.log(productLabel, stock, rating)


const transaction = (type, { label = null, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)