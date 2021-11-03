"use strict";
document.querySelector('#atomcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = (document.querySelector('#x1').value);
    const z = parseFloat(document.querySelector('#z1').value);
    const a = parseFloat(document.querySelector('#a1').value);
    if (x === '' || isNaN(z) || isNaN(a)) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (a <= 0 || z <= 0) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">All values must be positive</p>`;
    }
    else if (Math.floor(a) !== a || Math.floor(z) !== z) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
    }
    else if (a < 2 * z) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
    }
    else {
        document.querySelector('#protonatom').innerHTML = `<p class="text-success">${z}p<sup>+</sup></p>`;
        document.querySelector('#electronatom').innerHTML = `<p class="text-success">${z}e<sup>-</sup></p>`;
        document.querySelector('#neutronatom').innerHTML = `<p class="text-success">${a - z}n</p>`;
    }
});
document.querySelector('#clearbtnatom').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#x1').value = '';
    document.querySelector('#z1').value = '';
    document.querySelector('#a1').value = '';
    document.querySelector('#protonatom').innerHTML = 'p<sup>+</sup>';
    document.querySelector('#electronatom').innerHTML = 'e<sup>-</sup>';
    document.querySelector('#neutronatom').innerHTML = 'n';
    document.querySelector('#atomout').innerText = '';
});
