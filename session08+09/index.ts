// để kiểm tra kiểu dữ liệu thì dùng typeof
// kiểu dữ liệu của array là object
// làm sao để phân biệt array và object
/*
    dùng typeof không giải quyết được vấn đề
    vì typeof của array và object đều là object
    Array.isArray()
*/

console.log(5|6);
/*
    biểu diễn nhị phân cơ số 2
 */
let text1: string|number = "helllo"


let arr1:(number|string)[]=[5,"hoa"]
arr1.push(7);
let arr21:[number,string]=[5,"lan"]
arr21.push(6)
console.log(arr21);
type Test = string|number|null|undefined; 

let test1: Test = "";

console.log(5&&6);
// tính từ trái qua phải gặp falsy thì lấy còn không thì lấy thằng cuối cùng
// falsy: 0 null false undefined "" '' NaN
console.log(5||null &&7);

/*
    intersection : giao nhau
*/
type A = {
    name:string
}
type B = {
    address:string,
    id:number,
}

type C = A & B; //intersection
let c:C = {
    name:"hoa",
    address:"ha noi",
    id:5
}
console.log(c);




