function missingNum(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    isDone = true;
    sortArr.forEach((obj, index) => {
        let num = sortArr[0] + index
        if (obj === num && isDone) {
            isDone = false
            return obj
        }
    });
}


console.log(missingNum([2, 3, 4, 6, 7, 8, 9, 10]));