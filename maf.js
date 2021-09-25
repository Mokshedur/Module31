const numbers = [4, 6, 8, 10];
const output2 = [];
const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);

}
//console.log(output2);
//1. loop
//2. element diya function ke call korci
//3. result ekta array er modde push korci
//const output = numbers.map(doubleIt);
const output = numbers.map(x => x * 2);
//console.log(output);
const square = number.map(x => x * 2);
console.log(square);