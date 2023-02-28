let arr = [1, 2, 3, [34, 2, [1, 2, 3], [[12, 3, 4, 5], [1, 2, 5, 2]]], 3, 4, [3, [2, [45, [2, 4]]]]];
let flattenList = [];
function flattenArr(a) {
    a.map(res => {
        if (Array.isArray(res) && res.length > 0) {
            flattenArr(res);
        } else {
            flattenList.push(res);
        }
    })
}
flattenArr(arr);

console.log(flattenList.filter((obj, index) => flattenList.indexOf(obj) === index));