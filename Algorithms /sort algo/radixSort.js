// ======================================================
// RADIX SORT
// ======================================================

// A non-comparative sorting algorithm that sorts numbers (or strings) digit by digit, starting from the least significant digit (LSD) or the most significant digit (MSD), using a stable sorting algorithm like Counting Sort as a subroutine.

// Non-comparative → It doesn’t compare numbers directly like > or < (unlike Bubble, Merge, Quick Sort)
// Stable → Equal values keep their original order

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// If:
// n = number of elements
// d = number of digits in the largest number
// k = range of digits (0-9 → k=10)

// Best / Avg : O(n * d)    -> since Counting Sort for each digit is O(n + k)

// -------------------------------
// ===== Space Complexity =====
// -------------------------------
// O(n + k)    -> for counting array and output array

// -------------------------------
// When to Use:
// -------------------------------
// When the keys are integers or fixed-length strings
// When d is small compared to n
// When you need linear time sorting for specific data (like zip codes, phone numbers)

// -------------------------------
// EXPLANATION  (LSD version — most common)
// -------------------------------
// - sort digit by digit, starting from the units place, then tens, then hundreds.

// example
// [170, 45, 75, 90, 802, 24, 2, 66];    -> initial
// [170, 90, 802, 2, 24, 45, 75, 66]     -> Sort by units digit (0-9)
// [802, 2, 24, 45, 66, 170, 75, 90]     -> Sort by tens digit
// [2, 24, 45, 66, 75, 90, 170, 802]     -> Sort by hundreds digit [DONE]

// Math.abs()     -> always returns a positive value if value is in negative (eg. -5 to 5)
// Math.pow(x,y)  -> calcs x to the power of y
// Math.log10()   -> returns the base 10 logarithm of a number (eg. log10 (x))
// Math.floor()   -> round down and returns a whole number (eg. 2.76 to 2) (eg. -2.76 to -3)

function getDigit(value, i) {
  return Math.floor(Math.abs(value) / Math.pow(10, i)) % 10;
}

// find out how many digits are there in a number
function countDigits(value) {
  if (value === 0) return 1;
  return Math.floor(Math.log10(Math.abs(value))) + 1;
}

// return the no. of digits in the largest numbers in the array
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(arr[i]));
  }
  //   console.log("max digits:", maxDigits);
  return maxDigits;
}

// mostDigits([4, 8, 2, 10999, 5, 7, 6, 3]);

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  //   console.log("maxDigitCount", maxDigitCount);

  // loop no. of times based on the no. of digits in the largest numbers
  for (let i = 0; i < maxDigitCount; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      //   console.log(getDigit(arr[j], i));
      let digit = getDigit(arr[j], i);
      console.log("-------------------------");
      console.log("digit: ", digit);

      digitBuckets[digit].push(arr[j]);
    }
    console.log("-------------------------");
    console.log("buckets: ", digitBuckets);
    arr = [].concat(...digitBuckets);
    console.log("-------------------------");
    console.log("ROUND", i + 1, "ARRAY:", arr);
  }
}
radixSort([4, 8, 232, 72, 61, 33]);
