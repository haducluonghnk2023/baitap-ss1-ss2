"use strict";
function add(a, b) {
    if (typeof a === 'string') {
        const numA = parseFloat(a);
        if (isNaN(numA)) {
            return "không hợp lệ";
        }
        a = numA;
    }
    if (typeof b === 'string') {
        const numB = parseFloat(b);
        if (isNaN(numB)) {
            return "Không hợp lệ";
        }
        b = numB;
    }
    return a + b;
}
console.log(add(5, 5));
console.log(add("5", "15"));
console.log(add("abc", "10"));
function subtract(a, b) {
    if (typeof a === 'string') {
        const numA = parseFloat(a);
        if (isNaN(numA)) {
            return "không hợp lệ";
        }
        a = numA;
    }
    if (typeof b === 'string') {
        const numB = parseFloat(b);
        if (isNaN(numB)) {
            return "Không hợp lệ";
        }
        b = numB;
    }
    return a - b;
}
console.log(subtract(15, 5));
console.log(subtract("25", "15"));
console.log(subtract("abc", "10"));
function multiply(a, b) {
    if (typeof a === 'string') {
        const numA = parseFloat(a);
        if (isNaN(numA)) {
            return "không hợp lệ";
        }
        a = numA;
    }
    if (typeof b === 'string') {
        const numB = parseFloat(b);
        if (isNaN(numB)) {
            return "Không hợp lệ";
        }
        b = numB;
    }
    return a / b;
}
console.log(multiply(15, 5));
console.log(multiply("25", "15"));
console.log(multiply("abc", "10"));
function devide(a, b) {
    if (typeof a === 'string') {
        const numA = parseFloat(a);
        if (isNaN(numA)) {
            return "không hợp lệ";
        }
        a = numA;
    }
    if (typeof b === 'string') {
        const numB = parseFloat(b);
        if (isNaN(numB)) {
            return "Không hợp lệ";
        }
        b = numB;
    }
    return a * b;
}
console.log(devide(15, 5));
console.log(devide("25", "15"));
console.log(devide("abc", "10"));
