(<HTMLButtonElement>document.querySelector('#button')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.querySelector('#number')).value)!;
    const base: number = parseFloat((<HTMLInputElement>document.querySelector('#base')).value)!;
    if (isNaN(num) || isNaN(base)) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (num <= 0) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">The logarithm is an indeterminate</p>`;
    } else if (base == 1 || base <= 0) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">The logarithm is an indeterminate; it's base cannot be negative, 0 or 1 (base > 0 and base &#8800; 1)</p>`;
    } else {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-success">log<sub>${base}</sub>(${num}) = ${Math.log(num) / Math.log(base)
            }</p>`;
    }
});
(<HTMLButtonElement>document.querySelector('#button2')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.querySelector('#natnum')).value)!;
    if (isNaN(num)) {
        (<HTMLParagraphElement>document.querySelector('#output2')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (num <= 0) {
        (<HTMLParagraphElement>document.querySelector('#output2')).innerHTML = `<p class="text-warning">The logarithm is an indeterminate</p>`;
    } else if (num == 1) {
        (<HTMLParagraphElement>document.querySelector('#output2')).innerHTML = `<p class="text-success">log<sub>e</sub>(${num}) = ${Math.log(num)} (e &#8776; ${Math.E.toFixed(4)})</p>`;
    } else {
        (<HTMLParagraphElement>document.querySelector('#output2')).innerHTML = `<p class="text-success">log<sub>e</sub>(${num}) = ${Math.log(num).toFixed(4)} (e &#8776; ${Math.E.toFixed(4)})</p>`;
    }
});