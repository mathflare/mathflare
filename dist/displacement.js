"use strict";
document.getElementById('dxcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const u = parseFloat(document.getElementById('u').value);
    const dt = parseFloat(document.getElementById('dt').value);
    if (isNaN(u) || isNaN(dt)) {
        document.getElementById('dxout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('u').value = "";
        document.getElementById('dt').value = "";
    }
    else if (u <= 0) {
        document.getElementById('dxout').innerHTML = `<p class="text-warning">The speed must be a positive number</p>`;
        document.getElementById('u').value = "";
        document.getElementById('dt').value = "";
    }
    else if (dt <= 0) {
        document.getElementById('dxout').innerHTML = `<p class="text-warning">Δt must be a positive number</p>`;
        document.getElementById('u').value = "";
        document.getElementById('dt').value = "";
    }
    else {
        document.getElementById('dxout').innerHTML = `<p class="text-success">Δx = ${u * dt}</p>`;
        document.getElementById('u').value = "";
        document.getElementById('dt').value = "";
    }
});
