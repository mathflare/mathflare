"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const c = parseFloat(document.getElementById('c').value);
    if (isNaN(a) || isNaN(c)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('a').value = "";
        document.getElementById('c').value = "";
    }
    else if (-c < 0 && a > 0) {
        const x = Math.sqrt(c / a);
        document.getElementById('output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
        document.getElementById('a').value = "";
        document.getElementById('c').value = "";
    }
    else if (-c > 0 && a < 0) {
        const x = Math.sqrt(-c / -a);
        document.getElementById('output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
        document.getElementById('a').value = "";
        document.getElementById('c').value = "";
    }
    else if (a == 0 && -c != 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        document.getElementById('a').value = "";
        document.getElementById('c').value = "";
    }
    else if (a == 0 && -c == 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.getElementById('a').value = "";
        document.getElementById('c').value = "";
    }
    else {
        const x = Math.sqrt(-c / a);
        if (x == 0) {
            document.getElementById('output').innerHTML = `<p class="text-success">x = ${x}</p>`;
            document.getElementById('a').value = "";
            document.getElementById('c').value = "";
        }
        else {
            document.getElementById('output').innerHTML = `<p class="text-success">x = &#177;${x}</p>`;
            document.getElementById('a').value = "";
            document.getElementById('c').value = "";
        }
    }
});
document.getElementById('button2').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a2').value);
    const b = parseFloat(document.getElementById('b2').value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('a2').value = "";
        document.getElementById('b2').value = "";
    }
    else if (a == 0 && b == 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.getElementById('a2').value = "";
        document.getElementById('b2').value = "";
    }
    else if ((a != 0 && b == 0) || (a == 0 && b != 0)) {
        document.getElementById('output2').innerHTML = `<p class="text-success">x = 0</p>`;
        document.getElementById('a2').value = "";
        document.getElementById('b2').value = "";
    }
    else {
        const x1 = 0;
        const x2 = -b / a;
        document.getElementById('output2').innerHTML = `<p class="text-success">x = ${x1} OR x = ${x2}</p>`;
        document.getElementById('a2').value = "";
        document.getElementById('b2').value = "";
    }
});
document.getElementById('button3').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a3').value);
    const b = parseFloat(document.getElementById('b3').value);
    const c = parseFloat(document.getElementById('c3').value);
    const D = b * b - 4 * a * c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (a == 0 && b == 0 && c == 0) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (a == 0 && (b == 0) && (c != 0)) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if ((a == 0 && b != 0 && c == 0) || (a == 0 && b != 0 && c != 0)) {
        const x = -c / b;
        document.getElementById('output3').innerHTML = `<p class="text-success">x = ${x}</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (a != 0 && b == 0) {
        const x = Math.sqrt(-c / a);
        if (x == 0) {
            document.getElementById('output3').innerHTML = `<p class="text-success">x = ${x}</p>`;
            document.getElementById('a3').value = "";
            document.getElementById('b3').value = "";
            document.getElementById('c3').value = "";
        }
        else if (-c < 0 && a > 0) {
            const x = Math.sqrt(c / a);
            document.getElementById('output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
            document.getElementById('a3').value = "";
            document.getElementById('b3').value = "";
            document.getElementById('c3').value = "";
        }
        else if (-c > 0 && a < 0) {
            const x = Math.sqrt(-c / -a);
            document.getElementById('output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
            document.getElementById('a3').value = "";
            document.getElementById('b3').value = "";
            document.getElementById('c3').value = "";
        }
        else {
            document.getElementById('output3').innerHTML = `<p class="text-success">x = &#177;${x}</p>`;
            document.getElementById('a3').value = "";
            document.getElementById('b3').value = "";
            document.getElementById('c3').value = "";
        }
    }
    else if (D < 0) {
        const x1 = (-b - Math.sqrt(-D)) / (2 * a);
        const x2 = (-b + Math.sqrt(-D)) / (2 * a);
        document.getElementById('output3').innerHTML = `<p class="text-warning">Discriminant(Δ) = ${D} < 0, The equation is a contradiction in R: it has no solutions <br /> x = ${x1} OR x = ${x2} in C</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else if (D == 0) {
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        document.getElementById('output3').innerHTML = `<p class="text-success">Discriminant(Δ) = 0,  x = ${x1} (double solution)</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
    else {
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        document.getElementById('output3').innerHTML = `<p class="text-success">Discriminant(Δ) = ${D} > 0,  x = ${x1} OR x = ${x2}</p>`;
        document.getElementById('a3').value = "";
        document.getElementById('b3').value = "";
        document.getElementById('c3').value = "";
    }
});
