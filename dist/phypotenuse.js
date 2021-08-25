"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    const firstLeg = parseFloat(document.querySelector('#fside').value);
    const secLeg = parseFloat(document.querySelector('#sside').value);
    if (isNaN(firstLeg) || isNaN(secLeg)) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#fside').value = "";
        document.querySelector('#sside').value = "";
    }
    else if (firstLeg <= 0 || secLeg <= 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Both of the legs must be a positive number</p>`;
        document.querySelector('#fside').value = "";
        document.querySelector('#sside').value = "";
    }
    else {
        document.querySelector('#output').innerHTML = `<p class="text-success">The hypotenuse of the right triangle is ${Math.sqrt((firstLeg * firstLeg) + (secLeg * secLeg))}cm (&#8764; ${(Math.sqrt((firstLeg * firstLeg) + (secLeg * secLeg))).toFixed(3)})</p>`;
        document.querySelector('#fside').value = "";
        document.querySelector('#sside').value = "";
    }
});
