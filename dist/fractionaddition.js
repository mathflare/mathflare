"use strict";
document.querySelector('#addfractcalc').addEventListener('click', (event) => {
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
        document.querySelector('#addfractout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else {
        document.querySelector('#addfractout').innerHTML = `${addFraction(x, y, a, b)}`;
        clearValues();
    }
});
