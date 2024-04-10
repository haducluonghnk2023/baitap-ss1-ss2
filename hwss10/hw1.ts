class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

let vehicle: Vehicle = new Vehicle("Toyota", 2019, "Honda");

console.log("name", vehicle.name);
console.log("year", vehicle.year);
console.log("company", vehicle.company);



