"use strict";
document.querySelector('#calc').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.querySelector('#n').value);
    if (isNaN(n) || Math.floor(n) !== n) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#n').value = '';
    }
    else if (n <= 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Your number must be positive</p>`;
        document.querySelector('#n').value = '';
    }
    else if (n % 2 != 0) {
        document.querySelector('#output').innerHTML = `<p class="text-success">${Math.floor(Math.abs(n) / 2)} pairs of numbers and ${Math.abs(n) % 2} non pair number, his position ${(Math.abs(n) + 1) / 2}</p>`;
        document.querySelector('#n').value = '';
    }
    else {
        document.querySelector('#output').innerHTML = `<p class="text-success">${Math.abs(n) / 2} pairs of numbers and ${Math.abs(n) % 2} non pair numbers</p>`;
        document.querySelector('#n').value = '';
    }
});
