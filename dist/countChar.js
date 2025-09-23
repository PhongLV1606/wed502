"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countChar = countChar;
function countChar(str, char) {
    let count = 0;
    for (const c of str) {
        if (c === char)
            count++;
    }
    return count;
}
console.log(countChar("hello world", "l"));
