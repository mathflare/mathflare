"use strict";
document.querySelector('#atomcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = (document.querySelector('#x1').value);
    const z = parseFloat(document.querySelector('#z1').value);
    const a = parseFloat(document.querySelector('#a1').value);
    const clearValues = () => {
        document.querySelector('#x1').value = '';
        document.querySelector('#z1').value = '';
        document.querySelector('#a1').value = '';
    };
    if (x === '' || isNaN(z) || isNaN(a)) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (a <= 0 || z <= 0) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(a) !== a || Math.floor(z) !== z) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (a < 2 * z) {
        document.querySelector('#atomout').innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
        clearValues();
    }
    else {
        document.querySelector('#atomout').innerHTML = `<p class="text-success">${z}p<sup>+</sup></p> ${z}e<sup>-</sup>   ${a - z}n</p></p>`;
        clearValues();
    }
});
