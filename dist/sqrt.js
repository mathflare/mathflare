"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('number').value);
    if (isNaN(num)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('number').value = "";
    }
    else if (num < 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        document.getElementById('number').value = "";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">&#8730;${num} = ${Math.sqrt(num)} (&#8764; ${Math.sqrt(num).toFixed(3)})</p>`;
        document.getElementById('number').value = "";
    }
});
