// ===========================================================
// DYNAMIC PROGRAMMING
// ===========================================================

// - a method for solving a complex problem by breaking it down into simpler sub-problems. solve each of these sub-problems just once & store their solutions
// - only works on problems w Optimal Substructure & Overlapping Sub-problems

// Overlapping Sub-problems : can be broken down into sub-problems which r reused several times
// Optimal Substructure : if an optimal solution can be constructed from optimal solutions of its sub-problems

// BIG O OF FIBONACCI SEQUENCE
// Time Complexity - O(2^N) -- NOT GOOD

// -----------------------------------------------------------------------------------------------------------------------------------------

// USE MEMOIZATION
// - to store the results of expensive calls (repeated calls) & return the cached result when the same inputs occur again

// BIG O OF MEMOIZATION
// Time Complexity - O(N) -- much better 

// -----------------------------------------------------------------------------------------------------------------------------------------

// TABULATION
// - store results of previous result in a 'table' (array)
// - usually done using iteration 
// - better space complexity 


// FIBONACCI SEQUENCE 
function fib(n) {
    if (n <= 2) return 1;
    let res = fib(n - 1) + fib(n - 2);
    return res;
  }

// MEMOIZATION 
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}


// TABULATION 
function fib(n) {
    if (n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i =3; i <= n; i++) {
        fibNums[i] = fibNums[i+1] + fibNums[i-2];
    }
    return fibNums[n]; 
}