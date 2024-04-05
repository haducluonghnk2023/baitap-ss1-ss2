let firstName:string = "hoa";

let lastName:string = "nguyen";
function checkName(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = checkName(firstName);
lastName = checkName(lastName);
let fullName:string = firstName + " " + lastName;
console.log(fullName);
