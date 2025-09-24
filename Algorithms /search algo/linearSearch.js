// JS has in built search methods on arrays
// indexOf
// includes
// find
// findIndex

// ======================================================
// LINEAR SEARCH
// ======================================================

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Avg / Worst Case: O(n)
// if find it at the last of the array | or mid of array
// as the length of array (n) grows, the amount of time grows as well

// Best : O (1)
// - if find it right away

// -------------------------------
// ===== Space Complexity =====
// -------------------------------
// O(1)
// > does not use any extra space proportional to input size
// > all swaps are done directly in the input array

// -------------------------------
// EXPLANATION
// -------------------------------
// search thru the array one by one from Left to Right

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(["a", "b", "c", "d"], "c"));
console.log(linearSearch([1, 4, 12, 535, 13, 15, 22], 15));
