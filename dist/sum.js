"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
