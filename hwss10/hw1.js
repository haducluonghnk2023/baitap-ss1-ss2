"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let vehicle = new Vehicle("Toyota", 2019, "Honda");
console.log("name", vehicle.name);
console.log("year", vehicle.year);
console.log("company", vehicle.company);
