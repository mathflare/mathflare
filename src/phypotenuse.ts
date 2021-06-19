(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const firstLeg: number = parseFloat((< HTMLInputElement > document.getElementById('fside')).value)!;
    const secLeg: number = parseFloat((< HTMLInputElement > document.getElementById('sside')).value)!;
    if (isNaN(firstLeg) || isNaN(secLeg)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('fside')).value = "";
        (< HTMLInputElement > document.getElementById('sside')).value = "";
    } else if (firstLeg <= 0 || secLeg <= 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Both of the legs must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('fside')).value = "";
        (< HTMLInputElement > document.getElementById('sside')).value = "";
    } else {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">The hypotenuse of the right triangle is ${Math.sqrt((firstLeg * firstLeg) + (secLeg * secLeg))}cm (&#8764; ${(Math.sqrt((firstLeg * firstLeg) + (secLeg * secLeg))).toFixed(3)})</p>`;
        (< HTMLInputElement > document.getElementById('fside')).value = "";
        (< HTMLInputElement > document.getElementById('sside')).value = "";
    }
});