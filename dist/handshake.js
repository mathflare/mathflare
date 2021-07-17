"use strict";
document.getElementById('calc').addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseFloat(document.getElementById('n').value);
    if (isNaN(n) || Math.floor(n) !== n) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('n').value = '';
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">There have been ${(Math.pow(n, 2) - n) / 2} handshakes at that party</p>`;
        document.getElementById('n').value = '';
    }
});
