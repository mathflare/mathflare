"use strict";
document.querySelector('#gcdcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#gcda').value);
    const b = parseFloat(document.querySelector('#gcdb').value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector('#gcdout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#gcda').value = '';
        document.querySelector('#gcdb').value = '';
    }
    else if (a < 0 || b < 0) {
        document.querySelector('#gcdout').innerHTML = `<p class="text-warning">Both values must be greater that zero</p>`;
        document.querySelector('#gcda').value = '';
        document.querySelector('#gcdb').value = '';
    }
    else {
        document.querySelector('#gcdout').innerHTML = `<p class="text-success">gcd(${a},${b}) = ${GCD(a, b)}</p>`;
        document.querySelector('#gcda').value = '';
        document.querySelector('#gcdb').value = '';
    }
});
