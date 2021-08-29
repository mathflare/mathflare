"use strict";
document.querySelector('#inorgancalc').addEventListener('click', (event) => {
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
    if (x == '' || y == '' || isNaN(z) || isNaN(v)) {
        document.querySelector('#inorganout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (z <= 0 || v <= 0) {
        document.querySelector('#inorganout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(z) !== z || Math.floor(v) !== v) {
        document.querySelector('#inorganout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    }
    else if (z > 3 || v > 3) {
        document.querySelector('#inorganout').innerHTML = `<p class="text-warning">The value of z or v cannot be more than 3</p>`;
        clearValues();
    }
    else {
        if (x == 'H') {
            if (z != 1) {
                document.querySelector('#inorganout').innerHTML = `<p class="text-warning">The value of z must be 1 since the metal is H</p>`;
                clearValues();
            }
            else if (z == v) {
                document.querySelector('#inorganout').innerHTML = `${x}${y}<span class="text-warning">: acid</span>`;
                clearValues();
            }
            else if (y == 'O' && v === 2) {
                const result = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> water</span>`;
                document.querySelector('#inorganout').innerHTML = `${removeOne(result)}`;
                clearValues();
            }
            else {
                const result = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> acid</span>`;
                document.querySelector('#inorganout').innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        }
        else if (y == 'O') {
            if (v != 2) {
                document.querySelector('#inorganout').innerHTML = `<p class="text-warning">The value of v must be 2 since the non-metal is O</p>`;
                clearValues();
            }
            else if (z == v) {
                document.querySelector('#inorganout').innerHTML = `${x}${y}<span class="text-warning">: oxide</span>`;
                clearValues();
            }
            else {
                const result = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> oxide</span>`;
                document.querySelector('#inorganout').innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        }
        else if (y == 'OH') {
            if (v != 1) {
                document.querySelector('#inorganout').innerHTML = `<p class="text-warning">The value of v must be 1 since the non-metal is OH</p>`;
                clearValues();
            }
            else if (z == v) {
                document.querySelector('#inorganout').innerHTML = `${x}${y}<span class="text-warning">: base</span>`;
                clearValues();
            }
            else {
                const result = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> base</span>`;
                document.querySelector('#inorganout').innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        }
        else {
            if (z == v) {
                document.querySelector('#inorganout').innerHTML = `${x}${y}<span class="text-warning">: salt</span>`;
                clearValues();
            }
            else {
                const result = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> salt</span>`;
                document.querySelector('#inorganout').innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        }
    }
});
