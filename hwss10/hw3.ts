class Employee {
    name: string;
    protected company: string;
    private phone:number;
    constructor(name: string, company: string, phone:number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() :void{
        console.log("name:",this.name);
        console.log("company:",this.company);
        this.printPhone();
    }
    private printPhone(): void {
        console.log("Phone:", this.phone);
    }
}
const employee = new Employee("John", "Company", 23456);
employee.printInfo();