(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const base: number = parseFloat((< HTMLInputElement > document.getElementById('base')).value)!;
    const exp: number = parseFloat((< HTMLInputElement > document.getElementById('exp')).value)!;
    if (isNaN(base) || isNaN(exp)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('base')).value = "";
        (< HTMLInputElement > document.getElementById('exp')).value = "";
    } else if (base == 0 && exp < 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('base')).value = "";
        (< HTMLInputElement > document.getElementById('exp')).value = "";
    } else {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">${base}<sup>${exp}</sup> = ${
            Math.pow(base, exp)
        }</p>`;
        (< HTMLInputElement > document.getElementById('base')).value = "";
        (< HTMLInputElement > document.getElementById('exp')).value = "";
    }
});
