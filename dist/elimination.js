"use strict";
const bond = "H3CL4";
let temp = "";
let numbers = [];
let i = 0;
for (; i < bond.length; i++) {
    if (typeof (parseFloat(bond[i])) === "number") {
        if (typeof (parseFloat(bond[i])) === "number") {
            temp += bond[i].toString();
        }
        else {
            temp += bond[i].toString() + " ";
        }
    }
}
console.log(temp);
