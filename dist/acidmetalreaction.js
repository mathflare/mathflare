"use strict";
document.querySelector('#acmetalcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.querySelector('#x').value);
    const y = (document.querySelector('#y').value);
    const m = (document.querySelector('#m').value);
    const v = parseFloat(document.querySelector('#v').value);
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
        if (str.length != 3 || v === 1) {
            return `<span class="text-warning">${str}</span>`;
        }
        return `(<span class="text-warning">${str}</span>)`;
    };
    if (isNaN(x) || y === '' || m === '' || isNaN(v)) {
        document.querySelector('#acmetalout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (x <= 0 || v <= 0) {
        document.querySelector('#acmetalout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (Math.floor(x) !== x || Math.floor(v) !== v) {
        document.querySelector('#acmetalout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
    }
    else if (x > 3 || v > 3) {
        document.querySelector('#acmetalout').innerHTML = `<p class="text-warning">The value of x or v cannot be more than 3</p>`;
    }
    else if (m === "Cu" || m === "Ag" || m === "Au" || m === "Pt" || m === "cu" || m === "ag" || m === "au" || m === "pt") {
        document.querySelector('#acmetalout').innerHTML = `<p class="text-warning">There is not any reaction since the metal is one of these (Cu,Ag,Au,Pt)</p>`;
    }
    else {
        if (x === v) {
            if (x === 2) {
                const result = `H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${m}</span> &#8594; <span class="text-warning">${m}</span><span class="text-warning">${y}</span> + H<sub>2</sub>`;
                document.querySelector('#acmetalout').innerHTML = `${removeOne(result)}`;
            }
            else {
                const result = `<span class="text-warning">2</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">2</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">2</span><span class="text-warning">${m}</span><span class="text-warning">${y}</span> + <span class="text-warning">${x}</span>H<sub>2</sub>`;
                document.querySelector('#acmetalout').innerHTML = `${removeOne(result)}`;
            }
        }
        else {
            if (x === 2) {
                const result = `<span class="text-warning">${v}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${x}</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">${m}</span><sub class="text-warning">${x}</sub>${addParentheses(y, v)}<sub class="text-warning">${v}</sub> + <span class="text-warning">${v}</span>H<sub>2</sub>`;
                document.querySelector('#acmetalout').innerHTML = `${removeOne(result)}`;
            }
            else {
                const result = `<span class="text-warning">${2 * v}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${2 * x}</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">2</span><span class="text-warning">${m}</span><sub class="text-warning">${x}</sub>${addParentheses(y, v)}<sub class="text-warning">${v}</sub> + <span class="text-warning">${x * v}</span>H<sub>2</sub>`;
                document.querySelector('#acmetalout').innerHTML = `${removeOne(result)}`;
            }
        }
    }
});
