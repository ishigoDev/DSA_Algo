function countingSort(arr) {
    if (arr.length <= 1) return arr;

    // Step 1: Find the range (min and max values)
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;

    // Step 2: Create and populate the count array
    const count = new Array(range).fill(0);
    for (let num of arr) {
        count[num - min]++;
    }

    // Step 3: Update count array with cumulative sums
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    
    // Step 4: Build the output array
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num - min] - 1] = num;
        count[num - min]--;
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(arr);

console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]



//Complexity
// Time Complexity : O(n+k), where n is the size of the input array, and k is the range of the input values.
// Space Complexity : O(k), for the counting array.

// Use Cases.
// Sorting integers or categorical data with a limited range.
// Histogram-based problems, such as frequency analysis.
// Sorting data where comparisons are not feasible or efficient