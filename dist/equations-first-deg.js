"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    const y = parseFloat(document.querySelector('#y').value);
    const z = parseFloat(document.querySelector('#z').value);
    if (isNaN(y) || isNaN(z)) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#y').value = "";
        document.querySelector('#z').value = "";
    }
    else {
        document.querySelector('#output').innerHTML = `<p class="text-success">x = ${z - y}</p>`;
        document.querySelector('#y').value = "";
        document.querySelector('#z').value = "";
    }
});
document.querySelector('#button2').addEventListener('click', (event) => {
    event.preventDefault();
    const y = parseFloat(document.querySelector('#y2').value);
    const z = parseFloat(document.querySelector('#z2').value);
    if (isNaN(y) || isNaN(z)) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#y2').value = "";
        document.querySelector('#z2').value = "";
    }
    else {
        document.querySelector('#output2').innerHTML = `<p class="text-success">x = ${z + y}</p>`;
        document.querySelector('#y2').value = "";
        document.querySelector('#z2').value = "";
    }
});
document.querySelector('#button3').addEventListener('click', (event) => {
    event.preventDefault();
    const y = parseFloat(document.querySelector('#y3').value);
    const z = parseFloat(document.querySelector('#z3').value);
    if (isNaN(y) || isNaN(z)) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#y3').value = "";
        document.querySelector('#z3').value = "";
    }
    else if (y == 0 && z == 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.querySelector('#y3').value = "";
        document.querySelector('#z3').value = "";
    }
    else if ((z / y) == Number.POSITIVE_INFINITY || (z / y) == Number.NEGATIVE_INFINITY) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is a contradiction: it has no solutions</p>`;
        document.querySelector('#y3').value = "";
        document.querySelector('#z3').value = "";
    }
    else {
        document.querySelector('#output3').innerHTML = `<p class="text-success">x = ${z / y}</p>`;
        document.querySelector('#y3').value = "";
        document.querySelector('#z3').value = "";
    }
});
