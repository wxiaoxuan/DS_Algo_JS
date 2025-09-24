// ======================================================
// QUICK SORT
// ======================================================

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Best / Avg : O(n log n)
// Worst Case: O(n^2)  -> when pivot is always smallest/largest

//  Tip: Use random pivot or median-of-three to avoid worst case.

// -------------------------------
// ===== Space Complexity =====
// -------------------------------
// O(log n)
// for recursive calls (in-place version)

// -------------------------------
// When to Use:
// -------------------------------
// Large datasets in memory

// Quick Sort’s average case O(n log n) and low overhead make it faster than Merge Sort in practice for many datasets.

// When you care about speed over guaranteed worst-case

// In real life, average case is more important than worst case, and Quick Sort often beats Heap Sort or Merge Sort due to better cache performance.

// Arrays (not linked lists)

// It works best with random-access memory because it needs to jump around during partitioning.

// For linked lists, Merge Sort is often better.

// You can choose a good pivot

// If the data is random or you can use random pivot / median-of-three, Quick Sort will likely perform well.

// In-place sorting with low extra memory

// In-place Quick Sort only uses O(log n) extra space, unlike Merge Sort’s O(n).
// With a good pivot strategy, Quick Sort is often the fastest sorting algorithm for in-memory arrays

// -------------------------------
// When to Avoid Quick Sort
// -------------------------------
// Data is already sorted or nearly sorted (choosing a bad pivot can lead to worst case O(n²)).
// → Use Insertion Sort or Merge Sort.

// Linked lists (Quick Sort loses efficiency here).

// Need guaranteed worst-case performance → Use Merge Sort or Heap Sort.

// -------------------------------
// EXPLANATION
// -------------------------------
// 1. in the loop, take the first element and compare w the rest of the elements in the arr
// 2. if elem is bigger than 1st element, move on to next element
// 3. if elem is smaller than 1st element, swap the element with the second index
// 4. if next elem is also smaller than 1st, swap element with the 3rd index
// 5. repeat until end of array
// 6. swap the first element with the last element of the 'swapped smaller element'
// 7. repeat step 1

// visualization in Tutorial 94. Intro to Quick Sort (Udemy - DSA)

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function pivot(arr, start, end) {
  //   start = 0;
  //   end = arr.length - 1;

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    console.log("===============================");

    console.log("ROUND", i);
    console.log("===============================");

    console.log("array: ", arr);
    console.log("COMPARING", " pivot: ", pivot, "arr[i]: ", arr[i]);
    // check if pivot is greater than the current element
    if (pivot > arr[i]) {
      // if greater, swap and increment the swap index
      swapIndex++;
      swap(arr, swapIndex, i);
      console.log("---------------------------------------");
      console.log("SWAPPING - ", arr[swapIndex], arr[i], "Current elem is smaller than pivot! ");
    } else {
      console.log("---------------------------------------");
      console.log("SKIPPED - current element is greater than pivot");
    }
  }
  console.log("---------------------------------------");
  console.log("array: ", arr);
  console.log("SWAPPING - with swap index ", arr[start], arr[swapIndex]);

  // swap 1st element with the swap index to move to the actual position
  swap(arr, start, swapIndex);
  console.log("=======================");
  console.log(" arr: ", arr);
  console.log("returning index: ", swapIndex);
  console.log("===============================");
  return swapIndex;
}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]); // 3

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1); // left side of pivot
    quickSort(arr, pivotIndex + 1, right); // right side of pivot
  }
  console.log("========== FINAL =============");
  console.log(" arr: ", arr);
  console.log("===============================");

  return arr;
}

// quickSort([4, 6, 9, 1, 2, 5, 3]);
quickSort([4, 8, 2, 1, 5, 7, 6, 3]); // 3
