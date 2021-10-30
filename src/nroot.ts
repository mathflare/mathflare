(<HTMLButtonElement>document.querySelector('#nrootcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const exp: number = parseFloat((<HTMLInputElement>document.querySelector('#nrootexp')).value)!;
    const rad: number = parseFloat((<HTMLInputElement>document.querySelector('#nrootrad')).value)!;
    if (isNaN(rad) || isNaN(exp)) {
        (<HTMLParagraphElement>document.querySelector('#nrootout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (rad < 0) {
        (<HTMLParagraphElement>document.querySelector('#nrootout')).innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
    } else if (exp === 0) {
        (<HTMLParagraphElement>document.querySelector('#nrootout')).innerHTML = `<p class="text-warning">The exponent cannot be zero</p>`;
    } else {
        const res = Math.pow(rad, 1 / exp);
        if (res === Math.floor(res)) {
            (<HTMLParagraphElement>document.querySelector('#nrootout')).innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res}</p>`;
        } else {
            (<HTMLParagraphElement>document.querySelector('#nrootout')).innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res} (&#8764; ${res.toFixed(3)})</p>`;
        }
    }
});