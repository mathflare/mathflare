//copyrights (c) 2021 MathFlare LLC. All rights reserved.
// square
(document.querySelector('#square')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((< HTMLInputElement > document.querySelector('#squaren')).value)!;
    if (isNaN(n)) {
        (document.querySelector('#output1')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#squaren')).value = "";
    } else if (n <= 0) {
        (document.querySelector('#output1')as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (< HTMLInputElement > document.querySelector('#squaren')).value = "";
    } else {
        (document.querySelector('#output1')as HTMLElement).innerHTML = `<p class="text-success">C = ${4 * n}cm</p>`;
        (< HTMLInputElement > document.querySelector('#squaren')).value = "";
    }
});
// parallelogram
(document.querySelector('#para')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const width: number = parseFloat((< HTMLInputElement > document.querySelector('#paraw')).value)!;
    const height: number = parseFloat((< HTMLInputElement > document.querySelector('#parah')).value)!;
    if (isNaN(width) || isNaN(height)) {
        (document.querySelector('#output2')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#paraw')).value = "";
        (< HTMLInputElement > document.querySelector('#parah')).value = "";
    } else if (width <= 0 || height <= 0) {
        (document.querySelector('#output2')as HTMLElement).innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        (< HTMLInputElement > document.querySelector('#paraw')).value = "";
        (< HTMLInputElement > document.querySelector('#parah')).value = "";
    } else {
        (document.querySelector('#output2')as HTMLElement).innerHTML = `<p class="text-success">C = ${2 * width + 2 * height}cm</p>`;
        (< HTMLInputElement > document.querySelector('#paraw')).value = "";
        (< HTMLInputElement > document.querySelector('#parah')).value = "";
    }
});
// triangle
(document.querySelector('#tri')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((< HTMLInputElement > document.querySelector('#tria')).value)!;
    const b: number = parseFloat((< HTMLInputElement > document.querySelector('#trib')).value)!;
    const c: number = parseFloat((< HTMLInputElement > document.querySelector('#tric')).value)!;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        (document.querySelector('#output3')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#tria')).value = "";
        (< HTMLInputElement > document.querySelector('#trib')).value = "";
        (< HTMLInputElement > document.querySelector('#tric')).value = "";
    } else if (a <= 0 || b <= 0) {
        (document.querySelector('#output3')as HTMLElement).innerHTML = `<p class="text-warning">All of the segments must be a positive number</p>`;
        (< HTMLInputElement > document.querySelector('#tria')).value = "";
        (< HTMLInputElement > document.querySelector('#trib')).value = "";
        (< HTMLInputElement > document.querySelector('#tric')).value = "";
    } else {
        (document.querySelector('#output3')as HTMLElement).innerHTML = `<p class="text-success">C = ${a + b + c}</p>`;
        (< HTMLInputElement > document.querySelector('#tria')).value = "";
        (< HTMLInputElement > document.querySelector('#trib')).value = "";
        (< HTMLInputElement > document.querySelector('#tric')).value = "";
    }
});
// equilateral triangle
(document.querySelector('#eqtri')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((< HTMLInputElement > document.querySelector('#trin')).value)!;
    if (isNaN(n)) {
        (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#trin')).value = "";
    } else if (n <= 0) {
        (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (< HTMLInputElement > document.querySelector('#trin')).value = "";
    } else {
        (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-success">C = ${3 * n}cm</p>`;
        (< HTMLInputElement > document.querySelector('#trin')).value = "";
    }
});
// circle
(document.querySelector('#circle')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const r: number = parseFloat((< HTMLInputElement > document.querySelector('#circler')).value)!;
    const p: number = 3.14 !;
    const pprec: number = 3.14159265 !;
    if (isNaN(r)) {
        (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#circler')).value = "";
    } else if (r <= 0) {
        (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        (< HTMLInputElement > document.querySelector('#circler')).value = "";
    } else {
        (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-success">C &#8776;${
            2 * r * p
        }cm (&#8764; ${2 * r * pprec})</p>`;
        (< HTMLInputElement > document.querySelector('#circler')).value = "";
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.