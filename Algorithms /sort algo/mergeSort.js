// ======================================================
// MERGE SORT
// ======================================================

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Best / Avg / Worst Case: O(n log n)

// -------------------------------
// ===== Space Complexity =====
// -------------------------------
// O(n)
// > extra for arrays (needs a temp buffer)

// -------------------------------
// When to Use:
// -------------------------------
// you want predictable O(n log n) time, stability, or you’re sorting linked lists / very large data (external sorting).

// -------------------------------
// EXPLANATION
// -------------------------------
// 1. keep splitting the array in half until the array has size of 1 element
// 2. then merge the halves in sorted order

// Example:
// [3,2,4,1]               -> initial array
// [3,2], [4,1]            -> split half
// [3], [2], [4], [1]      -> split into 1 element in the array
// [2,3], [1,4]            -> merge with sorting involved
// [1,2,3,4]               -> DONE

function mergeSort(arr) {
  // divide and conquer until array left 1 element
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 5, 2, 14, 99, 73]);

function merge(arr1, arr2) {
  console.log("merging: ", arr1, arr2);
  let arr = [];
  let i = 0;
  let j = 0;

  // step 1: compare which element is smaller and add to new array
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  // if 1st arr's length is LONGER than 2nd arr, add remaining values after step 1
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

  // if 1st arr's length is SHORTER than 2nd arr, add remaining values after step 1
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  console.log("results: ", arr);
  console.log("-------------------------");

  return arr;
}

// merge([1, 10, 50], [2, 14, 99, 100]);
