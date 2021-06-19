"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.getElementById('vertex').value);
    if (isNaN(n) || !(Math.floor(n) == n)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('vertex').value = "";
    }
    else if (n <= 2) {
        document.getElementById('output').innerHTML = `<p class="text-warning">There is no polygon with less than 3 segments</p>`;
        document.getElementById('vertex').value = "";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">The number of diagonals in this convex ${n}-gon is ${(n * (n - 3)) / 2}</p>`;
        document.getElementById('vertex').value = "";
    }
});
document.getElementById('button2').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.getElementById('sside').value);
    if (isNaN(n)) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('sside').value = "";
    }
    else if (n <= 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.getElementById('sside').value = "";
    }
    else {
        document.getElementById('output2').innerHTML = `<p class="text-success">The lenght of the diagonal is D = ${n * Math.sqrt(2)}cm (&#8764; ${(n * Math.sqrt(2)).toFixed(3)})</p>`;
        document.getElementById('sside').value = "";
    }
});
