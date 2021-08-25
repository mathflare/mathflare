"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a').value);
    const c = parseFloat(document.querySelector('#c').value);
    if (isNaN(a) || isNaN(c)) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (-c < 0 && a > 0) {
        const x = Math.sqrt(c / a);
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (-c > 0 && a < 0) {
        const x = Math.sqrt(-c / -a);
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (a == 0 && -c != 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (a == 0 && -c == 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else {
        const x = Math.sqrt(-c / a);
        if (x == 0) {
            document.querySelector('#output').innerHTML = `<p class="text-success">x = ${x}</p>`;
            document.querySelector('#a').value = "";
            document.querySelector('#c').value = "";
        }
        else {
            document.querySelector('#output').innerHTML = `<p class="text-success">x = &#177;${x}</p>`;
            document.querySelector('#a').value = "";
            document.querySelector('#c').value = "";
        }
    }
});
document.querySelector('#button2').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a2').value);
    const b = parseFloat(document.querySelector('#b2').value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
    else if (a == 0 && b == 0) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
    else if ((a != 0 && b == 0) || (a == 0 && b != 0)) {
        document.querySelector('#output2').innerHTML = `<p class="text-success">x = 0</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
    else {
        const x1 = 0;
        const x2 = -b / a;
        document.querySelector('#output2').innerHTML = `<p class="text-success">x = ${x1} OR x = ${x2}</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
});
document.querySelector('#button3').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a3').value);
    const b = parseFloat(document.querySelector('#b3').value);
    const c = parseFloat(document.querySelector('#c3').value);
    const D = b * b - 4 * a * c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a == 0 && b == 0 && c == 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a == 0 && (b == 0) && (c != 0)) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if ((a == 0 && b != 0 && c == 0) || (a == 0 && b != 0 && c != 0)) {
        const x = -c / b;
        document.querySelector('#output3').innerHTML = `<p class="text-success">x = ${x}</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a != 0 && b == 0) {
        const x = Math.sqrt(-c / a);
        if (x == 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-success">x = ${x}</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#b3').value = "";
            document.querySelector('#c3').value = "";
        }
        else if (-c < 0 && a > 0) {
            const x = Math.sqrt(c / a);
            document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#b3').value = "";
            document.querySelector('#c3').value = "";
        }
        else if (-c > 0 && a < 0) {
            const x = Math.sqrt(-c / -a);
            document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#b3').value = "";
            document.querySelector('#c3').value = "";
        }
        else {
            document.querySelector('#output3').innerHTML = `<p class="text-success">x = &#177;${x}</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#b3').value = "";
            document.querySelector('#c3').value = "";
        }
    }
    else if (D < 0) {
        const x1 = (-b - Math.sqrt(-D)) / (2 * a);
        const x2 = (-b + Math.sqrt(-D)) / (2 * a);
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Discriminant(Δ) = ${D} < 0, The equation is a contradiction in R: it has no solutions <br /> x = ${x1} OR x = ${x2} in C</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (D == 0) {
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        document.querySelector('#output3').innerHTML = `<p class="text-success">Discriminant(Δ) = 0,  x = ${x1} (double solution)</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else {
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        document.querySelector('#output3').innerHTML = `<p class="text-success">Discriminant(Δ) = ${D} > 0,  x = ${x1} OR x = ${x2}</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
});
