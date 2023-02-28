let obj = {
    name: 'A',
    address: 'B',
    obj1: {
        name: 'A1',
        address: 'B1',
        obj2: {
            name: 'A2',
            address: 'B2',
            obj3: {
                // And so on...
            }
        }
    }
}
// let newObj = JSON.parse(JSON.stringify(obj))
// let newObj = Object.assign({}, obj)
function deepCopyObj(inputValue) {
    if (typeof inputValue != "object") {
        return inputValue
    }
    let copy = Array.isArray(inputValue) ? [] : {}
    for (key in inputValue) {
        const value = inputValue[key];
        copy[key] = deepCopyObj(value)
    }
    return copy;
}
let newObj = deepCopyObj(obj)
newObj.obj1.obj2.name = "Test";
console.log(newObj.obj1.obj2.name);
console.log(obj.obj1.obj2.name);



