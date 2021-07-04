"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const y = parseFloat(document.getElementById('y').value);
    const z = parseFloat(document.getElementById('z').value);
    if (isNaN(y) || isNaN(z)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('y').value = "";
        document.getElementById('z').value = "";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">x = ${z - y}</p>`;
        document.getElementById('y').value = "";
        document.getElementById('z').value = "";
    }
});
document.getElementById('button2').addEventListener('click', (event) => {
    event.preventDefault();
    const y = parseFloat(document.getElementById('y2').value);
    const z = parseFloat(document.getElementById('z2').value);
    if (isNaN(y) || isNaN(z)) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('y2').value = "";
        document.getElementById('z2').value = "";
    }
    else {
        document.getElementById('output2').innerHTML = `<p class="text-success">x = ${z + y}</p>`;
        document.getElementById('y2').value = "";
        document.getElementById('z2').value = "";
    }
});
document.getElementById('button3').addEventListener('click', (event) => {
    event.preventDefault();
    const y = parseFloat(document.getElementById('y3').value);
    const z = parseFloat(document.getElementById('z3').value);
    if (isNaN(y) || isNaN(z)) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('y3').value = "";
        document.getElementById('z3').value = "";
    }
    else if (y == 0 && z == 0) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.getElementById('y3').value = "";
        document.getElementById('z3').value = "";
    }
    else if ((z / y) == Number.POSITIVE_INFINITY || (z / y) == Number.NEGATIVE_INFINITY) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">The equation is a contradiction: it has no solutions</p>`;
        document.getElementById('y3').value = "";
        document.getElementById('z3').value = "";
    }
    else {
        document.getElementById('output3').innerHTML = `<p class="text-success">x = ${z / y}</p>`;
        document.getElementById('y3').value = "";
        document.getElementById('z3').value = "";
    }
});
