//(c) copyrights 2021 MathFlare LLC. All rights reserved.
// AX²+C=0
(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number | string = parseFloat((< HTMLInputElement > document.getElementById('a')).value)!;
    const c: number | string = parseFloat((< HTMLInputElement > document.getElementById('c')).value)!;
    if (isNaN(a) || isNaN(c)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('a')).value = "";
        (< HTMLInputElement > document.getElementById('c')).value = "";
    } else if (- c < 0 && a > 0) {
        const x: number = Math.sqrt(c / a);
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br> X = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
        (< HTMLInputElement > document.getElementById('a')).value = "";
        (< HTMLInputElement > document.getElementById('c')).value = "";
    } else if (a == 0 && - c != 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        (< HTMLInputElement > document.getElementById('a')).value = "";
        (< HTMLInputElement > document.getElementById('c')).value = "";
    } else if (a == 0 && - c == 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (< HTMLInputElement > document.getElementById('a')).value = "";
        (< HTMLInputElement > document.getElementById('c')).value = "";
    } else {
        const x: number = Math.sqrt(- c / a);
        if (x == 0) {
            (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">X = ${x}</p>`;
            (< HTMLInputElement > document.getElementById('a')).value = "";
            (< HTMLInputElement > document.getElementById('c')).value = "";
        } else {
            (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">X = &#177;${x}</p>`;
            (< HTMLInputElement > document.getElementById('a')).value = "";
            (< HTMLInputElement > document.getElementById('c')).value = "";
        }
    }
});
// AX²+BX=0
(document.getElementById('button2')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((< HTMLInputElement > document.getElementById('a2')).value)!;
    const b: number = parseFloat((< HTMLInputElement > document.getElementById('b2')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('a2')).value = "";
        (< HTMLInputElement > document.getElementById('b2')).value = "";
    } else if (a == 0 && b == 0) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (< HTMLInputElement > document.getElementById('a2')).value = "";
        (< HTMLInputElement > document.getElementById('b2')).value = "";
    } else if ((a != 0 && b == 0) || (a == 0 && b != 0)) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-success">X = 0</p>`;
        (< HTMLInputElement > document.getElementById('a2')).value = "";
        (< HTMLInputElement > document.getElementById('b2')).value = "";
    } else {
        const x1: number = 0;
        const x2: number = - b / a;
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-success">X = ${x1} or X = ${x2}</p>`;
        (< HTMLInputElement > document.getElementById('a2')).value = "";
        (< HTMLInputElement > document.getElementById('b2')).value = "";
    }
});
// AX²+BX+C=0
(document.getElementById('button3')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((< HTMLInputElement > document.getElementById('a3')).value)!;
    const b: number = parseFloat((< HTMLInputElement > document.getElementById('b3')).value)!;
    const c: number = parseFloat((< HTMLInputElement > document.getElementById('c3')).value)!;
    const D: number = b * b - 4 * a * c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('a3')).value = "";
        (< HTMLInputElement > document.getElementById('b3')).value = "";
        (< HTMLInputElement > document.getElementById('c3')).value = "";
    } else if (a == 0 && b == 0 && c == 0) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (< HTMLInputElement > document.getElementById('a3')).value = "";
        (< HTMLInputElement > document.getElementById('b3')).value = "";
        (< HTMLInputElement > document.getElementById('c3')).value = "";
    } else if (a == 0 && (b == 0) && (c != 0)) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        (< HTMLInputElement > document.getElementById('a3')).value = "";
        (< HTMLInputElement > document.getElementById('b3')).value = "";
        (< HTMLInputElement > document.getElementById('c3')).value = "";
    } else if ((a == 0 && b != 0 && c == 0) || (a == 0 && b != 0 && c != 0)) {
        const x: number = - c / b;
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-success">X = ${x}</p>`;
        (< HTMLInputElement > document.getElementById('a3')).value = "";
        (< HTMLInputElement > document.getElementById('b3')).value = "";
        (< HTMLInputElement > document.getElementById('c3')).value = "";
    } else if (a != 0 && b == 0) {
        const x: number = Math.sqrt(- c / a);
        if (x == 0) {
            (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-success">X = ${x}</p>`;
            (< HTMLInputElement > document.getElementById('a3')).value = "";
            (< HTMLInputElement > document.getElementById('b3')).value = "";
            (< HTMLInputElement > document.getElementById('c3')).value = "";
        } else if (- c < 0 && a > 0) {
            const x: number = Math.sqrt(c / a);
            (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br> X = &#177; ${x}i (&#8764;${x.toFixed(4)}) in C</p>`;
            (< HTMLInputElement > document.getElementById('a3')).value = "";
            (< HTMLInputElement > document.getElementById('b3')).value = "";
            (< HTMLInputElement > document.getElementById('c3')).value = "";
        } else {
            (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-success">X = &#177;${x}</p>`;
            (< HTMLInputElement > document.getElementById('a3')).value = "";
            (< HTMLInputElement > document.getElementById('b3')).value = "";
            (< HTMLInputElement > document.getElementById('c3')).value = "";
        }
    } else if (D < 0) {
        const x1: number = (- b - Math.sqrt(- D)) / (2 * a);
        const x2: number = (- b + Math.sqrt(- D)) / (2 * a);
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">Discriminant(Δ) = ${D} < 0, The equation is a contradiction in R: it has no solutions <br> X = ${x1} or X = ${x2} in C</p>`;
        (< HTMLInputElement > document.getElementById('a3')).value = "";
        (< HTMLInputElement > document.getElementById('b3')).value = "";
        (< HTMLInputElement > document.getElementById('c3')).value = "";
    } else if (D == 0) {
        const x1: number = (- b - Math.sqrt(D)) / (2 * a);
        const x2: number = (- b + Math.sqrt(D)) / (2 * a);
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-success">Discriminant(Δ) = 0,  X = ${x1} (double solution)</p>`;
        (< HTMLInputElement > document.getElementById('a3')).value = "";
        (< HTMLInputElement > document.getElementById('b3')).value = "";
        (< HTMLInputElement > document.getElementById('c3')).value = "";
    } else {
        const x1: number = (- b - Math.sqrt(D)) / (2 * a);
        const x2: number = (- b + Math.sqrt(D)) / (2 * a);
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-success">Discriminant(Δ) = ${D} > 0,  X = ${x1} or X = ${x2}</p>`;
        (< HTMLInputElement > document.getElementById('a3')).value = "";
        (< HTMLInputElement > document.getElementById('b3')).value = "";
        (< HTMLInputElement > document.getElementById('c3')).value = "";
    }
});
//(c) copyrights 2021 MathFlare LLC. All rights reserved.