// console.log('API');
const user = { name: 'ranbir kapoor', id: 677 };
console.log(user);

// JSON== java scropt object Notation
const shop = {
    name: 'momin store',
    address: 'bangla baxar',

    products: ['pen', 'soap', 'rice'],
    isExpensive: false,
    profit: 54788,
}

console.log(shop);/* output==  {name: 'momin store', address: 'bangla baxar', products: Array(3), isExpensive: false, profit: 54788} */

const stringFied = JSON.stringify(shop);
console.log(stringFied);/* output== {"name":"momin store","address":"bangla baxar","products":["pen","soap","rice"],"isExpensive":false,"profit":54788} */

const converted = JSON.parse(stringFied);
console.log(converted);

const student = JSON.stringify({ name: "james", roll: 3 })
console.log(student.name);






