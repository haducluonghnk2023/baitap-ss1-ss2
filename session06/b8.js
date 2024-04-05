"use strict";
let firstName = "hoa";
let lastName = "nguyen";
function checkName(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = checkName(firstName);
lastName = checkName(lastName);
let fullName = firstName + " " + lastName;
console.log(fullName);
