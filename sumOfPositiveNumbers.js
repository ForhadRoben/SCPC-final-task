// Task 2:

function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            sum += numbersArray[i];
        }
    }
    return sum;
}

// Test case

const result = sumOfPositiveNumbers([2, -5, 10, -3, 7]);
console.log(result);