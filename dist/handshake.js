"use strict";
document.getElementById('calc').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.getElementById('n').value);
    if (isNaN(n) || Math.floor(n) !== n) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('n').value = '';
    }
    else if (n < 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The number of visitors must be a positive number</p>`;
        document.getElementById('n').value = '';
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">There have been ${(Math.pow(n, 2) - n) / 2} handshakes at that party</p>`;
        document.getElementById('n').value = '';
    }
});
