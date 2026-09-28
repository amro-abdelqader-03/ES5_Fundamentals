product = {
    id: "3131234242",
    name: "iphone 18 pro max",
    price: 300,
    category: "Smart Phone",
    available: true
}

console.log(product)

console.log("=============================================")

product_convert = JSON.stringify(product)
console.log(product_convert)

console.log("=============================================")
try{
    product_convert = JSON.parse(product_convert)
} catch{
    console.log("Invalid JSON Format")
}
console.log("converted product")
console.log(product_convert )
console.log("Orginal product")
console.log(product )