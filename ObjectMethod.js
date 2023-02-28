// var person = {
//     [Symbol('name')]: 'John Doe',
//     [Symbol('age')]: 33,
//     "occupation": "Programmer"
//   };

//   const propOwn = Object.getOwnPropertyNames(person);
//   console.log(propOwn.length); // 1

//   let propSymb = Object.getOwnPropertySymbols(person);
//   console.log(propSymb.length);
// var obj={
//     name:"sunny",
//     age:28,
//     address:"Delhi",
//     hobby:"football & cricket"
// }
// var size = Object.keys(obj).length;

// for(key in obj){
//     console.log(obj[key])
// }
// obj.hasOwnProperty("name");

// Object.entries(obj);

// deepCompare
const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35
}
const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35
}
JSON.stringify(person1) === JSON.stringify(person2);