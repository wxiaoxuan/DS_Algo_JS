// ======================================================
// BINARY SEARCH
// ======================================================

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Avg / Worst Case: O(log n)
// reduce the search space by half with every iteration

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
// - only works on SORTED ARRAY
// - eliminate half of the remaining elements at a time
// - much faster form of search

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let mid = start + Math.floor((end - start) / 2);
    console.log("start", arr[start], "mid", arr[mid], "end", arr[end]);

    if (arr[mid] === value) return mid;

    if (arr[mid] > value) {
      // mid is bigger than value
      end = mid - 1;
    } else {
      // mid is smaller than value
      start = mid + 1;
    }
  }
  console.log("returning null");
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6));
