"use strict";
document.getElementById('dxcalc1').addEventListener('click', (event) => {
    event.preventDefault();
    const v = parseFloat(document.getElementById('v1').value);
    const dt = parseFloat(document.getElementById('dt1').value);
    const clearValues = () => {
        document.getElementById('v1').value = '';
        document.getElementById('dt1').value = '';
    };
    if (isNaN(v) || isNaN(dt)) {
        document.getElementById('dxout1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (v <= 0) {
        document.getElementById('dxout1').innerHTML = `<p class="text-warning">The speed must be a positive number</p>`;
        clearValues();
    }
    else if (dt <= 0) {
        document.getElementById('dxout1').innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    }
    else {
        document.getElementById('dxout1').innerHTML = `<p class="text-success">Δx = ${v * dt}</p>`;
        clearValues();
    }
});
document.getElementById('dtcalc2').addEventListener('click', (event) => {
    event.preventDefault();
    const v = parseFloat(document.getElementById('v2').value);
    const dx = parseFloat(document.getElementById('dx2').value);
    const clearValues = () => {
        document.getElementById('v2').value = '';
        document.getElementById('dx2').value = '';
    };
    if (isNaN(v) || isNaN(dx)) {
        document.getElementById('dtout2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (v <= 0) {
        document.getElementById('dtout2').innerHTML = `<p class="text-warning">The speed must be a positive number</p>`;
        clearValues();
    }
    else if (dx <= 0) {
        document.getElementById('dtout2').innerHTML = `<p class="text-warning">The Δx must be a positive number</p>`;
        clearValues();
    }
    else {
        document.getElementById('dtout2').innerHTML = `<p class="text-success">Δt = ${dx / v}</p>`;
        clearValues();
    }
});
document.getElementById('vcalc3').addEventListener('click', (event) => {
    event.preventDefault();
    const dx = parseFloat(document.getElementById('dx3').value);
    const dt = parseFloat(document.getElementById('dt3').value);
    const clearValues = () => {
        document.getElementById('dx3').value = '';
        document.getElementById('dt3').value = '';
    };
    if (isNaN(dt) || isNaN(dx)) {
        document.getElementById('vout3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (dt <= 0) {
        document.getElementById('vout3').innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    }
    else if (dx <= 0) {
        document.getElementById('vout3').innerHTML = `<p class="text-warning">The Δx must be a positive number</p>`;
        clearValues();
    }
    else {
        document.getElementById('vout3').innerHTML = `<p class="text-success">v = ${dx / dt}</p>`;
        clearValues();
    }
});
