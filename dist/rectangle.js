"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangleInfo = rectangleInfo;
/**
 * Hàm tính chu vi và diện tích hình chữ nhật
 * @param width
 * @param height
 * @returns
 */
function rectangleInfo(width, height) {
    const perimeter = 2 * (width + height);
    const area = width * height;
    return { perimeter, area };
}
const result = rectangleInfo(5, 10);
console.log(`Chu vi: ${result.perimeter}, Diện tích: ${result.area}`);
