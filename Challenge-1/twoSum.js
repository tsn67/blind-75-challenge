/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map();
    let arr = [];

    nums.forEach((n, i) => {
        if(map.has(target - n)) {
            arr.push(i);
            arr.push(map.get(target - n)); 
        } else {
            map.set(n, i);
        }
    });
    return arr;
    
};