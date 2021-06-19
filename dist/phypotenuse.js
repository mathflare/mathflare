"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const firstLeg = parseFloat(document.getElementById('fside').value);
    const secLeg = parseFloat(document.getElementById('sside').value);
    if (isNaN(firstLeg) || isNaN(secLeg)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('fside').value = "";
        document.getElementById('sside').value = "";
    }
    else if (firstLeg <= 0 || secLeg <= 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Both of the legs must be a positive number</p>`;
        document.getElementById('fside').value = "";
        document.getElementById('sside').value = "";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success">The hypotenuse of the right triangle is ${Math.sqrt((firstLeg * firstLeg) + (secLeg * secLeg))}cm (&#8764; ${(Math.sqrt((firstLeg * firstLeg) + (secLeg * secLeg))).toFixed(3)})</p>`;
        document.getElementById('fside').value = "";
        document.getElementById('sside').value = "";
    }
});
