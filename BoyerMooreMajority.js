function boyerMooreMajority(nums) {
    let candidate = null;
    let count = 0;

    // Phase 1: Find the candidate for majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify if the candidate is the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > Math.floor(nums.length / 2) ? candidate : null;
}

// Example usage
const nums = [3, 3, 4,4,4,4,4,4,4,4,4, 2, 3, 3, 3];
const majorityElement = boyerMooreMajority(nums);

console.log(majorityElement);


// Use Cases

// Voting systems: Identify the winner in an election with a guaranteed majority.
// Data streams: Efficiently find the majority element in streaming data.
// Error detection: Identify a common value in noisy or faulty data sets.
