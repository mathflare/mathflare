(<HTMLButtonElement>document.getElementById('nrootcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const exp: number = parseFloat((<HTMLInputElement>document.getElementById('nrootexp')).value)!;
    const rad: number = parseFloat((<HTMLInputElement>document.getElementById('nrootrad')).value)!;
    if (isNaN(rad) || isNaN(exp)) {
        (<HTMLParagraphElement>document.getElementById('nrootout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('nrootrad')).value = '';
        (<HTMLInputElement>document.getElementById('nrootexp')).value = '';
    } else if (rad < 0) {
        (<HTMLParagraphElement>document.getElementById('nrootout')).innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        (<HTMLInputElement>document.getElementById('nrootrad')).value = '';
        (<HTMLInputElement>document.getElementById('nrootexp')).value = '';
    } else if (exp === 0) {
        (<HTMLParagraphElement>document.getElementById('nrootout')).innerHTML = `<p class="text-warning">The exponent cannot be zero</p>`;
        (<HTMLInputElement>document.getElementById('nrootrad')).value = '';
        (<HTMLInputElement>document.getElementById('nrootexp')).value = '';
    } else {
        const res = Math.pow(rad, 1 / exp);
        if (res === Math.floor(res)) {
            (<HTMLParagraphElement>document.getElementById('nrootout')).innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res}</p>`;
            (<HTMLInputElement>document.getElementById('nrootrad')).value = '';
            (<HTMLInputElement>document.getElementById('nrootexp')).value = '';
        } else {
            (<HTMLParagraphElement>document.getElementById('nrootout')).innerHTML = `<p class="text-success"><sup>${exp}</sup>&#8730;${rad} = ${res} (&#8764; ${res.toFixed(3)})</p>`;
            (<HTMLInputElement>document.getElementById('nrootrad')).value = '';
            (<HTMLInputElement>document.getElementById('nrootexp')).value = '';
        }
    }
});