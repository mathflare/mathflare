"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('number').value);
    if (isNaN(num)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('number').value = "";
    }
    else if (num < 0 || !(Math.floor(num) == num)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The number must be a natural number (>0 and not decimal)</p>`;
        document.getElementById('number').value = "";
    }
    else if (num >= 170) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The number is too large!</p>`;
        document.getElementById('number').value = "";
    }
    else {
        let f = 1;
        for (let i = 1; i <= num; i++) {
            f *= i;
        }
        document.getElementById('output').innerHTML = `<p class="text-success text-break">${num}! = ${f.toLocaleString('en')}</p>`;
        document.getElementById('number').value = "";
    }
});
