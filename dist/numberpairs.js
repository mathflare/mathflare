"use strict";
document.querySelector('#numpairscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.querySelector('#n').value);
    if (isNaN(n)) {
        document.querySelector('#numpairsout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#n').value = '';
    }
    else if (n <= 0 || Math.floor(n) !== n) {
        document.querySelector('#numpairsout').innerHTML = `<p class="text-warning">the value must be a positive integer</p>`;
        document.querySelector('#n').value = '';
    }
    else if (n % 2 != 0) {
        document.querySelector('#numpairsout').innerHTML = `<p class="text-success">there are ${Math.floor(Math.abs(n) / 2)} pairs of numbers with 1 extra number(position: ${(Math.abs(n) + 1) / 2})</p>`;
        document.querySelector('#n').value = '';
    }
    else {
        document.querySelector('#numpairsout').innerHTML = `<p class="text-success">there are ${Math.abs(n) / 2} pairs of numbers with ${Math.abs(n) % 2} extra numbers</p>`;
        document.querySelector('#n').value = '';
    }
});
