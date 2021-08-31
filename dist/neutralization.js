"use strict";
document.querySelector('#eliminationcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.querySelector('#x').value);
    const y = (document.querySelector('#y').value);
    const w = (document.querySelector('#w').value);
    const m = parseFloat(document.querySelector('#m').value);
    const clearValues = () => {
        document.querySelector('#x').value = '';
        document.querySelector('#y').value = '';
        document.querySelector('#w').value = '';
        document.querySelector('#m').value = '';
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
    if (isNaN(x) || y === '' || w === '' || isNaN(m)) {
        document.querySelector('#eliminationout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (x <= 0 || m <= 0) {
        document.querySelector('#eliminationout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(x) !== x || Math.floor(m) !== m) {
        document.querySelector('#eliminationout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    }
    else if (x > 3 || m > 3) {
        document.querySelector('#eliminationout').innerHTML = `<p class="text-warning">The value of x or m cannot be more than 3</p>`;
        clearValues();
    }
    else {
        if (x === m) {
            const result = `H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${w}</span>${addParentheses('OH', m)}<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x}</span>H<sub>2</sub>O + <span class="text-warning">${w}${y}</span>`;
            document.querySelector('#eliminationout').innerHTML = `${removeOne(result)}`;
            clearValues();
        }
        else {
            const result = `<span class="text-warning">${m}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${x}${w}</span>${addParentheses('OH', m)}<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x * m}</span>H<sub>2</sub>O + <span class="text-warning">${w}<sub>${x}</sub></span>${addParentheses(y, m)}<sub class="text-warning">${m}</sub>`;
            document.querySelector('#eliminationout').innerHTML = `${removeOne(result)}`;
            clearValues();
        }
    }
});
