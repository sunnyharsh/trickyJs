// Eg 1:nums = [2, 7, 11, 15] sum =9 output = [0, 1]
// Eg 2:nums = [3, 2, 4] sum = 6 output = [1, 2]

const twoSum = function (nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        console.log(hash[target - n], "+++", hash)
        if (hash[target - n] !== undefined) {
            return [hash[target - n], i]
        }
        hash[n] = i
    }
    return [];
}

console.log(twoSum([3, 2, 4, 11, 12, 34], 46))