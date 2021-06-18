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
