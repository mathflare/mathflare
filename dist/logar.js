"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('number').value);
    const base = parseFloat(document.getElementById('base').value);
    if (isNaN(num) || isNaN(base)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('number').value = "";
        document.getElementById('base').value = "10";
    }
    else if (num <= 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The logarithm is an indeterminate</p>`;
        document.getElementById('number').value = "";
        document.getElementById('base').value = "10";
    }
    else if (base == 1 || base <= 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The logarithm is an indeterminate; it's base cannot be negative, 0 or 1 (base > 0 and base &#8800; 1)</p>`;
        document.getElementById('number').value = "";
        document.getElementById('base').value = "10";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">log<sub>${base}</sub>(${num}) = ${Math.log(num) / Math.log(base)}</p>`;
        document.getElementById('number').value = "";
        document.getElementById('base').value = "10";
    }
});
document.getElementById('button2').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('natnum').value);
    if (isNaN(num)) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('natnum').value = "";
    }
    else if (num <= 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">The logarithm is an indeterminate</p>`;
        document.getElementById('natnum').value = "";
    }
    else if (num == 1) {
        document.getElementById('output2').innerHTML = `<p class="text-success">log<sub>e</sub>(${num}) = ${Math.log(num)} (e &#8776; ${Math.E.toFixed(4)})</p>`;
        document.getElementById('natnum').value = "";
    }
    else {
        document.getElementById('output2').innerHTML = `<p class="text-success">log<sub>e</sub>(${num}) = ${Math.log(num).toFixed(4)} (e &#8776; ${Math.E.toFixed(4)})</p>`;
        document.getElementById('natnum').value = "";
    }
});
