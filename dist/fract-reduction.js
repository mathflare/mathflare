"use strict";
document.querySelector('#reductioncalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.querySelector('#x').value);
    const y = parseFloat(document.querySelector('#y').value);
    const clearValues = () => {
        document.querySelector('#x').value = '';
        document.querySelector('#y').value = '';
    };
    if (isNaN(x) || isNaN(y)) {
        document.querySelector('#reductionout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else {
        document.querySelector('#reductionout').innerHTML = `${reduceFraction(x, y)}`;
        clearValues();
    }
});
