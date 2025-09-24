// ======================================================
// BASIC BUBBLE SORT
// ======================================================

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Best / Avg / Worst Case: O(n^2)
// keeps looping full length

// -------------------------------
// ===== Space Complexity =====
// -------------------------------
// O(1)
// > does not use any extra space proportional to input size
// > all swaps are done directly in the input array

// -------------------------------
// EXPLANATION
// -------------------------------
// Sort from BIGGEST value to SMALLEST value 
// In each loop, it search the biggest value from Left to Right 
// > is index 0 bigger than index 1? yes. swap. 
// > is index 1 bigger than index 2? no. dun swap. 
// > is index 2 bigger than index 3? yes. swap. 
// > continue till last index, then repeat.


function bubbleSortBasic(arr) {
  console.log("=== bubbleSortAvgWorstCase === ");

  // Outer loop controls number of passes
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("array: ", arr);
    // Inner loop handles the actual comparisons/swaps
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log("swap", i, "comparing:", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("final: ", arr);
  return arr;
}

bubbleSortBasic([2, 4, 1, 3, 6]);

// Output:
// loop 4 times
// array:  (5) [2, 4, 1, 3, 6]
// comparing: 2 4
// comparing: 4 1
// comparing: 4 3
// comparing: 4 6
// array:  (5) [2, 1, 3, 4, 6]
// comparing: 2 1
// comparing: 2 3
// comparing: 3 4
// array:  (5) [1, 2, 3, 4, 6]
// comparing: 1 2
// comparing: 2 3
// array:  (5) [1, 2, 3, 4, 6]
// comparing: 1 2
// final:  (5) [1, 2, 3, 4, 6]

// ======================================================
// OPTIMIZED BUBBLE SORT
// ======================================================
// ===== Time Complexity =====
// Best Case (alr sorted): O(n)
// Avg / Worst Case: O(n^2)

// exit early if no swaps

function bubbleSortOptimized(arr) {
  console.log("=== bubbleSortBestCase === ");

  // Outer loop controls number of passes
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("array: ", arr);
    let swapped = false;
    // Inner loop handles the actual comparisons/swaps
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log("swap", i, "comparing:", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  console.log("final: ", arr);
  return arr;
}

bubbleSortOptimized([2, 4, 1, 3, 6]);

// Output:
// loop 3 times
// array:  (5) [2, 4, 1, 3, 6]
// comparing: 2 4
// comparing: 4 1
// comparing: 4 3
// comparing: 4 6
// array:  (5) [2, 1, 3, 4, 6]
// comparing: 2 1
// comparing: 2 3
// comparing: 3 4
// array:  (5) [1, 2, 3, 4, 6]
// comparing: 1 2
// comparing: 2 3
// final:  (5) [1, 2, 3, 4, 6]