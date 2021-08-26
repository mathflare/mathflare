"use strict";
document.querySelector('#sincalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#sina').value);
    if (isNaN(angle)) {
        document.querySelector('#sinout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#sina').value = '';
    }
    else {
        document.querySelector('#sinout').innerHTML = `<p class="text-success">sin(${angle}) = ${Math.sin(degreesToRadians(angle))}</p>`;
        document.querySelector('#sina').value = '';
    }
});
document.querySelector('#coscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#cosa').value);
    if (isNaN(angle)) {
        document.querySelector('#cosout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#cosa').value = '';
    }
    else {
        document.querySelector('#cosout').innerHTML = `<p class="text-success">cos(${angle}) = ${Math.cos(degreesToRadians(angle))}</p>`;
        document.querySelector('#cosa').value = '';
    }
});
document.querySelector('#tancalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#tana').value);
    if (isNaN(angle)) {
        document.querySelector('#tanout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#tana').value = '';
    }
    else if (angle === 90) {
        document.querySelector('#tanout').innerHTML = `<p class="text-warning">The angle cannot be 90&#176;</p>`;
        document.querySelector('#tana').value = '';
    }
    else {
        document.querySelector('#tanout').innerHTML = `<p class="text-success">tan(${angle}) = ${Math.tan(degreesToRadians(angle))}</p>`;
        document.querySelector('#tana').value = '';
    }
});
document.querySelector('#asincalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#asina').value);
    if (isNaN(angle)) {
        document.querySelector('#asinout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#asina').value = '';
    }
    else if (angle > 1 || angle < -1) {
        document.querySelector('#asinout').innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        document.querySelector('#asina').value = '';
    }
    else {
        document.querySelector('#asinout').innerHTML = `<p class="text-success">asin(${angle}) = ${Math.asin(degreesToRadians(angle))}</p>`;
        document.querySelector('#asina').value = '';
    }
});
document.querySelector('#acoscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#acosa').value);
    if (isNaN(angle)) {
        document.querySelector('#acosout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#acosa').value = '';
    }
    else if (angle > 1 || angle < -1) {
        document.querySelector('#acosout').innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        document.querySelector('#acosa').value = '';
    }
    else {
        document.querySelector('#acosout').innerHTML = `<p class="text-success">acos(${angle}) = ${Math.acos(degreesToRadians(angle))}</p>`;
        document.querySelector('#acosa').value = '';
    }
});
document.querySelector('#atancalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#atana').value);
    if (isNaN(angle)) {
        document.querySelector('#atanout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#atana').value = '';
    }
    else {
        document.querySelector('#atanout').innerHTML = `<p class="text-success">atan(${angle}) = ${Math.atan(degreesToRadians(angle))}</p>`;
        document.querySelector('#atana').value = '';
    }
});
document.querySelector('#sinhcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#sinha').value);
    if (isNaN(angle)) {
        document.querySelector('#sinhout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#sinha').value = '';
    }
    else {
        document.querySelector('#sinhout').innerHTML = `<p class="text-success">sinh(${angle}) = ${Math.sinh(degreesToRadians(angle))}</p>`;
        document.querySelector('#sinha').value = '';
    }
});
document.querySelector('#coshcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#cosha').value);
    if (isNaN(angle)) {
        document.querySelector('#coshout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#cosha').value = '';
    }
    else {
        document.querySelector('#coshout').innerHTML = `<p class="text-success">cosh(${angle}) = ${Math.cosh(degreesToRadians(angle))}</p>`;
        document.querySelector('#cosha').value = '';
    }
});
document.querySelector('#tanhcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.querySelector('#tanha').value);
    if (isNaN(angle)) {
        document.querySelector('#tanhout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#tanha').value = '';
    }
    else {
        document.querySelector('#tanhout').innerHTML = `<p class="text-success">tanh(${angle}) = ${Math.tanh(degreesToRadians(angle))}</p>`;
        document.querySelector('#tanha').value = '';
    }
});
