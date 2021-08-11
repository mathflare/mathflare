const bond: string = "H3CL4";
let temp: string = "";
let numbers: string[] = [];
let i: number = 0;
for (; i < bond.length; i++) {
    if (typeof (parseFloat(bond[i])) === "number") {
        if (typeof (parseFloat(bond[i])) === "number") {
            temp += bond[i].toString();
        } else {
            temp += bond[i].toString() + " ";
        }
    }
}
console.log(temp);