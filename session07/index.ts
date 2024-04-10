let a=7;
console.log("hl ptit");
/*
    1. array
*/ 
let students : string[] = ["hoa","hồng"];

let numbers :Array<number> =[2,5,6,9];
/*
    2. object
*/ 
let cat : {name:string,height:number,color:string} ={
    name:"tomy",
    height:50,
    color:"orange",
}
console.log(cat);

/*
    3. enum
*/
enum role{
    ADMIN=5,
    USER,

}
let person : {name:string,age:number,role:role.ADMIN} = {
    name:"minh",
    age:20,
    role:5
}
function sayHello():void {
    console.log("hello ptit");
    return
}
console.log(sayHello());

function sum(a:number,b:string):string{
    return a+b;
}
console.log(sum(5,"7"));

/*
    4.unknowns : không biết chưa biết
    cũng giống như any nhưng nó chặt hơn
    khi sử dụng phải kiểm tra

 */
function typeArray(userName:unknown):void{
   if(typeof userName =="string"){
    console.log("unknowns", userName.toUpperCase());
   }else {
    console.log("không phải là string");
    
   }
}
typeArray("qưertyj")
/*
    5.never : không bao giờ
    thường dùng trong vòng lặp vô tận không có điểm kết thúc
 */
function typeNever():never{
    while(true){
        console.log("vòng lặp tuần hoàn");
    }
}
// typeNever();