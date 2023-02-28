// Array.prototype.demo = function () {
//     return [...new Set(this)];
// }
// let num = [12, 12, 23, 12, 3, 1];
// console.log(num.demo())

// Object.prototype.demo1 = function () {
//     let newObj = { ...this, address: "bihar" }
//     return newObj
// }
// let obj = {
//     name: "sunny"
// }
// console.log(obj.demo1())

// function abc() {
//     let obj = { name: "raushan" }
//     obj.demo1();
//     console.log(obj.demo1())
// }
// abc()


// const input = {
//     'k1': function () {
//         return 2;
//     },
//     'k2': [1, 2, 3, 4],
//     'k3': {
//         'k4': 'v4',
//         'k5': {
//             'k6': 'v6'
//         }
//     }
// }

// let output = {
//     'k1': function () {
//         return 2;
//     },
//     'k2': [1, 2, 3, 4],
//     'k3.k4': 'v4',
//     'k3.k5.k6': 'v6'
// }




// var variable = 10;
// (() => {
//     variable_3 = 35;
//     console.log(variable_3, "first");
//     var variable_3 = 45;
//     variable_2 = 15;
//     console.log(variable, "second")
// })();
// console.log(variable_2, "third");
// console.log(variable_3, "fourth");
// var variable = 30;

// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i, "i")
//     }, 0)
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 * i)
// }
// let counter = function () {
//     let k = 0
//     return () => k++;
// }();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// var a;
// function test() {
//     a = 1;
//     if (true) {
//         let b = 1;
//     }
//     console.log(b);
// }
// test();
// console.log(a, "+++");


// function demo() {
//     var name = "sunny"
//     return function demo1() {
//         console.log("hello", name)
//     }
// }
// demo()()

