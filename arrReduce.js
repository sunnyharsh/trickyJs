let arr = [12, 4, 5, 3, 2, 2, 1,];
let sum = arr.reduce((accum, curr, currIndex, arr) => {
    debugger;
    return accum + curr
}, 10)
console.log(sum)
