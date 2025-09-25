
const sumDefault = (a: number = 1, b: number = 2): number => a + b;

console.log("Tổng default:", sumDefault());       // 1 + 2 = 3
console.log("Tổng default:", sumDefault(5));      // 5 + 2 = 7


const sumOptional = (a: number, b?: number): number => {
    if (b === undefined) return a;
    return a + b;
};

console.log("Tổng optional:", sumOptional(5));    // 5
console.log("Tổng optional:", sumOptional(5, 3)); // 8


const sumRest = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log("Tổng rest:", sumRest(1, 2, 3, 4, 5)); // 15
