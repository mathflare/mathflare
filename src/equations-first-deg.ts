// x + y = z
(document.querySelector('#button') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const y: number = parseFloat((<HTMLInputElement>document.querySelector('#y')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.querySelector('#z')).value)!;
    if (isNaN(y) || isNaN(z)) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#y')).value = "";
        (<HTMLInputElement>document.querySelector('#z')).value = "";
    } else {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">x = ${z - y
            }</p>`;
        (<HTMLInputElement>document.querySelector('#y')).value = "";
        (<HTMLInputElement>document.querySelector('#z')).value = "";
    }
});
// x - y = z
(document.querySelector('#button2') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const y: number = parseFloat((<HTMLInputElement>document.querySelector('#y2')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.querySelector('#z2')).value)!;
    if (isNaN(y) || isNaN(z)) {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#y2')).value = "";
        (<HTMLInputElement>document.querySelector('#z2')).value = "";
    } else {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-success">x = ${z + y
            }</p>`;
        (<HTMLInputElement>document.querySelector('#y2')).value = "";
        (<HTMLInputElement>document.querySelector('#z2')).value = "";
    }
});
// xy = z
(document.querySelector('#button3') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const y: number = parseFloat((<HTMLInputElement>document.querySelector('#y3')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.querySelector('#z3')).value)!;
    if (isNaN(y) || isNaN(z)) {
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#y3')).value = "";
        (<HTMLInputElement>document.querySelector('#z3')).value = "";
    } else if (y == 0 && z == 0) {
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (<HTMLInputElement>document.querySelector('#y3')).value = "";
        (<HTMLInputElement>document.querySelector('#z3')).value = "";
    } else if ((z / y) == Number.POSITIVE_INFINITY || (z / y) == Number.NEGATIVE_INFINITY) {
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction: it has no solutions</p>`;
        (<HTMLInputElement>document.querySelector('#y3')).value = "";
        (<HTMLInputElement>document.querySelector('#z3')).value = "";
    } else {
        (document.querySelector('#output3') as HTMLElement).innerHTML = `<p class="text-success">x = ${reduceFraction(z, y)
            }</p>`;
        (<HTMLInputElement>document.querySelector('#y3')).value = "";
        (<HTMLInputElement>document.querySelector('#z3')).value = "";
    }
});
