"use strict";
document.getElementById('square').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.getElementById('squaren').value);
    if (isNaN(n)) {
        document.getElementById('output1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('squaren').value = "";
    }
    else if (n <= 0) {
        document.getElementById('output1').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.getElementById('squaren').value = "";
    }
    else {
        document.getElementById('output1').innerHTML = `<p class="text-success">C = ${4 * n}cm</p>`;
        document.getElementById('squaren').value = "";
    }
});
document.getElementById('para').addEventListener('click', (event) => {
    event.preventDefault();
    const width = parseFloat(document.getElementById('paraw').value);
    const height = parseFloat(document.getElementById('parah').value);
    if (isNaN(width) || isNaN(height)) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('paraw').value = "";
        document.getElementById('parah').value = "";
    }
    else if (width <= 0 || height <= 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        document.getElementById('paraw').value = "";
        document.getElementById('parah').value = "";
    }
    else {
        document.getElementById('output2').innerHTML = `<p class="text-success">C = ${2 * width + 2 * height}cm</p>`;
        document.getElementById('paraw').value = "";
        document.getElementById('parah').value = "";
    }
});
document.getElementById('tri').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('tria').value);
    const b = parseFloat(document.getElementById('trib').value);
    const c = parseFloat(document.getElementById('tric').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('tria').value = "";
        document.getElementById('trib').value = "";
        document.getElementById('tric').value = "";
    }
    else if (a <= 0 || b <= 0) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">All of the segments must be a positive number</p>`;
        document.getElementById('tria').value = "";
        document.getElementById('trib').value = "";
        document.getElementById('tric').value = "";
    }
    else {
        document.getElementById('output3').innerHTML = `<p class="text-success">C = ${a + b + c}</p>`;
        document.getElementById('tria').value = "";
        document.getElementById('trib').value = "";
        document.getElementById('tric').value = "";
    }
});
document.getElementById('eqtri').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.getElementById('trin').value);
    if (isNaN(n)) {
        document.getElementById('output4').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('trin').value = "";
    }
    else if (n <= 0) {
        document.getElementById('output4').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.getElementById('trin').value = "";
    }
    else {
        document.getElementById('output4').innerHTML = `<p class="text-success">C = ${3 * n}cm</p>`;
        document.getElementById('trin').value = "";
    }
});
document.getElementById('circle').addEventListener('click', (event) => {
    event.preventDefault();
    const r = parseFloat(document.getElementById('circler').value);
    const p = 3.14;
    const pprec = 3.14159265;
    if (isNaN(r)) {
        document.getElementById('output5').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('circler').value = "";
    }
    else if (r <= 0) {
        document.getElementById('output5').innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        document.getElementById('circler').value = "";
    }
    else {
        document.getElementById('output5').innerHTML = `<p class="text-success">C &#8776;${2 * r * p}cm (&#8764; ${2 * r * pprec})</p>`;
        document.getElementById('circler').value = "";
    }
});
