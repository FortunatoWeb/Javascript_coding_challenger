/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //target = parseInt(target);
    for(let i=0; i<nums.length;i++){
        for(let j=i+1; j<nums.length;j++){
            let sum = (nums[i]+nums[j]);
            if(sum == target){
                return [i, j];
            }
        }
    }
    return null;
};

console.log(twoSum([2,7,11,15],9));