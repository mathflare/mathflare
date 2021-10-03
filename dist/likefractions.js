"use strict";
document.querySelector('#likefractcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.querySelector('#x').value);
    const y = parseFloat(document.querySelector('#y').value);
    const a = parseFloat(document.querySelector('#a').value);
    const b = parseFloat(document.querySelector('#b').value);
    const clearValues = () => {
        document.querySelector('#x').value = '';
        document.querySelector('#y').value = '';
        document.querySelector('#a').value = '';
        document.querySelector('#b').value = '';
    };
    if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b)) {
        document.querySelector('#likefractout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(x) !== x || Math.floor(y) !== y || Math.floor(a) !== a || Math.floor(b) !== b) {
        document.querySelector('#likefractout').innerHTML = `<p class="text-warning">All numbers must be integers</p>`;
        clearValues();
    }
    else if (y === 0 || b === 0) {
        document.querySelector('#likefractout').innerHTML = `<p class="text-warning">The value of y and b cannot be 0</p>`;
        clearValues();
    }
    else {
        document.querySelector('#likefractout').innerHTML = `${likeToUnlike(x, y, a, b)}`;
        clearValues();
    }
});
