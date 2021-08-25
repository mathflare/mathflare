"use strict";
const replaceOne = (str) => {
    let final = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '1') {
            final += str[i];
        }
    }
    ;
    return final;
};
document.getElementById('acmetalcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.getElementById('x').value);
    const y = (document.getElementById('y').value);
    const m = (document.getElementById('m').value);
    const v = parseFloat(document.getElementById('v').value);
    const clearValues = () => {
        document.getElementById('x').value = '';
        document.getElementById('y').value = '';
        document.getElementById('m').value = '';
        document.getElementById('v').value = '';
    };
    if (isNaN(x) || y == '' || m == '' || isNaN(v)) {
        document.getElementById('acmetalout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (x <= 0 || v <= 0) {
        document.getElementById('acmetalout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(x) !== x || Math.floor(v) !== v) {
        document.getElementById('acmetalout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    }
    else if (x > 3 || v > 3) {
        document.getElementById('acmetalout').innerHTML = `<p class="text-warning">The value of x or v cannot be more than 3</p>`;
        clearValues();
    }
    else if (m == "Cu" || m == "Ag" || m == "Au" || m == "Pt" || m == "cu" || m == "ag" || m == "au" || m == "pt") {
        document.getElementById('acmetalout').innerHTML = `<p class="text-warning">There is not any reaction since the metal is one of these (Cu,Ag,Au,Pt)</p>`;
        clearValues();
    }
    else {
        if (x === v) {
            const result = `<span class="text-warning">2</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">2</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">2</span><span class="text-warning">${m}</span><span class="text-warning">${y}</span> + <span class="text-warning">${x}</span>H<sub>2</sub>`;
            document.getElementById('acmetalout').innerHTML = `${replaceOne(result)}`;
            clearValues();
        }
        else {
            const result = `<span class="text-warning">${2 * v}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${2 * x}</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">2</span><span class="text-warning">${m}</span><sub class="text-warning">${x}</sub><span class="text-warning">${y}</span><sub class="text-warning">${v}</sub> + <span class="text-warning">${x * v}</span>H<sub>2</sub>`;
            document.getElementById('acmetalout').innerHTML = `${replaceOne(result)}`;
            clearValues();
        }
    }
});
