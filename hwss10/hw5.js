"use strict";
class Departments {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log("ID:", this.id);
        console.log("Department Name:", this.name);
        // console.log("Employees:", this.employees);
    }
}
const department = new Departments(1, "department", ["alice", "john"]);
department.describe();
