"use strict";
// src/rectangle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangleInfo = rectangleInfo;
/**
 * Hàm tính chu vi và diện tích hình chữ nhật
 * @param width chiều rộng
 * @param height chiều cao
 * @returns object gồm perimeter (chu vi) và area (diện tích)
 */
function rectangleInfo(width, height) {
    const perimeter = 2 * (width + height);
    const area = width * height;
    return { perimeter, area };
}
// Test thử
const result = rectangleInfo(5, 10);
console.log(`Chu vi: ${result.perimeter}, Diện tích: ${result.area}`);
