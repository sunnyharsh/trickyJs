function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);
    debugger;
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    const sortArr = [];
    debugger;
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortArr.push(leftArr.shift());
        } else {
            sortArr.push(rightArr.shift());
        }
    }
    return [...sortArr, ...leftArr, ...rightArr];
}
let arr1 = [12, -1, -4, 99, -99, 101, 67];
console.log(mergeSort(arr1));