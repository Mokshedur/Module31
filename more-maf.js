// const numbers = [10, 20, 30, 40];
// const result = numbers.map(x => x * x);
// console.log(result);
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(f => f.length);
//console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart Watch', price: 3000, color: 'pink' }
]

const productName = products.map(p => p.name);
const productPrice = products.map(p => p.price);
//console.log(productPrice);
products.map(p => console.log(p));