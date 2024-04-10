"use strict";
// để kiểm tra kiểu dữ liệu thì dùng typeof
// kiểu dữ liệu của array là object
// làm sao để phân biệt array và object
/*
    dùng typeof không giải quyết được vấn đề
    vì typeof của array và object đều là object
    Array.isArray()
*/
console.log(5 | 6);
/*
    biểu diễn nhị phân cơ số 2
 */
let text1 = "helllo";
let arr1 = [5, "hoa"];
arr1.push(7);
let arr21 = [5, "lan"];
arr21.push(6);
console.log(arr21);
let test1 = "";
console.log(5 && 6);
// tính từ trái qua phải gặp falsy thì lấy còn không thì lấy thằng cuối cùng
// falsy: 0 null false undefined "" '' NaN
console.log(5 || null && 7);
let c = {
    name: "hoa",
    address: "ha noi",
    id: 5
};
console.log(c);
