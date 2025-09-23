
export function sum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}


console.log(sum(1, 2, 3, 4, 5)); // 15
