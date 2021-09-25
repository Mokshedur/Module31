const myObject = {
  x: 2, y: 50, z: 600, a: 25, b: 68
};
const { x, b } = myObject;
//console.log(x);

//destructuring array 
const [p, q] = [45, 37, 91, 86];
//console.log(p, q);


const [best, faltu] = ['mootaj', 'poroshi'];
//console.log(best, faltu);


const company = {
  name: 'Gp',
  ceo: { id: 1, name: 'Momin', food: 'fucka' },
  web: {
    work: 'website development', employee: 22, framework: 'react'
  }
}
//const { name, food } = company.ceo;
console.log(company?.ceo?.q?.food);

