// Task 4:

function indicesOfTwoNums(num, target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (i !== j) {
                if (num[i] + num[j] === target) {
                    return [i, j];
                }
            }
        }
    }
};

// Test case 

console.log(indicesOfTwoNums([1, 3, 6, 8, 11, 15], 14));