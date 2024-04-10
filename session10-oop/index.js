"use strict";
class Person {
    // name :thuộc tính
    constructor(name, age, firstName, lastName, address) {
        // name : giá trị
        this.name2 = name;
        this.age2 = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    // nơi khai báo những phương thức method
    // ví dụ khai báo 1 phương thức show thông tin user
    showInfo() {
        console.log("xin chào ", this.firstName + " " + this.lastName);
    }
    showName() {
        console.log("xin chào ", this.name2);
    }
    getAge() {
        return this.age2;
    }
    setAge(age) {
        this.age2 = age;
    }
    // getter
    get address1() {
        return this.address;
    }
    set address1(address) {
        this.address = address;
    }
}
let std1 = new Person("hoa hồng", 10, "hong", "hoa", "hanoi");
//  std1 được gọi là 1 entance của class Person
// console.log(std1);
// gọi phương thức 
std1.showInfo();
std1.name2 = " minh hoang";
std1.showName();
console.log(std1.getAge());
// đi set tuổi
std1.setAge(1);
console.log(std1.getAge());
console.log(std1.address1);
// đi thay đổi địa chỉ thông qua setter
std1.address1 = "tphcm";
console.log(std1.address1);
