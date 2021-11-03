//copyrights (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#atomcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const x: string = ((<HTMLInputElement>document.querySelector('#x1')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.querySelector('#z1')).value)!;
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a1')).value)!;
    if (x === '' || isNaN(z) || isNaN(a)) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (a <= 0 || z <= 0) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">All values must be positive</p>`;
    } else if (Math.floor(a) !== a || Math.floor(z) !== z) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
    } else if (a < 2 * z) {
        (<HTMLParagraphElement>document.querySelector('#atomout')).innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
    } else {
        //${z}p<sup>+</sup> ${z}e<sup>-</sup> ${a - z}n
        (<HTMLParagraphElement>document.querySelector('#protonatom')).innerHTML = `<p class="text-success">${z}p<sup>+</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#electronatom')).innerHTML = `<p class="text-success">${z}e<sup>-</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#neutronatom')).innerHTML = `<p class="text-success">${a - z}n</p>`;
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtnatom')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    (<HTMLInputElement>document.querySelector('#x1')).value = '';
    (<HTMLInputElement>document.querySelector('#z1')).value = '';
    (<HTMLInputElement>document.querySelector('#a1')).value = '';
    (<HTMLParagraphElement>document.querySelector('#protonatom')).innerHTML = 'p<sup>+</sup>';
    (<HTMLParagraphElement>document.querySelector('#electronatom')).innerHTML = 'e<sup>-</sup>';
    (<HTMLParagraphElement>document.querySelector('#neutronatom')).innerHTML = 'n';
    (<HTMLParagraphElement>document.querySelector('#atomout')).innerText = '';
});
//copyrights (c) 2021 MathFlare.xyz