//copyrights (c) 2021 MathFlare LLC. All rights reserved.
// AX²+C=0
(document.querySelector('#button') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const a: number | string = parseFloat((<HTMLInputElement>document.querySelector('#a')).value)!;
    const c: number | string = parseFloat((<HTMLInputElement>document.querySelector('#c')).value)!;
    if (isNaN(a) || isNaN(c)) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#a')).value = "";
        (<HTMLInputElement>document.querySelector('#c')).value = "";
    } else if (- c < 0 && a > 0) {
        //const x: number = Math.sqrt(c / a);
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${reduceFraction(Math.sqrt(c), Math.sqrt(a))}i in C</p>`;
        (<HTMLInputElement>document.querySelector('#a')).value = "";
        (<HTMLInputElement>document.querySelector('#c')).value = "";
    } else if (-c > 0 && a < 0) {
        //const x: number = Math.sqrt(-c / -a);
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${reduceFraction(Math.sqrt(-c), Math.sqrt(-a))}i in C</p>`;
        (<HTMLInputElement>document.querySelector('#a')).value = "";
        (<HTMLInputElement>document.querySelector('#c')).value = "";
    } else if (a == 0 && - c != 0) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        (<HTMLInputElement>document.querySelector('#a')).value = "";
        (<HTMLInputElement>document.querySelector('#c')).value = "";
    } else if (a == 0 && - c == 0) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (<HTMLInputElement>document.querySelector('#a')).value = "";
        (<HTMLInputElement>document.querySelector('#c')).value = "";
    } else {
        const x: number = Math.sqrt(- c / a);
        if (x == 0) {
            (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">x = ${x}</p>`;
            (<HTMLInputElement>document.querySelector('#a')).value = "";
            (<HTMLInputElement>document.querySelector('#c')).value = "";
        } else {
            if (-c < 0) {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">x = &#177;${reduceFraction(-Math.sqrt(c), -Math.sqrt(-a))}</p>`;
                (<HTMLInputElement>document.querySelector('#a')).value = "";
                (<HTMLInputElement>document.querySelector('#c')).value = "";
            } else {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">x = &#177;${reduceFraction(Math.sqrt(-c), Math.sqrt(a))}</p>`;
                (<HTMLInputElement>document.querySelector('#a')).value = "";
                (<HTMLInputElement>document.querySelector('#c')).value = "";
            }
        }
    }
});
// AX²+BX=0
(document.querySelector('#button2') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a2')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#b2')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#a2')).value = "";
        (<HTMLInputElement>document.querySelector('#b2')).value = "";
    } else if (a == 0 && b == 0) {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (<HTMLInputElement>document.querySelector('#a2')).value = "";
        (<HTMLInputElement>document.querySelector('#b2')).value = "";
    } else if ((a != 0 && b == 0) || (a == 0 && b != 0)) {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-success">x = 0</p>`;
        (<HTMLInputElement>document.querySelector('#a2')).value = "";
        (<HTMLInputElement>document.querySelector('#b2')).value = "";
    } else {
        const x1: number = 0;
        //const x2: number = - b / a;
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-success">x = ${x1} OR x = ${reduceFraction(-b, a)}</p>`;
        (<HTMLInputElement>document.querySelector('#a2')).value = "";
        (<HTMLInputElement>document.querySelector('#b2')).value = "";
    }
});
// AX²+BX+C=0
(document.querySelector('#button3') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a3')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#b3')).value)!;
    const c: number = parseFloat((<HTMLInputElement>document.querySelector('#c3')).value)!;
    const D: number = b * b - 4 * a * c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (a == 0 && b == 0 && c == 0) {
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (a == 0 && (b == 0) && (c != 0)) {
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if ((a == 0 && b != 0 && c == 0) || (a == 0 && b != 0 && c != 0)) {
        //const x: number = - c / b;
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-success">x = ${reduceFraction(-c, b)}</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (a != 0 && b == 0) {
        const x: number = Math.sqrt(-c / a);
        if (x == 0) {
            (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-success">x = ${x}</p>`;
            (<HTMLInputElement>document.querySelector('#a3')).value = "";
            (<HTMLInputElement>document.querySelector('#b3')).value = "";
            (<HTMLInputElement>document.querySelector('#c3')).value = "";
        } else if (- c < 0 && a > 0) {
            //const x: number = Math.sqrt(c / a);
            (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${reduceFraction(Math.sqrt(c), Math.sqrt(a))}i in C</p>`;
            (<HTMLInputElement>document.querySelector('#a3')).value = "";
            (<HTMLInputElement>document.querySelector('#b3')).value = "";
            (<HTMLInputElement>document.querySelector('#c3')).value = "";
        } else if (-c > 0 && a < 0) {
            //const x: number = Math.sqrt(-c / -a);
            (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${reduceFraction(Math.sqrt(-c), Math.sqrt(-a))}i in C</p>`;
            (<HTMLInputElement>document.querySelector('#a3')).value = "";
            (<HTMLInputElement>document.querySelector('#b3')).value = "";
            (<HTMLInputElement>document.querySelector('#c3')).value = "";
        } else {
            if (-c < 0) {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">x = &#177;${reduceFraction(-Math.sqrt(c), -Math.sqrt(-a))}</p>`;
                (<HTMLInputElement>document.querySelector('#a')).value = "";
                (<HTMLInputElement>document.querySelector('#c')).value = "";
            } else {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">x = &#177;${reduceFraction(Math.sqrt(-c), Math.sqrt(a))}</p>`;
                (<HTMLInputElement>document.querySelector('#a')).value = "";
                (<HTMLInputElement>document.querySelector('#c')).value = "";
            }
        }
    } else if (D < 0) {
        //const x1: number = (- b - Math.sqrt(- D)) / (2 * a);
        //const x2: number = (- b + Math.sqrt(- D)) / (2 * a);
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">Discriminant(Δ) = ${D} < 0, The equation is a contradiction in R: it has no solutions <br /> x = ${reduceFraction(- b, 2 * a)}-${reduceFraction(Math.sqrt(- D), 2 * a)}i OR x = ${reduceFraction(- b, 2 * a)}+${reduceFraction(Math.sqrt(- D), 2 * a)}i in C</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else if (D == 0) {
        //const x1: number = (- b - Math.sqrt(D)) / (2 * a);
        //const x2: number = (- b + Math.sqrt(D)) / (2 * a);
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-success">Discriminant(Δ) = 0,  x = ${reduceFraction(- b - Math.sqrt(D), 2 * a)} (double solution)</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    } else {
        //const x1: number = (- b - Math.sqrt(D)) / (2 * a);
        //const x2: number = (- b + Math.sqrt(D)) / (2 * a);
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-success">Discriminant(Δ) = ${D} > 0,  x = ${reduceFraction(- b - Math.sqrt(D), 2 * a)} OR x = ${reduceFraction(- b + Math.sqrt(D), 2 * a)}</p>`;
        (<HTMLInputElement>document.querySelector('#a3')).value = "";
        (<HTMLInputElement>document.querySelector('#b3')).value = "";
        (<HTMLInputElement>document.querySelector('#c3')).value = "";
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.