// ======================================================
// SELECTION SORT
// ======================================================

// -------------------------------
// Pros:
// Very simple to understand and implement
// Works well for small datasets

// Cons:
// Inefficient on large datasets
// Always O(n²), even if the array is already sorted
// -------------------------------

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
// Sort from SMALLEST value to BIGGEST value
// In each loop, it search the smallest value from Left to Right
// 1. store the 1st element (index 0) as the smallestValue
// 2. compare the smallest value to the next item in the array until u find a smaller number
// 3. if smaller number is found, update the smallestValue and swap the position
// 4. continue until end of array
// 5. repeat until array is sorted

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    console.log("----------------------");
    console.log("arr:", arr, "smallest value: ", arr[smallest]);
    console.log("----------------------");

    for (let j = i + 1; j < arr.length; j++) {
      console.log("comparing", arr[smallest], arr[j]);
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    // after comparing, swap
    console.log("New smallest value: ", arr[smallest], "current smallest", arr[i]);
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  console.log("----------------------");
  console.log("FINAL: ", arr);
  return arr;
}

// Not efficient method example
function selectionSortNotGood(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        // swapping immediately in the loop increases the number of swaps, (less efficient)
        // as it causes it to swap multiple times inside inner loop
        let temp = arr[smallest];
        arr[smallest] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("FINAL: ", arr);
  return arr;
}

// console.log();
insertionSort([3, 5, 4, 2, 6]);
