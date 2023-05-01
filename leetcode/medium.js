
// 1. THREE SUMS 
// 2. 

// =========================================================================================================================
// THREE SUMS
// =========================================================================================================================
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// --------------------------------------------------------------------------------------------------------------------------
// Example 1:
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// --------------------------------------------------------------------------------------------------------------------------
// Example 2:
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// --------------------------------------------------------------------------------------------------------------------------
// Example 3:
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints
// -------------
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// --------------------------------------------------------------------------------------------------------------------------
// SOLUTION
// --------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 // Returns array representing all unique triplets that add up to 0 
 var threeSum = function(nums) {
    let result = [];
     nums.sort((a, b) => a - b);  // sort in ascending order to skip duplicates and find unique triplets easier 
  
    // nums.length - 2 : to ensure that there are always two elements to the right of i for finding triplets.
    for (let i = 0; i < nums.length - 2; i++) {
  
      // check if the current number is a duplicate of the previous number
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;  // skip duplicates
      }
  
      // if not duplicate, set the left and right pointers
      let left = i + 1; // next index
      let right = nums.length - 1; // last index 
  
      // loop through the rest of the array
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
  
          // skip duplicates
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
  
          // move pointers
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return result;
  };