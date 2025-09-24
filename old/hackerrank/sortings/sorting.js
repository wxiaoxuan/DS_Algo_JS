// given an array of n item values, sort the array first by the frequency of each value, 
// then by the values themselves (in ascending order)

function sortItems(items) {
    // create a frequency map of the items 
    const frequencyMap = {};
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (frequencyMap[item]) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }
    }
}

// Sort items based on frequency and then the value 
const sortedItems = items.sort((a,b) => {
    // frequency 
    if (frequencyMap[a] > frequencyMap[b]) {
        return -1;
    } else if (frequencyMap[a] < frequencyMap[b]) {
        return 1;
    } else {
        // value 
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }
    return sortedItems;
})