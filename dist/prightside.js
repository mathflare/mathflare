"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const hypo = parseFloat(document.getElementById('hypo').value);
    const leg = parseFloat(document.getElementById('side').value);
    if (isNaN(hypo) || isNaN(leg)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('hypo').value = "";
        document.getElementById('side').value = "";
    }
    else if (hypo <= 0 || leg <= 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Both the leg and the hypotenuse must be a positive number</p>`;
        document.getElementById('hypo').value = "";
        document.getElementById('side').value = "";
    }
    else if (hypo <= leg) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The hypotenuse cannot be smaller than or equal to the triangle's leg</p>`;
        document.getElementById('hypo').value = "";
        document.getElementById('side').value = "";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">The other leg is ${Math.sqrt(Math.pow(hypo, 2) - Math.pow(leg, 2))}cm (&#8764; ${(Math.sqrt(Math.pow(hypo, 2) - Math.pow(leg, 2))).toFixed(3)})</p>`;
        document.getElementById('hypo').value = "";
        document.getElementById('side').value = "";
    }
});
