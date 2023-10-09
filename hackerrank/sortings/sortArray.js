// Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency 
// of the values. If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.

// Example 1:
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Example 2:
// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Example 3:
// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

// Constraints:
// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100

var frequencySort = function(nums) {
    // 1. count the frequency of each element in the array 
    const frequencyMap = {}; //  to store the frequency of each element. 

    nums.forEach(num => {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    })

    // 2. sort the array based on the frequency and element 
    nums.sort((a, b) => {
        // check if the frequencies of the two elements are equal.
        if (frequencyMap[a] === frequencyMap[b]) {
            return b - a; // sort them in decreasing order
        } else {
            return frequencyMap[a] - frequencyMap[b]; // sort them in decreasing order
        }
    })

    return nums; 
}