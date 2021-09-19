"use strict";
document.querySelector('#lcmcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#lcma').value);
    const b = parseFloat(document.querySelector('#lcmb').value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector('#lcmout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#lcma').value = '';
        document.querySelector('#lcmb').value = '';
    }
    else if (a !== Math.floor(a) || b !== Math.floor(b)) {
        if (a / b === Math.floor(a / b) || b / a === Math.floor(b / a)) {
            document.querySelector('#lcmout').innerHTML = `<p class="text-success">lcm(${a},${b}) = ${LCM(a, b)}</p>`;
            document.querySelector('#lcma').value = '';
            document.querySelector('#lcmb').value = '';
        }
        else {
            document.querySelector('#lcmout').innerHTML = `<p class="text-warning">There is no solution for lcm(${a},${b})</p>`;
            document.querySelector('#lcma').value = '';
            document.querySelector('#lcmb').value = '';
        }
    }
    else {
        document.querySelector('#lcmout').innerHTML = `<p class="text-success">lcm(${a},${b}) = ${LCM(a, b)}</p>`;
        document.querySelector('#lcma').value = '';
        document.querySelector('#lcmb').value = '';
    }
});
