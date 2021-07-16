"use strict";
document.getElementById('slopecalc').addEventListener('click', (event) => {
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
    else if (x1 === x2 && y1 === y2) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The 2 points must have different coordinates</p>`;
        clearValues();
    }
    else if (x1 === x2) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The slope cannot be calculated between the points (${x1},${y1}) and (${x2},${y2}): they belong to a vertical line</p>`;
        clearValues();
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">The slope is ${(y2 - y1) / (x2 - x1)}m</p>`;
        clearValues();
    }
});
