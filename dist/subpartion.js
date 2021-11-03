"use strict";
document.querySelector('#ioncalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = (document.querySelector('#x2').value);
    const z = parseFloat(document.querySelector('#z2').value);
    const a = parseFloat(document.querySelector('#a2').value);
    const v = parseFloat(document.querySelector('#v2').value);
    if (x === '' || isNaN(z) || isNaN(a) || isNaN(v)) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (Math.floor(a) !== a || Math.floor(z) !== z || Math.floor(v) !== v) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
    }
    else if (a <= 0 || z <= 0) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">All values must be positive</p>`;
    }
    else if (v > 6 || v < -3) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">The value of v cannot be greater than 6 or smaller than -3</p>`;
    }
    else if (a < 2 * z) {
        document.querySelector('#ionout').innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
    }
    else {
        document.querySelector('#protonion').innerHTML = `<p class="text-success">${z}p<sup>+</sup></p>`;
        document.querySelector('#electronion').innerHTML = `<p class="text-success">${z - v}e<sup>-</sup></p>`;
        document.querySelector('#neutronion').innerHTML = `<p class="text-success">${a - z}n</p>`;
    }
});
document.querySelector('#clearbtnion').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#x2').value = '';
    document.querySelector('#z2').value = '';
    document.querySelector('#a2').value = '';
    document.querySelector('#v2').value = '';
    document.querySelector('#protonion').innerHTML = 'p<sup>+</sup>';
    document.querySelector('#electronion').innerHTML = 'e<sup>-</sup>';
    document.querySelector('#neutronion').innerHTML = 'n';
    document.querySelector('#ionout').innerText = '';
});
