// function thường
function tong(): number {
    let a: number = 5, b: number = 10;
    return a + b;
}
console.log("Tổng function:", tong());

// arrow function
const tongArrow = (): number => {
    let a: number = 5, b: number = 10;
    return a + b;
};
console.log("Tổng arrow:", tongArrow());
