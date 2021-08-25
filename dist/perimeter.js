"use strict";
document.querySelector('#square').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.querySelector('#squaren').value);
    if (isNaN(n)) {
        document.querySelector('#output1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#squaren').value = "";
    }
    else if (n <= 0) {
        document.querySelector('#output1').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.querySelector('#squaren').value = "";
    }
    else {
        document.querySelector('#output1').innerHTML = `<p class="text-success">C = ${4 * n}cm</p>`;
        document.querySelector('#squaren').value = "";
    }
});
document.querySelector('#para').addEventListener('click', (event) => {
    event.preventDefault();
    const width = parseFloat(document.querySelector('#paraw').value);
    const height = parseFloat(document.querySelector('#parah').value);
    if (isNaN(width) || isNaN(height)) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#paraw').value = "";
        document.querySelector('#parah').value = "";
    }
    else if (width <= 0 || height <= 0) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        document.querySelector('#paraw').value = "";
        document.querySelector('#parah').value = "";
    }
    else {
        document.querySelector('#output2').innerHTML = `<p class="text-success">C = ${2 * width + 2 * height}cm</p>`;
        document.querySelector('#paraw').value = "";
        document.querySelector('#parah').value = "";
    }
});
document.querySelector('#tri').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#tria').value);
    const b = parseFloat(document.querySelector('#trib').value);
    const c = parseFloat(document.querySelector('#tric').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#tria').value = "";
        document.querySelector('#trib').value = "";
        document.querySelector('#tric').value = "";
    }
    else if (a <= 0 || b <= 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">All of the segments must be a positive number</p>`;
        document.querySelector('#tria').value = "";
        document.querySelector('#trib').value = "";
        document.querySelector('#tric').value = "";
    }
    else {
        document.querySelector('#output3').innerHTML = `<p class="text-success">C = ${a + b + c}</p>`;
        document.querySelector('#tria').value = "";
        document.querySelector('#trib').value = "";
        document.querySelector('#tric').value = "";
    }
});
document.querySelector('#eqtri').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.querySelector('#trin').value);
    if (isNaN(n)) {
        document.querySelector('#output4').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#trin').value = "";
    }
    else if (n <= 0) {
        document.querySelector('#output4').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.querySelector('#trin').value = "";
    }
    else {
        document.querySelector('#output4').innerHTML = `<p class="text-success">C = ${3 * n}cm</p>`;
        document.querySelector('#trin').value = "";
    }
});
document.querySelector('#circle').addEventListener('click', (event) => {
    event.preventDefault();
    const r = parseFloat(document.querySelector('#circler').value);
    const p = 3.14;
    const pprec = 3.14159265;
    if (isNaN(r)) {
        document.querySelector('#output5').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#circler').value = "";
    }
    else if (r <= 0) {
        document.querySelector('#output5').innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        document.querySelector('#circler').value = "";
    }
    else {
        document.querySelector('#output5').innerHTML = `<p class="text-success">C &#8776;${2 * r * p}cm (&#8764; ${2 * r * pprec})</p>`;
        document.querySelector('#circler').value = "";
    }
});
