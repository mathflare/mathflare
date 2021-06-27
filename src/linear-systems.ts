// utilizing determinants (D, Dx, Dy)
// copyright (c) 2021 MathFlare LLC. - All rights reserved.
const clearValues = () => {
    (< HTMLInputElement > document.getElementById('a1')).value = "";
    (< HTMLInputElement > document.getElementById('a2')).value = "";
    (< HTMLInputElement > document.getElementById('b1')).value = "";
    (< HTMLInputElement > document.getElementById('b2')).value = "";
    (< HTMLInputElement > document.getElementById('c1')).value = "";
    (< HTMLInputElement > document.getElementById('c2')).value = "";
};
(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const a1: number = parseFloat((< HTMLInputElement > document.getElementById('a1')).value)!;
    const b1: number = parseFloat((< HTMLInputElement > document.getElementById('b1')).value)!;
    const c1: number = parseFloat((< HTMLInputElement > document.getElementById('c1')).value)!;
    const a2: number = parseFloat((< HTMLInputElement > document.getElementById('a2')).value)!;
    const b2: number = parseFloat((< HTMLInputElement > document.getElementById('b2')).value)!;
    const c2: number = parseFloat((< HTMLInputElement > document.getElementById('c2')).value)!;
    const D: number = a1 * b2 - a2 * b1 !;
    const Dx: number = c1 * b2 - c2 * b1 !;
    const Dy: number = a1 * c2 - a2 * c1 !;
    if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2) || isNaN(D) || isNaN(Dx) || isNaN(Dy)) {
        (< HTMLElement > document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (a1 == 0 && b1 == 0 && c1 == 0 && a2 == 0 && b2 == 0 && c2 == 0) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system is indefinite: x &#8714; R , y &#8714; R</p>`;
        clearValues();
    } else if ((a1 == 0 && b1 == 0 && c1 == 0 && a2 == 0 && b2 == 0 && c2 != 0) || (a1 == 0 && b1 == 0 && c1 != 0 && a2 == 0 && b2 == 0 && c2 == 0)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system is a contradiction: it has no solutions</p>`;
        clearValues();
    } else if ((D == 0 && Dx != 0) || (D == 0 && Dy != 0)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system is a contradiction: it has no solutions</p>`;
        clearValues();
    } else if (D == 0 && Dx == 0 && Dy == 0) {
        if (a1 == 0 && b1 == 0 && c1 == 0 && a2 != 0 && b2 != 0 && c2 != 0) {
            (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions (x,y) = (k , ${
                c2 / b2
            } ${ - a2 / b2
            }k) k &#8714; R</p>`;
            clearValues();
        } else if (c1 == 0 && c2 == 0 && a1 / a2 == b1 / b2) {
            (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${ - a1 / b1
            }k) k &#8714; R</p>`;
            clearValues();
        } else if (a1 == 0 && a2 == 0 && b1 / b2 == c1 / c2) {
            (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${
                c1 / b1
            }) k &#8714; R</p>`;
            clearValues();
        } else if (b1 == 0 && b2 == 0 && a1 / a2 == c1 / c2) {
            (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system is a contradiction: it has no solutions</p>`;
            clearValues();
        } else {
            (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions (x,y) = (k , ${
                c1 / b1
            } ${ - a1 / b1
            }k) k &#8714; R</p>`;
            clearValues();
        }
    } else if (D != 0) {
        const x: number = Dx / D;
        const y: number = Dy / D;
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">The system has a single solution (x , y) = (${x} , ${y})</p>`;
        clearValues();
    }
});
