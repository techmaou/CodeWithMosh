// console.log('hello World!')

// Practice 1 - Swap the values

// let a = 'blue';
// let b = 'red';

// let temp = a;
// a = b ;
// b = temp;

// console.log(a);
// console.log(b);

// let firstNum = prompt("Enter first number");
// let secondNum = prompt("Enter second number");

// if (firstNum > secondNum) console.log('first num is max');
// else console.log('second num is max')

// let max = (a,b) => {return (a > b) ? a : b;}

// function fizzBuzz (input) {
//     if (typeof(input)==='number') {
//         if (input % 15 ===0) console.log ('FizzBuzz')
//         else if (input % 3 ===0) console.log ('Fizz')
//         else if (input % 5 ===0) console.log ('Buzz')
//         else console.log (input)
//     }
//     else console.log ('Not a Number')
// }
// console.log(fizzBuzz(13))

// let ar = [undefined, null, '', false, 0, NaN];

// function countTruthy(input) {
//     for (const i of ar) {
//         if (input !== i) return console.log('truthy');
//     }
// }
// countTruthy('')

// for(let i = 0; i <= 5; i++) {
//     for(let j = 0; j <= i; j++) {
//         console.log('*');
//     }
// }

// function isPrime(num) {
//     let counter = 0;    
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) counter++;
//     }
//     return (counter <= 2) 
// }

// const limit = 20;

// for (let i = 1; i <= limit; i++) {
//     if (isPrime(i)) console.log(i);
// }

// function createAddress (street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// function Address (street, city, zipCode) {
//     this.street= street;
//     this.city= city;
//     this.zipCode= zipCode;
// }

// // const add1 = createAddress('a', 'b', 'c');
// const add1 = new Address('a', 'b', 'c');
// const add2 = new Address('a', 'b', 'c');

// // console.log(add1);
// // console.log(add2);

// function areEqual (add1, add2) {
//     for(let key in add1) if (add1[key] === add2[key]) return true;
// }

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5},
//     { title: 'b', year: 2018, rating: 4.7},
//     { title: 'c', year: 2018, rating: 3},
//     { title: 'd', year: 2017, rating: 4.5},
// ];

// function filter(year, rating){
//     const sortByYear = movies.filter(el => year === el.year)
//                              .filter(el => el.rating >= rating)
//                               .reverse((a,b) => a.rating - b.rating);
//     console.log(sortByYear)
// }

// filter(2018,4.5);

let sun = (args) => Array.isArray(args) ? args.reduce((prv, cur) => prv += cur) : 0;

sun([1,2,3,4]);