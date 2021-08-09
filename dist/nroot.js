"use strict";
document.getElementById('nrootcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const rad = parseFloat(document.getElementById('nrootrad').value);
    const exp = parseFloat(document.getElementById('nrootexp').value);
    if (isNaN(rad) || isNaN(exp)) {
        document.getElementById('nrootout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('nrootrad').value = '';
        document.getElementById('nrootexp').value = '';
    }
    else if (rad < 0) {
        document.getElementById('nrootout').innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        document.getElementById('nrootrad').value = '';
        document.getElementById('nrootexp').value = '';
    }
    else if (exp === 0) {
        document.getElementById('nrootout').innerHTML = `<p class="text-warning">The exponent cannot be zero</p>`;
        document.getElementById('nrootrad').value = '';
        document.getElementById('nrootexp').value = '';
    }
    else {
        const res = Math.pow(rad, 1 / exp);
        if (res === Math.floor(res)) {
            document.getElementById('nrootout').innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res}</p>`;
            document.getElementById('nrootrad').value = '';
            document.getElementById('nrootexp').value = '';
        }
        else {
            document.getElementById('nrootout').innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res} (&#8764; ${res.toFixed(3)})</p>`;
            document.getElementById('nrootrad').value = '';
            document.getElementById('nrootexp').value = '';
        }
    }
});
