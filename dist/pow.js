"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const base = parseFloat(document.getElementById('base').value);
    const exp = parseFloat(document.getElementById('exp').value);
    if (isNaN(base) || isNaN(exp)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('base').value = "";
        document.getElementById('exp').value = "";
    }
    else if (base == 0 && exp < 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('base').value = "";
        document.getElementById('exp').value = "";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">${base}<sup>${exp}</sup> = ${Math.pow(base, exp).toLocaleString('us')}</p>`;
        document.getElementById('base').value = "";
        document.getElementById('exp').value = "";
    }
});
