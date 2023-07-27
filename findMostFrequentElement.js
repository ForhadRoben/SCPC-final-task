// Task 3:

function findMostFrequentElement(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const count = [];
    let maxCount = 0;
    let mostFrequentElement;


    arr.forEach(element => {
        if (count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }

        if (count[element] > maxCount) {
            maxCount = count[element];
            mostFrequentElement = element;
        }
    });

    return mostFrequentElement;
}

// Test case
const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(numbers);
console.log("most frequent element is:", mostFrequent);
