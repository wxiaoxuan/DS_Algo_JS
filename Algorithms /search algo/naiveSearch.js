// ======================================================
// NAIVE SEARCH
// ======================================================

// -------------------------------
// EXPLANATION
// -------------------------------
// - loop over the longer string
// - loop over shorter string
// - if chars dun match, break out of inner loop
// - if chars match, keep going
// - if complete inner loop and find a match, increment the count of matches
// return the count of matches

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log("comparing", long[i + j], short[j]);
      if (short[j] !== long[i + j]) {
        console.log("--- BREAK ---");
        break;
      }

      if (j === short.length - 1) {
        console.log("--- MATCH ---");
        count++;
      }
    }
  }
  console.log("count: ", count);
  return count;
}
naiveSearch("lorie loled", "lol");
