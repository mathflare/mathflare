"use strict";
document.getElementById('dxcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('dxa').value);
    const b = parseFloat(document.getElementById('dxb').value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('dxout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('dxa').value = "";
        document.getElementById('dxb').value = "";
    }
    else {
        document.getElementById('dxout').innerHTML = `<p class="text-success">Dx = ${b - a}</p>`;
        document.getElementById('dxa').value = "";
        document.getElementById('dxb').value = "";
    }
});
document.getElementById('scalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('sa').value);
    const b = parseFloat(document.getElementById('sb').value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('dxout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('sa').value = "";
        document.getElementById('sb').value = "";
    }
    else if (a > b) {
        document.getElementById('dxout').innerHTML = `<p class="text-success">S = ${a - b}</p>`;
        document.getElementById('sa').value = "";
        document.getElementById('sb').value = "";
    }
    else {
        document.getElementById('dxout').innerHTML = `<p class="text-success">S = ${b - a}</p>`;
        document.getElementById('sa').value = "";
        document.getElementById('sb').value = "";
    }
});
