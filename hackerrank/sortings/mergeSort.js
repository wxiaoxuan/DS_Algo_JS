// Sort an array

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity 
// and with the smallest space complexity possible.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.
 
// Constraints:
// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

var mergeSort = function(nums) {
    if (nums.length <= 1) {
      return nums;
    }
  
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    const merged = merge(sortedLeft, sortedRight);
    return merged;
  };
  
  var merge = function(left, right) {
    const merged = [];
    let leftIdx = 0;
    let rightIdx = 0;
  
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        merged.push(left[leftIdx]);
        leftIdx++;
      } else {
        merged.push(right[rightIdx]);
        rightIdx++;
      }
    }
  
    while (leftIdx < left.length) {
      merged.push(left[leftIdx]);
      leftIdx++;
    }
  
    while (rightIdx < right.length) {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  
    return merged;
  };
  
  var sortArray = function(nums) {
    return mergeSort(nums);
  };
  