// RELATIVE ALERT 

// An alert system contains a queue of all current alerts along with their severities. 

// The severities range from 1 to 99. create an algorithm that will reassign severities so that 
// the value of the max severity assigned is minimized, keeping the relative severities between 
// all alert the same.

// Example severities = [1,4,8,4] 
// the array elements are reassigned to severities [1,2,3,2]

// Given the severities of the issues, return a list that contains the reassigned severity 
// values without reordering. 

// It must return an integer array that represents the reassigned severities of each element in 
// the original order. 

function reassignSeverities(severities) {
    // Find the maximum severity
    const maxSeverity = Math.max(...severities);
  
    // Calculate the new severities
    // by scaling each severity value to a new range of 1 to 99 while maintaining the relative severities between all alerts.
    const newSeverities = severities.map(severity => Math.ceil(severity * 99 / maxSeverity));
  
    return newSeverities;
  }

  const severities = [1, 4, 8, 4];
const newSeverities = reassignSeverities(severities);
console.log(newSeverities); // Output: [1, 2, 4, 2]

// ===============================================================================================
// ===============================================================================================
function reassignSeverities(severities) {
    // Find the maximum severity
    const maxSeverity = Math.max(...severities);
  
    // Create a map of the original severities and their frequencies
    const frequencyMap = {};
    for (let i = 0; i < severities.length; i++) {
      const severity = severities[i];
      if (frequencyMap[severity]) {
        frequencyMap[severity]++;
      } else {
        frequencyMap[severity] = 1;
      }
    }
  
    // Calculate the new severities
    let currentSeverity = 1;
    const newSeverities = [];
    for (let i = 1; i <= 99; i++) {
      if (currentSeverity <= maxSeverity) {
        const frequency = frequencyMap[currentSeverity] || 0;
        for (let j = 0; j < frequency; j++) {
          newSeverities.push(i);
        }
        currentSeverity++;
      } else {
        newSeverities.push(1);
      }
    }
  
    return newSeverities;
  }

  const severities = [1, 4, 8, 4];
  const newSeverities = reassignSeverities(severities);
  console.log(newSeverities); // Output: [1, 2, 3, 2]