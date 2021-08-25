"use strict";
document.querySelector('#dxcalc1').addEventListener('click', (event) => {
    event.preventDefault();
    const v = parseFloat(document.querySelector('#v1').value);
    const dt = parseFloat(document.querySelector('#dt1').value);
    const clearValues = () => {
        document.querySelector('#v1').value = '';
        document.querySelector('#dt1').value = '';
    };
    if (isNaN(v) || isNaN(dt)) {
        document.querySelector('#dxout1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (dt < 0) {
        document.querySelector('#dxout1').innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    }
    else {
        document.querySelector('#dxout1').innerHTML = `<p class="text-success">Δx = ${v * dt}</p>`;
        clearValues();
    }
});
document.querySelector('#dtcalc2').addEventListener('click', (event) => {
    event.preventDefault();
    const v = parseFloat(document.querySelector('#v2').value);
    const dx = parseFloat(document.querySelector('#dx2').value);
    const clearValues = () => {
        document.querySelector('#v2').value = '';
        document.querySelector('#dx2').value = '';
    };
    if (isNaN(v) || isNaN(dx)) {
        document.querySelector('#dtout2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (dx === 0 && v !== 0) {
        document.querySelector('#dtout2').innerHTML = `<p class="text-warning">The Δt cannot be calculated with this formula</p>`;
        clearValues();
    }
    else if (v === 0) {
        if (dx !== 0) {
            document.querySelector('#dtout2').innerHTML = `<p class="text-warning">The speed cannot be 0 when the Δx is not 0</p>`;
            clearValues();
        }
        else {
            document.querySelector('#dtout2').innerHTML = `<p class="text-warning">The Δt cannot be calculated with this formula</p>`;
            clearValues();
        }
    }
    else if (dx < 0) {
        if (dx < 0 && v > 0) {
            document.querySelector('#dtout2').innerHTML = `<p class="text-warning">The Δx must be a positive number</p>`;
            clearValues();
        }
        else {
            document.querySelector('#dtout2').innerHTML = `<p class="text-success">Δt = ${dx / v}</p>`;
            clearValues();
        }
    }
    else {
        document.querySelector('#dtout2').innerHTML = `<p class="text-success">Δt = ${dx / v}</p>`;
        clearValues();
    }
});
document.querySelector('#vcalc3').addEventListener('click', (event) => {
    event.preventDefault();
    const dx = parseFloat(document.querySelector('#dx3').value);
    const dt = parseFloat(document.querySelector('#dt3').value);
    const clearValues = () => {
        document.querySelector('#dx3').value = '';
        document.querySelector('#dt3').value = '';
    };
    if (isNaN(dt) || isNaN(dx)) {
        document.querySelector('#vout3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (dt <= 0) {
        document.querySelector('#vout3').innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    }
    else {
        document.querySelector('#vout3').innerHTML = `<p class="text-success">v = ${dx / dt}</p>`;
        clearValues();
    }
});
