"use strict";
document.querySelector('#accarbcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = (document.querySelector('#x').value);
    const y = (document.querySelector('#y').value);
    const z = parseFloat(document.querySelector('#z').value);
    const v = parseFloat(document.querySelector('#v').value);
    const clearValues = () => {
        document.querySelector('#x').value = '';
        document.querySelector('#y').value = '';
        document.querySelector('#z').value = '';
        document.querySelector('#v').value = '';
    };
    const removeOne = (str) => {
        let final = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '1') {
                final += str[i];
            }
        }
        ;
        return final;
    };
    const addParentheses = (str, v) => {
        if (str == 'OH' && v !== 1) {
            return `<span class="text-warning">(</span>${str}<span class="text-warning">)</span>`;
        }
        else if (str.length != 3 || v === 1) {
            if (str == 'OH')
                return str;
            else
                return `<span class="text-warning">${str}</span>`;
        }
        return `(<span class="text-warning">${str}</span>)`;
    };
    if (isNaN(z) || y == '' || x == '' || isNaN(v)) {
        document.querySelector('#accarbout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (z <= 0 || v <= 0) {
        document.querySelector('#accarbout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(z) !== z || Math.floor(v) !== v) {
        document.querySelector('#accarbout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    }
    else if (z > 3 || v > 3) {
        document.querySelector('#accarbout').innerHTML = `<p class="text-warning">The value of z or v cannot be more than 3</p>`;
        clearValues();
    }
    else {
        const result = ``;
        document.querySelector('#accarbout').innerHTML = `${removeOne(result)}`;
        clearValues();
    }
});
