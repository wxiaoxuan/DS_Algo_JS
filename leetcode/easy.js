
// 1. CHECK DISTANCES BTW SAME LETTERS
// 2. TWO SUMS 
// 3. Find All Numbers Disappeared in an Array
// 4. Best Time to Buy and Sell Stock
// 5. Binary Search 
// 6. CLIMBING STAIRS 

// =========================================================================================================================
// CHECK DISTANCES BTW SAME LETTERS
// =========================================================================================================================

// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. 
// You are also given a 0-indexed integer array distance of length 26.
// Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).
// In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.
// Return true if s is a well-spaced string, otherwise return false.

// --------------------------------------------------------------------------------------------------------------------------
// EXAMPLE #1
// --------------------------------------------------------------------------------------------------------------------------
// Input: s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: true
// Explanation:
// - 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.
// - 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.
// - 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.
// Note that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.
// Return true because s is a well-spaced string.

// --------------------------------------------------------------------------------------------------------------------------
// EXAMPLE #2
// --------------------------------------------------------------------------------------------------------------------------
// Input: s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: false
// Explanation:
// - 'a' appears at indices 0 and 1 so there are zero letters between them.
// Because distance[0] = 1, s is not a well-spaced string.

// CONSTRAINTS
// -------------
// 2 <= s.length <= 52
// s consists only of lowercase English letters.
// Each letter appears in s exactly twice.
// distance.length == 26
// 0 <= distance[i] <= 50

// --------------------------------------------------------------------------------------------------------------------------
// SOLUTION
// --------------------------------------------------------------------------------------------------------------------------
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */

var checkDistances = function(s, distance) {
    // to keep track of the first occurrence of each letter in the string
    let indices = new Array(26); 
    indices.fill(-1); // set each element to -1 initially

    // store the indices of the letters in the string 
    for (let i =0; i < s.length; i++) {
        const alphabetIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
        // store the index of the character in the array 
        if (indices[alphabetIndex] === -1) {
            indices[alphabetIndex] = i;
        } else {
            //calculates the distance between the two occurrences of the letter
            const dist = i - indices[alphabetIndex] - 1;
            // if distance dont match, return false 
            if (dist !== distance[alphabetIndex]) {
                return false;
            }
            indices[alphabetIndex] = -1; // if distance match, reset the letter to -1 again 
        }
    }

    // check if any letter in the string is not paired 
    for (let i = 0; i < indices.length; i++) {
        if (indices[i] !== -1) {
            return false;
        }
    }
    
    return true;
};



// =========================================================================================================================
// TWO SUMS
// =========================================================================================================================

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// --------------------------------------------------------------------------------------------------------------------------
// EXAMPLE #1
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// --------------------------------------------------------------------------------------------------------------------------
// EXAMPLE #2
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// --------------------------------------------------------------------------------------------------------------------------
// EXAMPLE #3
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [3,3], target = 6
// Output: [0,1]

// --------------------------------------------------------------------------------------------------------------------------
// SOLUTION
// --------------------------------------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // initialise empty hash map
    
    // loops thru nums array
    for (let i = 0; i < nums.length; i++) {
        // calc the diff btw the target and the current element
        const difference = target - nums[i];
       // found 2 elements that add up to target 
        if (map.has(difference)) {
            return [map.get(difference), i]; // return indices as array
        }
         // store the current element & its index (diff) into the map
        map.set(nums[i], i);  
    }
    return []; // return empty array, no pair add up to the target 
};

// =========================================================================================================================
// Find All Numbers Disappeared in an Array
// =========================================================================================================================

// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

// --------------------------------------------------------------------------------------------------------------------------
// Example 1:
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// --------------------------------------------------------------------------------------------------------------------------
// Example 2:
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [1,1]
// Output: [2]
 
// --------------------------------------------------------------------------------------------------------------------------
// Constraints:
// --------------------------------------------------------------------------------------------------------------------------
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// --------------------------------------------------------------------------------------------------------------------------
// SOLUTION
// --------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numsArray = [];

    for (let i = 1; i < nums.length + 1; i++) {
        if (!nums.includes(i)) {
            numsArray.push(i);
        }
    }

    return numsArray;
};


// =========================================================================================================================
// Best Time to Buy and Sell Stock
// =========================================================================================================================
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// --------------------------------------------------------------------------------------------------------------------------
// Example 1:
// --------------------------------------------------------------------------------------------------------------------------
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// --------------------------------------------------------------------------------------------------------------------------
// Example 2:
// --------------------------------------------------------------------------------------------------------------------------
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 
// --------------------------------------------------------------------------------------------------------------------------
// Constraints:
// --------------------------------------------------------------------------------------------------------------------------
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// --------------------------------------------------------------------------------------------------------------------------
// SOLUTIONS
// --------------------------------------------------------------------------------------------------------------------------

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;

   
};


// =========================================================================================================================
// BINARY SEARCH 
// =========================================================================================================================
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// --------------------------------------------------------------------------------------------------------------------------
// Example 1:
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// --------------------------------------------------------------------------------------------------------------------------
// Example 2:
// --------------------------------------------------------------------------------------------------------------------------
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// --------------------------------------------------------------------------------------------------------------------------
// Constraints:
// --------------------------------------------------------------------------------------------------------------------------
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
   
   while (start <= end) {
       let mid = Math.floor((start + end) / 2);

       if (nums[mid] === target) {
           return mid;
       } else if (nums[mid] < target) {
           start = mid + 1;
       } else {
           end = mid - 1;
       }
   }
   return -1;
}; 


// =========================================================================================================================
// CLIMBING STAIRS 
// =========================================================================================================================

/*You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45

 @param {number} n
 @return {number}\

 fibonacci sequence

 url: https://leetcode.com/problems/climbing-stairs/description/
*/

// Time Complexity - O(n)
// Space Complexity - O(1)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) return 1;
    let prev1 = 1, prev2 = 1;

    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}; 

// =========================================================================================================================
// 2D ARRAY
// =========================================================================================================================
// Print the largest (maximum) hourglass sum found in .

function hourglassSum(arr) {
    let vals = [];
    let sum;
    for(let i = 0; i < arr[0].length - 2; i++) {
        for(let j = 0; j < arr.length - 2; j++) {
            console.log(arr.length);
            let sum =   arr[j][i] + arr[j][i + 1] + arr[j][i + 2]
                                      + arr[j + 1][i + 1] +
                        arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2];
            vals.push(sum);
        }
    }
    return Math.max(...vals);
}

// int multi_dim[2][3];
// 2 row, 3 col

function hourglassSum(arr) {
    // Write your code here
    let maxSum = [];
    // column
    for (let i = 0; i < arr.length - 2; i++) {
        // row
        for (let j = 0; j < arr[i].length - 2; j++) {
            let sum =   arr[j][i] + arr[j][i + 1] + arr[j][i + 2]
                                      + arr[j + 1][i + 1] +
                        arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2];
            
            maxSum.push(sum);
        }
    }
    console.log(maxSum);
    return Math.max(...maxSum);
}

// =========================================================================================================================
// CONTAINS DUPLICATE 
// =========================================================================================================================
// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
    let set = new Set(); // Each value can only occur once in a Set.
    for (let num of nums) {
      if (set.has(num)) {
        return true;
      }
      set.add(num);
    }
    return false;
  }
  

// Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. 
// If multiple values have the same frequency, sort them in decreasing order.
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

function frequencySort(nums) {
    // Count the frequency of each element
    const freqCount = {};
    for (let num of nums) {
      if (num in freqCount) {
        freqCount[num]++; // if it is already in the freqCount object, increment
      } else {
        freqCount[num] = 1;
      }
    }
  
    // Sort the array based on the frequency count of each element
    nums.sort((a, b) => {
      if (freqCount[a] !== freqCount[b]) {
        return freqCount[a] - freqCount[b];
      } else {
        return a - b;
      }
    });
  
    return nums;
  }