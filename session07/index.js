"use strict";
let a = 7;
console.log("hl ptit");
/*
    1. array
*/
let students = ["hoa", "hồng"];
let numbers = [2, 5, 6, 9];
/*
    2. object
*/
let cat = {
    name: "tomy",
    height: 50,
    color: "orange",
};
console.log(cat);
/*
    3. enum
*/
var role;
(function (role) {
    role[role["ADMIN"] = 5] = "ADMIN";
    role[role["USER"] = 6] = "USER";
})(role || (role = {}));
let person = {
    name: "minh",
    age: 20,
    role: 5
};
function sayHello() {
    console.log("hello ptit");
    return;
}
console.log(sayHello());
function sum(a, b) {
    return a + b;
}
console.log(sum(5, "7"));
/*
    4.unknowns : không biết chưa biết
    cũng giống như any nhưng nó chặt hơn
    khi sử dụng phải kiểm tra

 */
function typeArray(userName) {
    if (typeof userName == "string") {
        console.log("unknowns", userName.toUpperCase());
    }
    else {
        console.log("không phải là string");
    }
}
typeArray("qưertyj");
/*
    5.never : không bao giờ
    thường dùng trong vòng lặp vô tận không có điểm kết thúc
 */
function typeNever() {
    while (true) {
        console.log("vòng lặp tuần hoàn");
    }
}
// typeNever();
