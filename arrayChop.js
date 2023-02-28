function chop(arr, size = arr.length) {
    const output = [];
    let i = 0;
    while (i < arr.length) {
        output.push(arr.slice(i, i + size));
        i = i + size
    }
    return output;
}
let arr = [312, 122, 141, 2, 3, 4, 5, 6, 7, 8];
console.log(chop(arr, 3));






