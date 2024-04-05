let num1:number = 5;
let num2:number = 7;

let sum:number = num1 + num2;
console.log(sum);

num1 = "10" as unknown as number;
num2 = true as unknown as number;

sum = num1 + num2;
console.log(sum);
// do kiểu dữ liệu mình khai báo không hợp lệ nên kết quả in ra sẽ không chính xác

