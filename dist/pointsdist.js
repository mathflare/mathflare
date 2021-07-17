"use strict";
document.getElementById('distcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const clearValues = () => {
        document.getElementById('x1').value = '';
        document.getElementById('y1').value = '';
        document.getElementById('x2').value = '';
        document.getElementById('y2').value = '';
    };
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">The distance between (${x1},${y1}) and (${x2},${y2}) is ${Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))}m</p>`;
        clearValues();
    }
});
