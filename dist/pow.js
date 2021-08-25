"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    const base = parseFloat(document.querySelector('#base').value);
    const exp = parseFloat(document.querySelector('#exp').value);
    if (isNaN(base) || isNaN(exp)) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#base').value = "";
        document.querySelector('#exp').value = "";
    }
    else if (base == 0 && exp < 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#base').value = "";
        document.querySelector('#exp').value = "";
    }
    else {
        document.querySelector('#output').innerHTML = `<p class="text-success">${base}<sup>${exp}</sup> = ${new Intl.NumberFormat().format(Math.pow(base, exp))}</p>`;
        document.querySelector('#base').value = "";
        document.querySelector('#exp').value = "";
    }
});
