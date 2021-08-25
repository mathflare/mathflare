"use strict";
document.querySelector('#calc').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.querySelector('#n').value);
    if (isNaN(n) || Math.floor(n) !== n) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#n').value = '';
    }
    else if (n < 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The number of visitors must be a positive number</p>`;
        document.querySelector('#n').value = '';
    }
    else {
        document.querySelector('#output').innerHTML = `<p class="text-success">There have been ${(Math.pow(n, 2) - n) / 2} handshakes at that party</p>`;
        document.querySelector('#n').value = '';
    }
});
