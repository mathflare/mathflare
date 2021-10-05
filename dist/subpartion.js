"use strict";
document.querySelector('#ioncalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = (document.querySelector('#x2').value);
    const z = parseFloat(document.querySelector('#z2').value);
    const a = parseFloat(document.querySelector('#a2').value);
    const v = parseFloat(document.querySelector('#v2').value);
    const clearValues = () => {
        document.querySelector('#x2').value = '';
        document.querySelector('#z2').value = '';
        document.querySelector('#a2').value = '';
        document.querySelector('#v2').value = '';
    };
    if (x === '' || isNaN(z) || isNaN(a) || isNaN(v)) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(a) !== a || Math.floor(z) !== z || Math.floor(v) !== v) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (a <= 0 || z <= 0) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (v > 6 || v < -3) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">The value of v cannot be greater than 6 or smaller than -3</p>`;
        clearValues();
    }
    else if (a < 2 * z) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
        clearValues();
    }
    else {
        document.querySelector('#ionout').innerHTML = `<p class="text-success">${z}p<sup>+</sup></p> ${z - v}e<sup>-</sup> ${a - z}n</p></p>`;
        clearValues();
    }
});
