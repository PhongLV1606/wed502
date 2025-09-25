"use strict";
let myName = "phonglv16";
let myAge = 36;
let hasCar = false;
let myCourse = "Typescript";
let myCourses = ["Nodejs", "JSNC", "Typescript"];
let myPoints = [1, 2, 3, 4];
let student = {
    id: 1,
    name: "phonglv16",
    age: 20,
    address: "VN",
    vneid: "12345667",
};
let anyStudent = {
    id: "2",
};
function addNumber() {
    return "1";
}
function demkytu(str, char) {
    let count = 0;
    for (const c of str) {
        if (c.toLocaleUpperCase() === char.toLocaleUpperCase()) {
            count++;
        }
    }
    return `So lan xua hien ky tu ${char} trong chuoi ${str} la ${count} lan`;
}
let result;
result = 42;
result = "Success";
result = true;
let statusCode;
let orderStatus;
statusCode = "success";
let value = null;
let score = undefined;
let hasScore = false;
let input;
if (typeof input === "string") {
    input.toLocaleUpperCase();
}
let someValue = "This is a string";
let strLength = someValue.length;
let strLength2 = someValue.length;
