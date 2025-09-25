"use strict";
const products = [
    { id: 1, name: "Điện thoại", price: 15000000, category: "Điện tử" },
    { id: 2, name: "Tivi Samsung", price: 12000000, category: "Điện tử" },
    { id: 3, name: "Gạo ST25", price: 25000, category: "Thực phẩm" },
    { id: 4, name: "Áo thun nam", price: 200000, category: "Thời trang" },
    { id: 5, name: "Sữa Vinamilk", price: 35000, category: "Thực phẩm" },
];
function filterByCategory(products, category) {
    return products.filter(p => p.category === category);
}
function calculateTotalPrice(products) {
    return products.reduce((sum, p) => sum + p.price, 0);
}
function findMinMax(products) {
    let min = products[0];
    let max = products[0];
    for (let p of products) {
        if (p.price < min.price)
            min = p;
        if (p.price > max.price)
            max = p;
    }
    return { min, max };
}
var FuelType;
(function (FuelType) {
    FuelType["XANG"] = "X\u0103ng";
    FuelType["DIEN"] = "\u0110i\u1EC7n";
})(FuelType || (FuelType = {}));
function calculateTravelTime(vehicle, distance) {
    return distance / vehicle.speed;
}
const vehicles = [
    { name: "Honda SH", type: "Xe máy", speed: 60, fuelType: FuelType.XANG },
    { name: "VinFast VF e34", type: "Ô tô", speed: 80, fuelType: FuelType.DIEN },
    { name: "Toyota Vios", type: "Ô tô", speed: 90, fuelType: FuelType.XANG },
];
// ===== Xuất kết quả ra HTML =====
const output = document.getElementById("output");
output.innerText = `
--- Quản lý Sản phẩm ---
Sản phẩm Thực phẩm: ${JSON.stringify(filterByCategory(products, "Thực phẩm"), null, 2)}
Tổng giá trị sản phẩm: ${calculateTotalPrice(products)}
Sản phẩm rẻ nhất & đắt nhất: ${JSON.stringify(findMinMax(products), null, 2)}

--- Quản lý Phương tiện ---
${vehicles.map(v => `${v.name} (${v.type}, ${v.fuelType}) đi 100km mất ${calculateTravelTime(v, 100).toFixed(2)} giờ`).join("\n")}
`;
