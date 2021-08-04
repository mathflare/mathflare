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
    else if (n == 3) {
        document.getElementById('output').innerHTML = `<p class="text-success">The number of diagonals in this triangle is ${(n * (n - 3)) / 2}</p>`;
        document.getElementById('vertex').value = "";
    }
    else if (n == 4) {
        document.getElementById('output').innerHTML = `<p class="text-success">The number of diagonals in this parallelogram is ${(n * (n - 3)) / 2}</p>`;
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
document.getElementById('paracalc').addEventListener('click', (event) => {
    event.preventDefault();
    const cd = parseFloat(document.getElementById('pcd').value);
    const ad = parseFloat(document.getElementById('pad').value);
    const d = parseFloat(document.getElementById('pd').value);
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    if (isNaN(cd) || isNaN(ad) || isNaN(d)) {
        document.getElementById('paraout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('pcd').value = '';
        document.getElementById('pad').value = '';
        document.getElementById('pd').value = '';
    }
    else if (cd <= 0 || ad <= 0 || d <= 0) {
        document.getElementById('paraout').innerHTML = `<p class="text-warning">All the values must be positive</p>`;
        document.getElementById('pcd').value = '';
        document.getElementById('pad').value = '';
        document.getElementById('pd').value = '';
    }
    else if (d >= 180) {
        document.getElementById('paraout').innerHTML = `<p class="text-warning">The angle must be smaller than 180&deg;</p>`;
        document.getElementById('pcd').value = '';
        document.getElementById('pad').value = '';
        document.getElementById('pd').value = '';
    }
    else {
        document.getElementById('paraout').innerHTML = `<p class="text-success">The lenght of the diagonal is D = ${Math.sqrt(cd * cd + ad * ad - 2 * cd * ad * Math.cos(degreesToRadians(d)))} (&#8764; ${(Math.sqrt(cd * cd + ad * ad - 2 * cd * ad * Math.cos(degreesToRadians(d)))).toFixed(4)})</p>`;
        document.getElementById('pcd').value = '';
        document.getElementById('pad').value = '';
        document.getElementById('pd').value = '';
    }
});
