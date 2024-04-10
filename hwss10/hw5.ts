class Departments {
    readonly id: number;
    private name: string;
    private employees: string[];
    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe(): void {
        console.log("ID:", this.id);
        console.log("Department Name:", this.name);
        // console.log("Employees:", this.employees);
    }
}
const department = new Departments(1,"department",["alice","john"]);
department.describe();