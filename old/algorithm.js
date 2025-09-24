function addUpTo(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

// console.log("====LINEAR SEARCH===");

// console.log("=====================================");
// console.log("CALCULATE ALL SUM FUNCTION ==> ", addUpTo(3));

// ====================================================================================
//  LINEAR SEARCH
// ====================================================================================
// STEPS:
// - accepts array and value
// - loop thru array & check if current array element is equal to value
// - if it is, return index at which element is found
// - if value is never found, return false

// -------------------
// BIG O
// -------------------
// - O(1) - best 
//   > if find it right away || array is small 

// - O(n) - avg & worst
//   > as n grows, the length of the array grows 

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return false;
}

// console.log("=====================================");
// console.log("LINEAR SEARCH");
// console.log("=====================================");
// console.log(linearSearch([1, 2, 3, 4, 5], 2));
// console.log(linearSearch([1, 2, 3, 4, 5], 8));
// console.log("=====================================");

// ====================================================================================
//  BINARY SEARCH
// ====================================================================================
// - works only on SORTED arrays
// - faster than linear search
// - start from MIDDLE -> search val in either L/R -> (if in L), cut in the middle again, search val in L/R till value is found.
// - Idea is like Divided & Conquer

// STEPS:
// - function accepts a sorted array & value
// - create a Left Pointer at Start of array, & Right Pointer at End of array
// - If Left pointer comes before Right pointer,
//      => create a pointer in middle
//      => if its the value, return index
//      => if value too small, move Left Pointer UP
//      => if value too big, move Right Pointer DOWN
// - if value not found, return false

// BIG O
// - O(1) - best case
// - O(n) - worst and avg case

function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);
  console.log("array index (positions)=> ", start, end, mid);
  console.log("array values => ", array[start], array[end], array[mid]);

  // see if middle if the selected value
  while (array[mid] !== value) {
    if (value < array[mid]) {
      end = mid - 1; // if value is smaller than mid, move to left
    } else {
      start = mid + 1; // if value is bigger than mid, move to right
    }
    mid = Math.floor((start + end) / 2); // new mid
  }
  return array[mid] === value ? mid : false;
}

// for loop - binary search
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  
  for (let i = 0; i < arr.length; i++) {
      let mid = Math.floor((start + end) / 2);
      
      if (arr[mid] === value) return mid;
      
      if (arr[mid] > value) {
          // mid is bigger than value
          end = mid - 1;
          
      } else {
          // mid is smaller than value 
          start = mid + 1;
      }
  }
  return -1;
}

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

// console.log("BINARY SEARCH");
// console.log("=====================================");
// console.log(binarySearch([1, 2, 3, 4, 5], 2));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
// console.log("=====================================");

// ====================================================================================
//  NAIVE STRING SEARCH
// ====================================================================================
// search for a short string within the long string
// eg. find abc in abcdef
// eg. find zoo in zozooozoozo

// STEPS:
// - loop over the long string
// - loop over the short string
// - if chars dun match, break out of inner loop
// - if chars match, keep going
// - if completed the inner loop & find a match, Increment the count of matches
// - return the count

// BIG O
//

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // i & j is the index. value is short[j], long[i]
      console.log("long[i+j]", long[i + j]);
      console.log("short[j]", short[j]);

      if (short[j] !== long[i + j]) {
        console.log("BREAK");
        break;
      }

      if (j === short.length - 1) {
        console.log("FOUND ONE!");
        count++;
      }
    }
  }
  console.log("count", count);

  return count;
}

// console.log("NAIVE STRING SEARCH");
// console.log("=====================================");
// console.log(naiveSearch("abcdef", "cde"));
// console.log("=====================================");
// console.log(naiveSearch("zozooozoozo", "zoo"));

// ====================================================================================
// BUBBLE SORT
// ====================================================================================
// 3 2 1 4 8 5

// step 1: compare index 0 & 1, -> 1 & 2, 2 & 3, 3 & 4, till end
// repeat step 1 till everything is sorted out
// Conclusion: sorted based on Biggest to Smallest

// STEPS:
// - start looping from end of array towards the beginning w var i
// - start inner loop from beginning until (i-1) w var j
// - if arr[j] is greater than arr[j+1], swap the 2 values
// - return the sorted array

// BIG O:
// - O(n) - best
// - O(n^2) - worst and avg case

// ES5
function swap(arr, index1, index2) {
  let temp = arr[index1]; // store index 1 in temp
  arr[index1] = arr[index2]; // store index2 in index1
  arr[index2] = temp; // swap current index2 to temp (index1)
}

// ES2015
const swap2015 = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

// =====================================================================

function bubbleSort(arr) {
  let noSwaps;
  // on each iteration of the outer loop, the largest element "bubbles up" to the end of the array, so we can safely ignore it in the next iteration.
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    //  iterates over the unsorted part of the array, swapping adjacent elements if they are in the wrong order.
    for (let j = 0; j < i - 1; j++) {
      // compare the 2 numbers, if the L num is bigger than R num, swap.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false; // optimize the algorithm by breaking out of the loop early if no swaps were made 
      }
    }
    if (noSwaps) break; 
  }
  return arr;
}

// console.log("Bubble Sort 1 => ", bubbleSort([45, 37, 29, 8]));
// console.log("Bubble Sort 2 => ", bubbleSort([45, 100, -30, 5]));

// ====================================================================================
// SELECTION SORT
// ====================================================================================
// 3 2 1 4 8 5
// step 1: compare 1st smallest value w the next value [eg. index 0 and 1]
// step 2: if index 0 is smaller, compare index 0 w index 2
// step 3: if index 2 is smaller, index 2 become the smallest value to be compare w the rest of the values. eg. [index 2 and 3 => 2,4 => 2,5 => end]
// step 4: repeat till end

// Conclusion: sorted based on Smallest to Biggest

// BIG O
// - O(n^2) : best, avg, worst case

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // store 1st elem as smallest (to compare)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    console.log("---------------");
    console.log(arr);
    console.log("swapping to => ");
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}
// console.log("==================");
// console.log("SELECTION SORT 1 =>", selectionSort([34, 22, 10, 19, 17]));

// ====================================================================================
// INSERTION SORT
// ====================================================================================
// Step 1: compare & sort index 0 & 1
// step 2: compare & sort index 0,1 and 2
// step 3: compare & sort index 0,1,2 & 3
// step 4: compare & sort accordingly to the pattern above till the end

// STEPS:
// 1. start w 2nd element in the array
// 2. compare 2nd element w the one before it & swap if necessary
// 3. cont to the next element & if it is in incorrect order, Iterate thru the sorted portion & place it in the correct position
// 4. repeat until array is sorted

// BIG O
// - O(n) - best case
// - O(n^2) - avg & worst case

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    // console.log("current Value =>", currentValue);

    // if 1st element (arr[j]) is greater than currentValue (2nd elem), swap.
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      console.log("j index =>", j);
      console.log("-------------------------");
      console.log("arr[j]", arr[j], " > ", "currentvalue ", currentValue);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
    console.log("currrent arr => ", arr);
    console.log("-------------------------");
  }
  return arr;
}

// console.log("==================");
// console.log("INSERTION SORT 1 =>", insertionSort([2, 1, 9, 7, 8]));

// ====================================================================================
// MERGE SORT
// ====================================================================================
// - merge and sort
// example [8,6,4,2,1,3,5,7]
// 1. split all the index into single array like [8],[6],[4], etc.
// 2. merge & sort [8,6], [4,2], [1,3], [5,7]
// 3. once sorted,merge & sort again [6,8,2,4], [1,3,5,7]
// 4. merge and sort again [1,2,3,4,5,6,7,8]. END.

// BIG O
// - O(n log n) - best, avg, worst case [TIME COMPLEXITY]
// - O(n) - [SPACE COMPLEXITY]

// MERGE ARRAYS
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    // if j is greater than i, put the i into the results array
    if (arr2[j] >= arr1[i] || j >= arr2.length) {
      results.push(arr1[i]);
      i++;
    } // if i is greater than j, put j into results array
    else if (arr1[i] > arr2[j] || i >= arr1.length) {
      results.push(arr2[j]);
      j++;
    }
  }

  return results;
}

// console.log("MERGE => ", merge([1, 10, 20], [2, 15, 99, 100]));

// MERGE AND SORT
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// console.log("MERGE SORT ==> ", mergeSort([10, 24, 76, 4, 6, 88, 73]));

// ====================================================================================
// QUICK SORT
// ====================================================================================
// pick an element and it will go to its correct position

// BIG O
// - O(n log n) - best, avg case
// - O(n^2) - worst case

function pivot(arr, start, end) {
  start = 0;
  end = arr.length + 1;

  // swap 2 elements
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

console.log("PIVOT => ", pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right); //3

//     quickSort(arr, left, pivotIndex - 1); //left
//     quickSort(arr, pivotIndex + 1, right); //right
//   }
//   return arr;
// }

// console.log("QUICKSORT => ", quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// ====================================================================================
// RADIX SORT
// ====================================================================================

function twoSum(nums, target) {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log("complement ", complement, nums[i]);
    if (complement in hashTable) {
      console.log("hashTable => ", hashTable);
      return [hashTable[complement], i];
    }
    hashTable[nums[i]] = i;
  }
}

// console.log("two sums => ", twoSum([1, 2, 3, 4, 5], 7));
