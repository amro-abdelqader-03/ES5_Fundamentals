// square of number
const squareNum = (a) => (a * a);

console.log(`square 2 = ${squareNum(2)}`);

// even or odd

const isEven = (a) => {return a%2 === 0};

console.log(`is 6 even = ${isEven(6)}`)

// products

let products = [
    {
        id: "3131234242",
        name: "iPhone 18 Pro Max",
        price: 300,
        category: "Smart Phone",
        available: true
    },
    {
        id: "5246789134",
        name: "Samsung Galaxy S26 Ultra",
        price: 280,
        category: "Smart Phone",
        available: true
    },
    {
        id: "7812345690",
        name: "MacBook Pro M5",
        price: 1200,
        category: "Laptop",
        available: true
    },
    {
        id: "9456123780",
        name: "Dell XPS 15",
        price: 950,
        category: "Laptop",
        available: false
    },
    {
        id: "2167893450",
        name: "AirPods Pro 3",
        price: 180,
        category: "Headphones",
        available: true
    },
    {
        id: "6389012457",
        name: "Sony WH-1000XM6",
        price: 350,
        category: "Headphones",
        available: true
    },
    {
        id: "4721568930",
        name: "iPad Pro M5",
        price: 800,
        category: "Tablet",
        available: true
    },
    {
        id: "8590234617",
        name: "Apple Watch Series 11",
        price: 400,
        category: "Smart Watch",
        available: false
    },
    {
        id: "3019457826",
        name: "Samsung Galaxy Tab S11",
        price: 650,
        category: "Tablet",
        available: true
    },
    {
        id: "6942173058",
        name: "Logitech MX Master 4",
        price: 100,
        category: "Computer Accessories",
        available: true
    }
];

const sumPrices = products.reduce((sum, product) => {
    sum += product.price
    return(sum)
},0)

console.log(sumPrices);
