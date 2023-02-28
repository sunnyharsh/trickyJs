// const b = {
//     name: "Mars",
//     f: function () {
//         var self = this;
//         console.log(this.name); //
//         (function () {
//             console.log(this.name, "this");//
//             console.log(self.name, "self");
//         })();
//     }
// }
// b.f();

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message); //msg will come because here this refer to current object
//     }
// };
// object.logMessage()

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         // What is logged?
//         console.log(this.message);
//     }
// };
// // invalid call back function error throw
// setTimeout(object.logMessage(), 1000);


// const object = {
//     message: 'Hello, World!',
//     getMessage: () => {
//         const message = 'Hello, Earth!';
//         //undefined will come this refer here window object
//         return this.message;
//     }
// };
// console.log(object.getMessage());
