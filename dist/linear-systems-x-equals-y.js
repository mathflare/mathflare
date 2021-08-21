"use strict";
document.getElementById('button2').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a3').value);
    const b = parseFloat(document.getElementById('b3').value);
    const c = parseFloat(document.getElementById('c3').value);
    const D = a + b;
    const x = c / D;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (a == 0 && b == 0 && c == 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">The equation is indefinite: it is true for all values. <br /> It has infinite coordinates where X=Y</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (a == 0 && b == 0 && c != 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">The equation is a contradiction: it has no solutions</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (D == 0 && c != 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">In this equation x can never equal to Y</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (D == 0 && c == 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">In this equation(x=y) x is always equal to Y</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else {
        document.getElementById('output2').innerHTML = `<p class="text-success">In this equation, x=y at (x , y) = (${x} , ${x})</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
});
