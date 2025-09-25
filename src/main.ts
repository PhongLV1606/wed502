let myName: string = "phonglv16";

let myAge: number = 36;

let hasCar: boolean = false;

let myCourse = "Typescript";

let myCourses: string[] = ["Nodejs", "JSNC", "Typescript"];

let myPoints: number[] = [1, 2, 3, 4];

interface Student {
    id: number;
    name: string;
    age: number;
    address: string;
    vneid: string;
}

let student: Student = {
    id: 1,
    name: "phonglv16",
    age: 20,
    address: "VN",
    vneid: "12345667",
};

let anyStudent: any = {
    id: "2",
};


function addNumber(): string {

    return "1";
}


function demkytu(str: string, char: string): string {
    let count: number = 0;
    for (const c of str) {
        if (c.toLocaleUpperCase() === char.toLocaleUpperCase()) {
            count++;
        }
    }
    return `So lan xua hien ky tu ${char} trong chuoi ${str} la ${count} lan`;
}




let result: number | string | boolean;
result = 42;
result = "Success";
result = true;


let statusCode: "success" | "error";
let orderStatus: "Pending" | "Processing" | "Confirmed";
statusCode = "success";


let value: string | null = null;
let score: number | undefined = undefined;
let hasScore: false | undefined = false;

let input: unknown;

if (typeof input === "string") {
    input.toLocaleUpperCase();
}


let someValue: any = "This is a string";

let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;
