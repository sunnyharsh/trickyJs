// function printString(value) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(value)
//             resolve();
//         }, Math.random() * 1000)
//     })
// }
// async function printAll() {
//     await printString('A');
//     await printString('B');
//     await printString('C');
// }
// printAll();

// function x(){
//     let a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// z();
// x()();

// var i ="abc";

// [1,7,8,9,11,12] [1,2,7,8,9,11,12], [7,8,9,11,12]
// function findingPositiveNum(arr){
//     arr.sort((a, b)=> a-b);
//     let res=arr.filter(obj=> obj>0)
//     if(res[0]!=1){
//         return 1;
//     }else{
//         res.map((item, index)=>{
//             if(item!=index+1){
//                 return index+1
//             }
//         })
//     }
// }
// console.log(findingPositiveNum([1,-7,18,9,11,12]))