(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((< HTMLInputElement > document.getElementById('number')).value)!;
    const base: number = parseFloat((< HTMLInputElement > document.getElementById('base')).value)!;
    if (isNaN(num) || isNaN(base)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
        (< HTMLInputElement > document.getElementById('base')).value = "10";
    }
    else if (num <= 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The logarithm is an indeterminate</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
        (< HTMLInputElement > document.getElementById('base')).value = "10";
    } else if (base == 1 || base <= 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The logarithm is an indeterminate; it's base cannot be negative, 0 or 1 (base > 0 and base &#8800; 1)</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
        (< HTMLInputElement > document.getElementById('base')).value = "10";
    } else {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">log<sub>${base}</sub>(${num}) = ${
            Math.log(num) / Math.log(base)
        }</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
        (< HTMLInputElement > document.getElementById('base')).value = "10";
    }
});