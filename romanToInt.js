// Task 7:

function romanToInt(roman) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanValues[roman[i]];
        const next = romanValues[roman[i + 1]];

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}

// Test case

console.log(romanToInt("XXI"));
