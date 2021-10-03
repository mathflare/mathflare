//copyrights (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#subparticalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const x: number = parseFloat((<HTMLInputElement>document.querySelector('#x')).value)!;
    const y: number = parseFloat((<HTMLInputElement>document.querySelector('#y')).value)!;
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#b')).value)!;
    const v: string = ((<HTMLInputElement>document.querySelector('#v')).value)!;
    const w: string = ((<HTMLInputElement>document.querySelector('#w')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x')).value = '';
        (<HTMLInputElement>document.querySelector('#y')).value = '';
        (<HTMLInputElement>document.querySelector('#a')).value = '';
        (<HTMLInputElement>document.querySelector('#b')).value = '';
        (<HTMLInputElement>document.querySelector('#v')).value = '';
        (<HTMLInputElement>document.querySelector('#w')).value = '';
    };
    if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b) || v === '' || w === '') {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (a <= 0 || b <= 0 || x <= 0 || y <= 0) {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (y === b && w !== v || y !== b && w === v) {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">Same elements must have the same atomic number and different elements must have different atomic mumber</p>`;
        clearValues();
    } else if (!(x >= 2 * y || a >= 2 * b)) {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">Mass number must be greater or equal to the double of atomic number</p>`;
        clearValues();
    } else if (w === v) {//isotope
        if (x !== a) {
            (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success"><span class="text-warning">Isotopes</span><br/>${y}p<sup>+</sup> &#61; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#61; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>Same chemical element, same chemical properties<br/>Different mass</p>`;
            clearValues();
        } else {
            (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success">${y}p<sup>+</sup> &#61; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#61; ${b}e<sup>-</sup><br/>${x - y}n  &#61; ${a - b}n<br/>Same chemical element, same chemical properties<br/>Same mass</p>`;
            clearValues();
        }
    } else if (x === a) {//isobar
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success"><span class="text-warning">Isobars</span><br/>${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>Different chemical element, different chemical properties<br/>Same mass</p>`;
        clearValues();
    } else {
        if (x - y === a - b) {
            (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success">${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#61; ${a - b}n<br/>Different chemical element, different chemical properties<br/>Different mass</p>`;
            clearValues();
        } else {
            (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success">${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>Different chemical element, different chemical properties<br/>Different mass</p>`;
            clearValues();
        }
    }
});
//copyrights (c) 2021 MathFlare.xyz