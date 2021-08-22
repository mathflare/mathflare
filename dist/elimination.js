"use strict";
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
document.getElementById('eliminationcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.getElementById('x').value);
    const y = (document.getElementById('y').value);
    const z = parseFloat(document.getElementById('z').value);
    const w = (document.getElementById('w').value);
    const k = parseFloat(document.getElementById('k').value);
    const m = parseFloat(document.getElementById('m').value);
    const clearValues = () => {
        document.getElementById('x').value = '';
        document.getElementById('y').value = '';
        document.getElementById('z').value = '';
        document.getElementById('w').value = '';
        document.getElementById('k').value = '';
        document.getElementById('m').value = '';
    };
    if (isNaN(x) || y == '' || isNaN(z) || w == '' || isNaN(k) || isNaN(m)) {
        document.getElementById('eliminationout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (x <= 0 || z <= 0 || k <= 0 || m <= 0) {
        document.getElementById('eliminationout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(x) !== x || Math.floor(z) !== z || Math.floor(k) !== k || Math.floor(m) !== m) {
        document.getElementById('eliminationout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    }
    else if (x > 3 || m > 3) {
        document.getElementById('eliminationout').innerHTML = `<p class="text-warning">The value of x or m cannot be more than 3</p>`;
        clearValues();
    }
    else if (z > 1 || k > 1) {
        document.getElementById('eliminationout').innerHTML = `<p class="text-warning">The value of z or k cannot be more than 1</p>`;
        clearValues();
    }
    else {
        if (x === m) {
            const result = `H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span><sub><span class="text-warning">${z}</span></sub> + <span class="text-warning">${w}</span><sub class="text-warning">${k}</sub>OH<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x}</span>H<sub>2</sub>O + <span class="text-warning">${w}${y}</span>`;
            document.getElementById('eliminationout').innerHTML = `${removeOne(result)}`;
            clearValues();
        }
        else {
            const result = `<span class="text-warning">${m}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span><sub class="text-warning">${z}</sub> + <span class="text-warning">${x}${w}</span><sub class="text-warning">${k}</sub>OH<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x * m}</span>H<sub>2</sub>O + <span class="text-warning">${w}<sub>${x}</sub>${y}<sub>${m}</sub></span>`;
            document.getElementById('eliminationout').innerHTML = `${removeOne(result)}`;
            clearValues();
        }
    }
});
