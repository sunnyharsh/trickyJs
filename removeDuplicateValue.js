let newLocalArr = []

let arr = [12, 12, 2, 4, 3, 1, 1];
function removeDuplicate(arr) {
    // First way 
    //     return arr.filter((item,
    //         index) => arr.indexOf(item) === index);

    // Second way
    let newLocalArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            newLocalArr.push(arr[i])
        }
    }
    return newLocalArr
};
console.log(removeDuplicate(arr))
