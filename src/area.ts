//copyrights (c) 2021 MathFlare LLC. All rights reserved.
// square
(document.getElementById('squarecalc')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const side: number = parseFloat((< HTMLInputElement > document.getElementById('squareside')).value)!;
    if (isNaN(side)) {
        (document.getElementById('squareout')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('squareside')).value = "";
    } else if (side <= 0) {
        (document.getElementById('squareout')as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('squareside')).value = "";
    } else {
        (document.getElementById('squareout')as HTMLElement).innerHTML = `<p class="text-success">The area of the square is A = ${
            side * side
        }cm<sup>2</sup></p>`;
        (< HTMLInputElement > document.getElementById('squareside')).value = "";
    }
});
// parallelogram
(document.getElementById('paracalc')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const width: number = parseFloat((< HTMLInputElement > document.getElementById('paraw')).value)!;
    const height: number = parseFloat((< HTMLInputElement > document.getElementById('parah')).value)!;
    if (isNaN(width) || isNaN(height)) {
        (document.getElementById('paraout')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('paraw')).value = "";
        (< HTMLInputElement > document.getElementById('parah')).value = "";
    } else if (width <= 0 || height <= 0) {
        (document.getElementById('paraout')as HTMLElement).innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('paraw')).value = "";
        (< HTMLInputElement > document.getElementById('parah')).value = "";
    } else {
        (document.getElementById('paraout')as HTMLElement).innerHTML = `<p class="text-success">The area of the parallelogram is A = ${
            width * height
        }cm<sup>2</sup></p>`;
        (< HTMLInputElement > document.getElementById('paraw')).value = "";
        (< HTMLInputElement > document.getElementById('parah')).value = "";
    }
});
// triangle
(document.getElementById('tricalc')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((< HTMLInputElement > document.getElementById('tria')).value)!;
    const b: number = parseFloat((< HTMLInputElement > document.getElementById('trib')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (document.getElementById('triout')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('tria')).value = "";
        (< HTMLInputElement > document.getElementById('trib')).value = "";
    } else if (a <= 0 || b <= 0) {
        (document.getElementById('triout')as HTMLElement).innerHTML = `<p class="text-warning">Both the segment and the height must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('tria')).value = "";
        (< HTMLInputElement > document.getElementById('trib')).value = "";
    } else {
        (document.getElementById('triout')as HTMLElement).innerHTML = `<p class="text-success">The area of the triangle is A = ${
            (a * b) / 2
        }cm<sup>2</sup></p>`;
        (< HTMLInputElement > document.getElementById('tria')).value = "";
        (< HTMLInputElement > document.getElementById('trib')).value = "";
    }
});
// equilateral triangle
(document.getElementById('etricalc')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const side: number = parseFloat((< HTMLInputElement > document.getElementById('etris')).value)!;
    if (isNaN(side)) {
        (document.getElementById('etriout')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('etris')).value = "";
    } else if (side <= 0) {
        (document.getElementById('etriout')as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('etris')).value = "";
    } else {
        (document.getElementById('etriout')as HTMLElement).innerHTML = `<p class="text-success">The area of the equilateral triangle is A = ${
            (side * side * Math.sqrt(3)) / 4
        }cm<sup>2</sup> (&#8764; ${
            ((side * side * Math.sqrt(3)) / 4).toFixed(3)
        })</p>`;
        (< HTMLInputElement > document.getElementById('etris')).value = "";
    }
});
// circle
(document.getElementById('circlecalc')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const r: number = parseFloat((< HTMLInputElement > document.getElementById('circler')).value)!;
    const p: number = 3.14 !;
    const pperc: number = 3.14159265 !;
    if (isNaN(r)) {
        (document.getElementById('circleout')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('circler')).value = "";
    } else if (r <= 0) {
        (document.getElementById('circleout')as HTMLElement).innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('circler')).value = "";
    } else {
        (document.getElementById('circleout')as HTMLElement).innerHTML = `<p class="text-success">The area of the circle is A &#8776; ${
            r * r * p
        }cm<sup>2</sup> (A &#8776; ${
            r * r * pperc
        })</p>`;
        (< HTMLInputElement > document.getElementById('circler')).value = "";
    }
});
// trapezoid
(document.getElementById('trapcalc')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((< HTMLInputElement > document.getElementById('trapa')).value)!;
    const b: number = parseFloat((< HTMLInputElement > document.getElementById('trapb')).value)!;
    const c: number = parseFloat((< HTMLInputElement > document.getElementById('trapc')).value)!;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        (document.getElementById('trapout')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('trapa')).value = "";
        (< HTMLInputElement > document.getElementById('trapb')).value = "";
        (< HTMLInputElement > document.getElementById('trapc')).value = "";
    } else if (a <= 0 || b <= 0 || c <= 0) {
        (document.getElementById('trapout')as HTMLElement).innerHTML = `<p class="text-warning">Both the small/large segment and the height must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('trapa')).value = "";
        (< HTMLInputElement > document.getElementById('trapb')).value = "";
        (< HTMLInputElement > document.getElementById('trapc')).value = "";
    } else {
        (document.getElementById('trapout')as HTMLElement).innerHTML = `<p class="text-success">The area of the trapezoid is A = ${
            ((a + b) * c) / 2
        }cm<sup>2</sup></p>`;
        (< HTMLInputElement > document.getElementById('trapa')).value = "";
        (< HTMLInputElement > document.getElementById('trapb')).value = "";
        (< HTMLInputElement > document.getElementById('trapc')).value = "";
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.