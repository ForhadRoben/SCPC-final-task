// task 8:


function secondSmallest(num) {
    if (num.length < 2) return 0;

    let first = num[0];
    let second = num[1];

    for (let i = 0; i < num.length; i++) {
        let current = num[i];
        if (current < first) {
            second = first;
            first = current;
        } else if (current < second && current !== first) {
            second = current;
        }
    }
    return second;
}

// Test case
console.log(secondSmallest([6, 3, -4, 8, 4, 5]));