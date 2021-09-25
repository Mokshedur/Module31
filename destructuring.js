// const fish = {
//   id: 58, name: 'king Hilisha', price: 9000, phone: '0171755555', address: 'chandpur', dress: 'silver'
// };
// const phone = fish.phone;
// const address = fish.address;

// console.log(phone, address);
const company = {
  name: 'Gp',
  ceo: { id: 1, name: 'Momin', food: 'fucka' },
  web: {
    work: 'website development', employee: 22, framework: 'react'
  }


};
const { work, framework } = company.web;
console.log(work, framework);