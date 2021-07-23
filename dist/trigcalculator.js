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
    else {
        document.getElementById('tanout').innerHTML = `<p class="text-success">tan(${angle}) = ${Math.tan(degreesToRadians(angle))}</p>`;
        document.getElementById('tana').value = '';
    }
});
