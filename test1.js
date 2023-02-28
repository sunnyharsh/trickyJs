// var arr = [-12, -2, 2, 45, 56, -34, false, undefined, null];
// let getNewArr = arr.filter((obj) => obj > 0)
// console.log(getNewArr)

// let animals=[{type:"lion"}, "tiger"];
// let clones=animals.slice("")
// clones[0].type="bear";
// clones[1]="sheap";
// console.log(animals[0].type, clones[0].type)
// console.log(animals[1], clones[1])

// const a = { x: 1 };
// const b = { x: 1 };
// console.log(a['x'] === b['x']) //true
// console.log(a != b); //two different reference
// console.log(a === b); //two different reference
// console.log(a.x === b.x)

// if (true) {
//     var first = 'You'
// }
// function fScope() {
//     var second = "got this"
// }
// fScope();
// console.log(first); //you
// console.log(second) // reference error second is not defined
function Person(name) {
    this.name = name;
}
Person.prototype.age = 24;
const jayesh = new Person("Jc");
console.log(Person.hasOwnProperty("name"));
console.log(Person.hasOwnProperty("age"));