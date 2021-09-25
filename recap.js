//1. let and constant
const hubby = 'Omor sani';
let phone = 'iphone13';
phone = 'samsung a20';
//2. default parameter
//spread or three dots (...)
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
console.log(biggest);
//3. Tamplate string 
//avabe dynamic vabe amra kuno variable er man ta bosai dita pari
const myNotes = ` I am mojnu of ${hubby}. I donot have a laili`;
console.log(myNotes);
//4. Arrow function
// function square(x){
//   return x*x;
// }
const square = x => x * x;
//const result = square(9);
console.log(square(9));
