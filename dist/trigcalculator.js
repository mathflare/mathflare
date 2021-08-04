"use strict";
document.getElementById('sincalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('sina').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('sinout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('sina').value = '';
    }
    else {
        document.getElementById('sinout').innerHTML = `<p class="text-success">sin(${angle}) = ${Math.sin(degreesToRadians(angle))}</p>`;
        document.getElementById('sina').value = '';
    }
});
document.getElementById('coscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('cosa').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('cosout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('cosa').value = '';
    }
    else {
        document.getElementById('cosout').innerHTML = `<p class="text-success">cos(${angle}) = ${Math.cos(degreesToRadians(angle))}</p>`;
        document.getElementById('cosa').value = '';
    }
});
document.getElementById('tancalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('tana').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('tanout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('tana').value = '';
    }
    else if (angle === 90) {
        document.getElementById('tanout').innerHTML = `<p class="text-warning">The angle cannot be 90&#176;</p>`;
        document.getElementById('tana').value = '';
    }
    else {
        document.getElementById('tanout').innerHTML = `<p class="text-success">tan(${angle}) = ${Math.tan(degreesToRadians(angle))}</p>`;
        document.getElementById('tana').value = '';
    }
});
document.getElementById('asincalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('asina').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('asinout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('asina').value = '';
    }
    else if (angle > 1 || angle < -1) {
        document.getElementById('asinout').innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        document.getElementById('asina').value = '';
    }
    else {
        document.getElementById('asinout').innerHTML = `<p class="text-success">asin(${angle}) = ${Math.asin(degreesToRadians(angle))}</p>`;
        document.getElementById('asina').value = '';
    }
});
document.getElementById('acoscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('acosa').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('acosout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('acosa').value = '';
    }
    else if (angle > 1 || angle < -1) {
        document.getElementById('acosout').innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        document.getElementById('acosa').value = '';
    }
    else {
        document.getElementById('acosout').innerHTML = `<p class="text-success">acos(${angle}) = ${Math.acos(degreesToRadians(angle))}</p>`;
        document.getElementById('acosa').value = '';
    }
});
document.getElementById('atancalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('atana').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('atanout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('atana').value = '';
    }
    else {
        document.getElementById('atanout').innerHTML = `<p class="text-success">atan(${angle}) = ${Math.atan(degreesToRadians(angle))}</p>`;
        document.getElementById('atana').value = '';
    }
});
document.getElementById('sinhcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('sinha').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('sinhout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('sinha').value = '';
    }
    else {
        document.getElementById('sinhout').innerHTML = `<p class="text-success">sinh(${angle}) = ${Math.sinh(degreesToRadians(angle))}</p>`;
        document.getElementById('sinha').value = '';
    }
});
document.getElementById('coshcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('cosha').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('coshout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('cosha').value = '';
    }
    else {
        document.getElementById('coshout').innerHTML = `<p class="text-success">cosh(${angle}) = ${Math.cosh(degreesToRadians(angle))}</p>`;
        document.getElementById('cosha').value = '';
    }
});
document.getElementById('tanhcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('tanha').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(angle)) {
        document.getElementById('tanhout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('tanha').value = '';
    }
    else {
        document.getElementById('tanhout').innerHTML = `<p class="text-success">tanh(${angle}) = ${Math.tanh(degreesToRadians(angle))}</p>`;
        document.getElementById('tanha').value = '';
    }
});
