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
    else if (Math.floor(x) !== x || Math.floor(y) !== y || Math.floor(a) !== a || Math.floor(b) !== b) {
        document.querySelector('#addfractout').innerHTML = `<p class="text-warning">All numbers must be integers</p>`;
        clearValues();
    }
    else {
        const result = addFractions(x, y, a, b);
        document.querySelector('#addfractout').innerHTML = `${reduceFraction(result[0][0], result[0][1])}`;
        clearValues();
    }
});
