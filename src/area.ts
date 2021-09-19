//copyrights (c) 2021 MathFlare LLC. All rights reserved.
// square
(document.querySelector('#squarecalc') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const side: number = parseFloat((<HTMLInputElement>document.querySelector('#squareside')).value)!;
    if (isNaN(side)) {
        (document.querySelector('#squareout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#squareside')).value = "";
    } else if (side <= 0) {
        (document.querySelector('#squareout') as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#squareside')).value = "";
    } else {
        (document.querySelector('#squareout') as HTMLElement).innerHTML = `<p class="text-success">The area of the square is A = ${side * side
            }cm<sup>2</sup></p>`;
        (<HTMLInputElement>document.querySelector('#squareside')).value = "";
    }
});
// parallelogram
(document.querySelector('#paracalc') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const width: number = parseFloat((<HTMLInputElement>document.querySelector('#paraw')).value)!;
    const height: number = parseFloat((<HTMLInputElement>document.querySelector('#parah')).value)!;
    if (isNaN(width) || isNaN(height)) {
        (document.querySelector('#paraout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#paraw')).value = "";
        (<HTMLInputElement>document.querySelector('#parah')).value = "";
    } else if (width <= 0 || height <= 0) {
        (document.querySelector('#paraout') as HTMLElement).innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#paraw')).value = "";
        (<HTMLInputElement>document.querySelector('#parah')).value = "";
    } else {
        (document.querySelector('#paraout') as HTMLElement).innerHTML = `<p class="text-success">The area of the parallelogram is A = ${width * height
            }cm<sup>2</sup></p>`;
        (<HTMLInputElement>document.querySelector('#paraw')).value = "";
        (<HTMLInputElement>document.querySelector('#parah')).value = "";
    }
});
// triangle
(document.querySelector('#tricalc') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#tria')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#trib')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (document.querySelector('#triout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#tria')).value = "";
        (<HTMLInputElement>document.querySelector('#trib')).value = "";
    } else if (a <= 0 || b <= 0) {
        (document.querySelector('#triout') as HTMLElement).innerHTML = `<p class="text-warning">Both the segment and the height must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#tria')).value = "";
        (<HTMLInputElement>document.querySelector('#trib')).value = "";
    } else {
        (document.querySelector('#triout') as HTMLElement).innerHTML = `<p class="text-success">The area of the triangle is A = ${(a * b) / 2
            }cm<sup>2</sup></p>`;
        (<HTMLInputElement>document.querySelector('#tria')).value = "";
        (<HTMLInputElement>document.querySelector('#trib')).value = "";
    }
});
// equilateral triangle
(document.querySelector('#etricalc') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const side: number = parseFloat((<HTMLInputElement>document.querySelector('#etris')).value)!;
    if (isNaN(side)) {
        (document.querySelector('#etriout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#etris')).value = "";
    } else if (side <= 0) {
        (document.querySelector('#etriout') as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#etris')).value = "";
    } else {
        (document.querySelector('#etriout') as HTMLElement).innerHTML = `<p class="text-success">The area of the equilateral triangle is A = ${(side * side * Math.sqrt(3)) / 4
            }cm<sup>2</sup> (&#8764; ${((side * side * Math.sqrt(3)) / 4).toFixed(3)
            })</p>`;
        (<HTMLInputElement>document.querySelector('#etris')).value = "";
    }
});
// circle
(document.querySelector('#circlecalc') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const r: number = parseFloat((<HTMLInputElement>document.querySelector('#circler')).value)!;
    const p: number = 3.14!;
    const pperc: number = 3.14159265!;
    if (isNaN(r)) {
        (document.querySelector('#circleout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#circler')).value = "";
    } else if (r <= 0) {
        (document.querySelector('#circleout') as HTMLElement).innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#circler')).value = "";
    } else {
        (document.querySelector('#circleout') as HTMLElement).innerHTML = `<p class="text-success">The area of the circle is A &#8776; ${r * r * p
            }cm<sup>2</sup> (A &#8776; ${r * r * pperc
            })</p>`;
        (<HTMLInputElement>document.querySelector('#circler')).value = "";
    }
});
// trapezoid
(document.querySelector('#trapcalc') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#trapa')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#trapb')).value)!;
    const c: number = parseFloat((<HTMLInputElement>document.querySelector('#trapc')).value)!;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        (document.querySelector('#trapout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#trapa')).value = "";
        (<HTMLInputElement>document.querySelector('#trapb')).value = "";
        (<HTMLInputElement>document.querySelector('#trapc')).value = "";
    } else if (a <= 0 || b <= 0 || c <= 0) {
        (document.querySelector('#trapout') as HTMLElement).innerHTML = `<p class="text-warning">Both the small/large segment and the height must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#trapa')).value = "";
        (<HTMLInputElement>document.querySelector('#trapb')).value = "";
        (<HTMLInputElement>document.querySelector('#trapc')).value = "";
    } else {
        (document.querySelector('#trapout') as HTMLElement).innerHTML = `<p class="text-success">The area of the trapezoid is A = ${((a + b) * c) / 2
            }cm<sup>2</sup></p>`;
        (<HTMLInputElement>document.querySelector('#trapa')).value = "";
        (<HTMLInputElement>document.querySelector('#trapb')).value = "";
        (<HTMLInputElement>document.querySelector('#trapc')).value = "";
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.