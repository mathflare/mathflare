//copyrights (c) 2021 MathFlare LLC. All rights reserved.
// square
(document.getElementById('square')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((< HTMLInputElement > document.getElementById('squaren')).value)!;
    if (isNaN(n)) {
        (document.getElementById('output1')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('squaren')).value = "";
    } else if (n <= 0) {
        (document.getElementById('output1')as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('squaren')).value = "";
    } else {
        (document.getElementById('output1')as HTMLElement).innerHTML = `<p class="text-success">C = ${4 * n}cm</p>`;
        (< HTMLInputElement > document.getElementById('squaren')).value = "";
    }
});
// parallelogram
(document.getElementById('para')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const width: number = parseFloat((< HTMLInputElement > document.getElementById('paraw')).value)!;
    const height: number = parseFloat((< HTMLInputElement > document.getElementById('parah')).value)!;
    if (isNaN(width) || isNaN(height)) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('paraw')).value = "";
        (< HTMLInputElement > document.getElementById('parah')).value = "";
    } else if (width <= 0 || height <= 0) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('paraw')).value = "";
        (< HTMLInputElement > document.getElementById('parah')).value = "";
    } else {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-success">C = ${2 * width + 2 * height}cm</p>`;
        (< HTMLInputElement > document.getElementById('paraw')).value = "";
        (< HTMLInputElement > document.getElementById('parah')).value = "";
    }
});
// triangle
(document.getElementById('tri')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((< HTMLInputElement > document.getElementById('tria')).value)!;
    const b: number = parseFloat((< HTMLInputElement > document.getElementById('trib')).value)!;
    const c: number = parseFloat((< HTMLInputElement > document.getElementById('tric')).value)!;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('tria')).value = "";
        (< HTMLInputElement > document.getElementById('trib')).value = "";
        (< HTMLInputElement > document.getElementById('tric')).value = "";
    } else if (a <= 0 || b <= 0) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">All of the segments must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('tria')).value = "";
        (< HTMLInputElement > document.getElementById('trib')).value = "";
        (< HTMLInputElement > document.getElementById('tric')).value = "";
    } else {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-success">C = ${a + b + c}</p>`;
        (< HTMLInputElement > document.getElementById('tria')).value = "";
        (< HTMLInputElement > document.getElementById('trib')).value = "";
        (< HTMLInputElement > document.getElementById('tric')).value = "";
    }
});
// equilateral triangle
(document.getElementById('eqtri')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((< HTMLInputElement > document.getElementById('trin')).value)!;
    if (isNaN(n)) {
        (document.getElementById('output4')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('trin')).value = "";
    } else if (n <= 0) {
        (document.getElementById('output4')as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('trin')).value = "";
    } else {
        (document.getElementById('output4')as HTMLElement).innerHTML = `<p class="text-success">C = ${3 * n}cm</p>`;
        (< HTMLInputElement > document.getElementById('trin')).value = "";
    }
});
// circle
(document.getElementById('circle')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const r: number = parseFloat((< HTMLInputElement > document.getElementById('circler')).value)!;
    const p: number = 3.14 !;
    const pprec: number = 3.14159265 !;
    if (isNaN(r)) {
        (document.getElementById('output5')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('circler')).value = "";
    } else if (r <= 0) {
        (document.getElementById('output5')as HTMLElement).innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('circler')).value = "";
    } else {
        (document.getElementById('output5')as HTMLElement).innerHTML = `<p class="text-success">C &#8776;${
            2 * r * p
        }cm (&#8764; ${2 * r * pprec})</p>`;
        (< HTMLInputElement > document.getElementById('circler')).value = "";
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.