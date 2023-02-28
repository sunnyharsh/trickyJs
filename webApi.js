// ***** Program 1 *****
// function printName(){
//     return new Promise((resolve)=>{
//         resolve({name:"sunny"})
//         console.log("hello")
//     })
// }
// async function PrintAll(){
//     await printName().then((res)=>{
//         console.log("res", res)
//     })
// }
// PrintAll()

// ***** Program 2 *****
// async function fetchNormal() {
//   const categories = await [{ name: "sunny" }]
//   const products = await [{ name: "raushan" }]
//   const users = await [{ name: "rupa" }]
//   return [categories, products, users];
// }
// fetchNormal().then((res) => console.log("res", res))

// ***** Program 3 *****
// const pErr = new Promise((resolve, reject) => {
//   reject("Always fails");
// });

// const pSlow = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "Done eventually");
// });

// const pFast = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Done quick");
// });

// Promise.all([pErr, pSlow, pFast]).then((value) => {
//   console.log(value);
// });

// ***** Program 4 *****
// const p1 = new Promise((resolve, reject) => {
//   resolve({ name: "Amit", age: 20 });
// });

// const p2 = new Promise((resolve, reject) => {
//   resolve({ name: "sunny", age: 20 });
// });

// const p3 = new Promise((resolve, reject) => {
//   resolve({ name: "rohan", age: 20 });
// });

// Promise.all([p1, p2, p3]).then((value) => {
//   console.log(value);
// });

// ***** Program 4 *****
// function x() {
//   for (var i = 1; i <= 10; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('Let us understand');

// }
// x();

// function f() {
//     console.log('In f');
// }
// async function g() {
//     console.log('Starting g');
//     await f();
//     console.log('Finishing g');
// }
// console.log('Starting the script')
// g();
// console.log('Finishing the script')