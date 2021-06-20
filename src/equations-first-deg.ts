// x + y = z
(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const y: number = parseFloat((< HTMLInputElement > document.getElementById('y')).value)!;
    const z: number = parseFloat((< HTMLInputElement > document.getElementById('z')).value)!;
    if (isNaN(y) || isNaN(z)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('y')).value = "";
        (< HTMLInputElement > document.getElementById('z')).value = "";
    } else {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">X = ${
            z - y
        }</p>`;
        (< HTMLInputElement > document.getElementById('y')).value = "";
        (< HTMLInputElement > document.getElementById('z')).value = "";
    }
});
// x - y = z
(document.getElementById('button2')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const y: number = parseFloat((< HTMLInputElement > document.getElementById('y2')).value)!;
    const z: number = parseFloat((< HTMLInputElement > document.getElementById('z2')).value)!;
    if (isNaN(y) || isNaN(z)) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('y2')).value = "";
        (< HTMLInputElement > document.getElementById('z2')).value = "";
    } else {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-success">X = ${
            z + y
        }</p>`;
        (< HTMLInputElement > document.getElementById('y2')).value = "";
        (< HTMLInputElement > document.getElementById('z2')).value = "";
    }
});
// xy = z
(document.getElementById('button3')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const y: number = parseFloat((< HTMLInputElement > document.getElementById('y3')).value)!;
    const z: number = parseFloat((< HTMLInputElement > document.getElementById('z3')).value)!;
    if (isNaN(y) || isNaN(z)) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('y3')).value = "";
        (< HTMLInputElement > document.getElementById('z3')).value = "";
    } else if (y == 0 && z == 0) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        (< HTMLInputElement > document.getElementById('y3')).value = "";
        (< HTMLInputElement > document.getElementById('z3')).value = "";
    } else if ((z / y) == Number.POSITIVE_INFINITY || (z / y) == Number.NEGATIVE_INFINITY) {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-warning">The equation is a contradiction: it has no solutions</p>`;
        (< HTMLInputElement > document.getElementById('y3')).value = "";
        (< HTMLInputElement > document.getElementById('z3')).value = "";
    } else {
        (document.getElementById('output3')as HTMLElement).innerHTML = `<p class="text-success">X = ${
            z / y
        }</p>`;
        (< HTMLInputElement > document.getElementById('y3')).value = "";
        (< HTMLInputElement > document.getElementById('z3')).value = "";
    }
});
