(document.querySelector('#button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const base: number = parseFloat((< HTMLInputElement > document.querySelector('#base')).value)!;
    const exp: number = parseFloat((< HTMLInputElement > document.querySelector('#exp')).value)!;
    if (isNaN(base) || isNaN(exp)) {
        (document.querySelector('#output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#base')).value = "";
        (< HTMLInputElement > document.querySelector('#exp')).value = "";
    } else if (base == 0 && exp < 0) {
        (document.querySelector('#output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#base')).value = "";
        (< HTMLInputElement > document.querySelector('#exp')).value = "";
    } else {
        (document.querySelector('#output')as HTMLElement).innerHTML = `<p class="text-success">${base}<sup>${exp}</sup> = ${
            new Intl.NumberFormat().format(Math.pow(base, exp))
        }</p>`;
        (< HTMLInputElement > document.querySelector('#base')).value = "";
        (< HTMLInputElement > document.querySelector('#exp')).value = "";
    }
});
