"use strict";
const sumDefault = (a = 1, b = 2) => a + b;
console.log("Tổng default:", sumDefault()); // 1 + 2 = 3
console.log("Tổng default:", sumDefault(5)); // 5 + 2 = 7
const sumOptional = (a, b) => {
    if (b === undefined)
        return a;
    return a + b;
};
console.log("Tổng optional:", sumOptional(5)); // 5
console.log("Tổng optional:", sumOptional(5, 3)); // 8
const sumRest = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log("Tổng rest:", sumRest(1, 2, 3, 4, 5)); // 15
