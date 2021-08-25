"use strict";
document.querySelector('#dxcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#dxa').value);
    const b = parseFloat(document.querySelector('#dxb').value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector('#dxout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#dxa').value = "";
        document.querySelector('#dxb').value = "";
    }
    else {
        document.querySelector('#dxout').innerHTML = `<p class="text-success">Dx = ${b - a}</p>`;
        document.querySelector('#dxa').value = "";
        document.querySelector('#dxb').value = "";
    }
});
document.querySelector('#scalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#sa').value);
    const b = parseFloat(document.querySelector('#sb').value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector('#dxout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#sa').value = "";
        document.querySelector('#sb').value = "";
    }
    else if (a > b) {
        document.querySelector('#dxout').innerHTML = `<p class="text-success">S = ${a - b}</p>`;
        document.querySelector('#sa').value = "";
        document.querySelector('#sb').value = "";
    }
    else {
        document.querySelector('#dxout').innerHTML = `<p class="text-success">S = ${b - a}</p>`;
        document.querySelector('#sa').value = "";
        document.querySelector('#sb').value = "";
    }
});
