const curry = () => {
    let sum = 0;
    return function (num = 0) {
        sum += num;
        return sum;
    };
};

let sum = curry();
console.log(sum(3))
console.log(sum(4))
console.log(sum(10))