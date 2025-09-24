// ======================================================
// DYNAMIC PROGRAMMING
// ======================================================

// A problem solving technique where we break big problems into smaller sub problems, solve each subproblem once, and store (memoize) the result so we dun recompute it again

// Often used for optimization problems (finding max, min, or count of ways)

// TLDR: DP IS ->>
// Break problem → Identify subproblems → Reuse results → Build final solution.

// ======================================================
// KEY IDEAS
// ======================================================
// 1. Overlapping Sub-problems
//    > the same sub-problem gets solved multiple times
//    > Eg. Fibonacci sequence - Fib(5) = Fib(4) + Fib(3)
//    > Fib(4) is recalculated

// 2. Optimal Substructure
//    > Solution of bigger problem can be build w solutions
//      of smaller sub-problems
//    > Eg. Shortest Path
//    >     dist(A→C) = min(dist(A→B) + dist(B→C))

// 3. Memoization (Top Down)
//    > Recursive solution + cache results

// 4. Tabulation (Bottom-Up)
//    > Iterative solution, build the answer using DP table

// ======================================================
// CLASSIC EXAMPLES
// ======================================================

// 1. Fibonacci Numbers
//    - Naive recursion: Exponential time
//    - With DP: O(n)

// 2. Climbing Stairs
//    - Ways to climb n steps taking 1 or 2 steps at a time
//    - Same as Fibonacci

// 3. Knapsack Problem
//    - Maximize value in a bag with weight limit
//    - Classic DP optimization problem

// 4. Longest Common Subsequence (LCS)
//    - used in text diff tools (like Git)

// ======================================================
// GENERAL DP RECIPE
// ======================================================
// When faced with a DP problem:

// 1. Define State
//    - What does dp[i] represent? (e.g., min cost to reach step i)

// 2. State Transition
//    - How do smaller subproblems combine?
//      (e.g., dp[i] = min(dp[i-1], dp[i-2]) + cost[i])

// 3. Base Case
//    - Smallest possible input values

// 4. Final Answer
//    - Usually dp[n] or dp[m][n]

// Fibonacci Numbers (Recursive Solution) - Time Complex: O(2^n)
function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Fibonacci Numbers - (Optimized Version) O(n)
// store expensive function call's results & return the cached result when the inputs occur again
function fibMemoization(n: number, memo: Record<number, number> = {}): number {
  if (n <= 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
  
  console.log("memo", memo[n]);
  return memo[n];
}

fibMemoization(5);

// bottom up - better space complex
function fibTabulation(n: number): number {
  if (n <= 1) return 1;

  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log("tabulation", dp[n]);
  return dp[n];
}
fibTabulation(5);
