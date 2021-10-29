//copyrights (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#ioncalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const x: string = ((<HTMLInputElement>document.querySelector('#x2')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.querySelector('#z2')).value)!;
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a2')).value)!;
    const v: number = parseFloat((<HTMLInputElement>document.querySelector('#v2')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x2')).value = '';
        (<HTMLInputElement>document.querySelector('#z2')).value = '';
        (<HTMLInputElement>document.querySelector('#a2')).value = '';
        (<HTMLInputElement>document.querySelector('#v2')).value = '';
    };
    if (x === '' || isNaN(z) || isNaN(a) || isNaN(v)) {
        (<HTMLParagraphElement>document.querySelector('#ionout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(a) !== a || Math.floor(z) !== z || Math.floor(v) !== v) {
        (<HTMLParagraphElement>document.querySelector('#ionout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (a <= 0 || z <= 0) {
        (<HTMLParagraphElement>document.querySelector('#ionout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (v > 6 || v < -3) {
        (<HTMLParagraphElement>document.querySelector('#ionout')).innerHTML = `<p class="text-warning">The value of v cannot be greater than 6 or smaller than -3</p>`;
        clearValues();
    } else if (a < 2 * z) {
        (<HTMLParagraphElement>document.querySelector('#ionout')).innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#ionout')).innerHTML = `<p class="text-success">${z}p<sup>+</sup></p> ${z - v}e<sup>-</sup> ${a - z}n</p></p>`;
        clearValues();
    }
});
//copyrights (c) 2021 MathFlare.xyz