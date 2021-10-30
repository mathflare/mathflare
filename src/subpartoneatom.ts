//copyrights (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#atomcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const x: string = ((<HTMLInputElement>document.querySelector('#x1')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.querySelector('#z1')).value)!;
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a1')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x1')).value = '';
        (<HTMLInputElement>document.querySelector('#z1')).value = '';
        (<HTMLInputElement>document.querySelector('#a1')).value = '';
    };
    if (x === '' || isNaN(z) || isNaN(a)) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (a <= 0 || z <= 0) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(a) !== a || Math.floor(z) !== z) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (a < 2 * z) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-success">${z}p<sup>+</sup></p> ${z}e<sup>-</sup>   ${a - z}n</p></p>`;
        clearValues();
    }
});
//copyrights (c) 2021 MathFlare.xyz