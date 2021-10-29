//copyrights (c) 2021 MathFlare LLC. All rights reserved.
(<HTMLButtonElement>document.querySelector('#button2')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const a = parseFloat((<HTMLInputElement>document.querySelector('#a3')).value)!;
    const b = parseFloat((<HTMLInputElement>document.querySelector('#b3')).value)!;
    const c = parseFloat((<HTMLInputElement>document.querySelector('#c3')).value)!;
    const D: number = a + b;
    const x: number = c / D;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        (<HTMLElement>document.querySelector('#output2')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (a == 0 && b == 0 && c == 0) {
        (<HTMLElement>document.querySelector('#output2')).innerHTML = `<p class="text-warning">The equation is indefinite: it is true for all values. <br /> It has infinite coordinates where X=Y</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (a == 0 && b == 0 && c != 0) {
        (<HTMLElement>document.querySelector('#output2')).innerHTML = `<p class="text-warning">The equation is a contradiction: it has no solutions</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (D == 0 && c != 0) {
        (<HTMLElement>document.querySelector('#output2')).innerHTML = `<p class="text-warning">In this equation x can never equal to Y</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (D == 0 && c == 0) {
        (<HTMLElement>document.querySelector('#output2')).innerHTML = `<p class="text-warning">In this equation(x=y) x is always equal to Y</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else {
        (<HTMLElement>document.querySelector('#output2')).innerHTML = `<p class="text-success">In this equation, x=y at (x , y) = (${x} , ${x})</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.