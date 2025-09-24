// ======================================================
// INSERTION SORT
// ======================================================

// -------------------------------
// When to Use:
// -------------------------------
// Small or nearly sorted datasets
// Easy to implement
// Stable sort (doesn't change the relative order of equal elements)
// In-place (no extra memory)

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Avg / Worst Case: O(n^2)
//  -> when the array is sorted in reverse order

// Best: O(n)
//  -> when the array is already sorted — only one comparison per element

// -------------------------------
// ===== Space Complexity =====
// -------------------------------
// O(1)
// > does not use any extra space proportional to input size
// > all swaps are done directly in the input array

// -------------------------------
// EXPLANATION
// -------------------------------
// it builds the final sorted array 1 element at a time

// - Assume the 1st element is alr sorted
// 1. start from second element (let i = 1)
// 2. compare the current element (2nd element) with the one before it (1st element) (let j = i - 1)
// 3. if current element is smaller, shift the larger element to the right
// 4. insert the current element into its correct position
// 5. repeat for all elements in the array

// Example:
// [5,3,4,1,2]   -> initial: 1st idx sorted. compare 1st (sorted) and 2nd
// [3,5,4,1,2]   -> 1st & 2nd index sorted. compare to 3rd element and insert accordingly
// [3,4,5,1,2]   -> 1,2,3 index sorted. compare 4th element and insert accordingly
// [1,3,4,5,2]   -> 1,2,3,4 index sorted. compare 5th element and insert accordingly
// [1,2,3,4,5]   -> DONE

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j;

    console.log("arr: ", arr);
    console.log("----------------------");

    // if first elem's index (j) is 0 and above, & first elem's value (arr[j]) is higher than current value (arr[i]) u are comparing, shift it to the right
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      console.log("comparing:", "|| j =>", arr[j], " j+1 => ", arr[j + 1]);
      // console.log();
      console.log("shifting to the right...");
      console.log("----------------------");

      arr[j + 1] = arr[j]; // shift to the right
    }
    // insert current at correct spot

    console.log("BEFORE current: ", arr[j + 1]);

    arr[j + 1] = current;
    console.log("AFTER current: ", arr[j + 1]);
  }

  console.log("----------------------");
  console.log("FINAL: ", arr);
  return arr;
}

// console.log();
insertionSort([3, 5, 4, 2, 6]);
