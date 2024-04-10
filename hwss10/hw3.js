"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("name:", this.name);
        console.log("company:", this.company);
        this.printPhone();
    }
    printPhone() {
        console.log("Phone:", this.phone);
    }
}
const employee = new Employee("John", "Company", 23456);
employee.printInfo();
