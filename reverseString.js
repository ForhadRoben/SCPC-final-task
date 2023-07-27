// Task 1:

function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Test case
const result = reverseString('hello world');
console.log(result);