"use strict";
document.querySelector('#nrootcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const exp = parseFloat(document.querySelector('#nrootexp').value);
    const rad = parseFloat(document.querySelector('#nrootrad').value);
    if (isNaN(rad) || isNaN(exp)) {
        document.querySelector('#nrootout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#nrootrad').value = '';
        document.querySelector('#nrootexp').value = '';
    }
    else if (rad < 0) {
        document.querySelector('#nrootout').innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        document.querySelector('#nrootrad').value = '';
        document.querySelector('#nrootexp').value = '';
    }
    else if (exp === 0) {
        document.querySelector('#nrootout').innerHTML = `<p class="text-warning">The exponent cannot be zero</p>`;
        document.querySelector('#nrootrad').value = '';
        document.querySelector('#nrootexp').value = '';
    }
    else {
        const res = Math.pow(rad, 1 / exp);
        if (res === Math.floor(res)) {
            document.querySelector('#nrootout').innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res}</p>`;
            document.querySelector('#nrootrad').value = '';
            document.querySelector('#nrootexp').value = '';
        }
        else {
            document.querySelector('#nrootout').innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res} (&#8764; ${res.toFixed(3)})</p>`;
            document.querySelector('#nrootrad').value = '';
            document.querySelector('#nrootexp').value = '';
        }
    }
});
