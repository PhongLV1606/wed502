
/**
 * Hàm tính chu vi và diện tích hình chữ nhật
 * @param width 
 * @param height
 * @returns 
 */
export function rectangleInfo(width: number, height: number): { perimeter: number; area: number } {
    const perimeter = 2 * (width + height);
    const area = width * height;
    return { perimeter, area };
}
const result = rectangleInfo(5, 10);
console.log(`Chu vi: ${result.perimeter}, Diện tích: ${result.area}`);
