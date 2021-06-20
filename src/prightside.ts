(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const hypo: number = parseFloat((< HTMLInputElement > document.getElementById('hypo')).value)!;
    const leg: number = parseFloat((< HTMLInputElement > document.getElementById('side')).value)!;
    if (isNaN(hypo) || isNaN(leg)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('hypo')).value = "";
        (< HTMLInputElement > document.getElementById('side')).value = "";
    } else if (hypo <= 0 || leg <= 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Both the leg and the hypotenuse must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('hypo')).value = "";
        (< HTMLInputElement > document.getElementById('side')).value = "";
    } 
    else if (hypo <= leg) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The hypotenuse cannot be smaller than or equal to the triangle's leg</p>`;
        (< HTMLInputElement > document.getElementById('hypo')).value = "";
        (< HTMLInputElement > document.getElementById('side')).value = "";
    } else {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">The other leg is ${Math.sqrt(
            hypo ** 2 - leg ** 2
        )}cm (&#8764; ${(Math.sqrt(hypo ** 2 - leg ** 2)).toFixed(3)})</p>`;
        (< HTMLInputElement > document.getElementById('hypo')).value = "";
        (< HTMLInputElement > document.getElementById('side')).value = "";
    }
});