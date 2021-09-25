const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
//console.log(bigNumbers);
//console.log(smallNumbers);
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart Watch', price: 3000, color: 'black' }
];
const expensive = products.filter(product => product.price > 100);
//console.log(expensive);
const Black = products.filter(product => product.color == 'black')
    //console.log(Black);
const whiteItem = products.find(product => product.color == 'yellow');
console.log(whiteItem);