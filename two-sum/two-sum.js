/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){
    let obj = {}
    for(let i=0;i<nums.length;i++){
        let checkValue = target - nums[i];
        if(obj[checkValue]!=undefined){
           return [obj[checkValue],i]
        }
        obj[nums[i]] = i;
    }
    

    
}