//copyrights (c) 2021 MathFlare LLC. All rights reserved.
(document.querySelector('#button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((< HTMLInputElement > document.querySelector('#num1')).value)!;
    const den: number = parseFloat((< HTMLInputElement > document.querySelector('#den1')).value)!;
    if (isNaN(num) || isNaN(den)) {
        (document.querySelector('#output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#num1')).value = "";
        (< HTMLInputElement > document.querySelector('#den1')).value = "";
    } else if (den == 0) {
        (document.querySelector('#output')as HTMLElement).innerHTML = `<p class="text-warning">The denominator cannot be 0</p>`;
        (< HTMLInputElement > document.querySelector('#num1')).value = "";
        (< HTMLInputElement > document.querySelector('#den1')).value = "";
    } else {
        (document.querySelector('#output')as HTMLElement).innerHTML = `<p class="text-success"><sup>${num}</sup>&frasl;<sub>${den}</sub> = ${
            (num / den) * 100
        }&#37;</p>`;
        (< HTMLInputElement > document.querySelector('#num1')).value = "";
        (< HTMLInputElement > document.querySelector('#den1')).value = "";
    }
});

(document.querySelector('#button2')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const per: number = parseFloat((< HTMLInputElement > document.querySelector('#per2')).value)!;
    const num2: number = parseFloat((< HTMLInputElement > document.querySelector('#num2')).value)!;
    if (isNaN(per) || isNaN(num2) || num2 == 0) {
        (document.querySelector('#output2')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#per2')).value = "";
        (< HTMLInputElement > document.querySelector('#num2')).value = "";
    } else {
        (document.querySelector('#output2')as HTMLElement).innerHTML = `<p class="text-success">${per}&#37; of ${num2} = ${
            (per / 100) * num2
        }</p>`;
        (< HTMLInputElement > document.querySelector('#per2')).value = "";
        (< HTMLInputElement > document.querySelector('#num2')).value = "";
    }
});

(document.querySelector('#button3')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const init: number = parseFloat((< HTMLInputElement > document.querySelector('#init3')).value)!;
    const fin: number = parseFloat((< HTMLInputElement > document.querySelector('#fin3')).value)!;
    if (isNaN(init) || isNaN(fin) || init == 0) {
        (document.querySelector('#output3')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#init3')).value = "";
        (< HTMLInputElement > document.querySelector('#fin3')).value = "";
    } else {
        const result: number = ((fin - init) / init) * 100
        if (result == 0) {
            (document.querySelector('#output3')as HTMLElement).innerHTML = `<p class="text-warning">There is no increase/decrease between ${init} and ${fin}</p>`;
            (< HTMLInputElement > document.querySelector('#init3')).value = "";
            (< HTMLInputElement > document.querySelector('#fin3')).value = "";
        } else if (result < 0) {
            (document.querySelector('#output3')as HTMLElement).innerHTML = `<p class="text-success">The percentage of the decrease from ${init} to ${fin} is ${result}&#37;</p>`;
            (< HTMLInputElement > document.querySelector('#init3')).value = "";
            (< HTMLInputElement > document.querySelector('#fin3')).value = "";
        } else if (result > 0) {
            (document.querySelector('#output3')as HTMLElement).innerHTML = `<p class="text-success">The percentage of the increase from ${init} to ${fin} is ${result}&#37;</p>`;
            (< HTMLInputElement > document.querySelector('#init3')).value = "";
            (< HTMLInputElement > document.querySelector('#fin3')).value = "";
        }
    }
});

(document.querySelector('#button4')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const userSelect: string = (< HTMLSelectElement > document.querySelector('#select')).value !;
    const init: number = parseFloat((< HTMLInputElement > document.querySelector('#init4')).value)!;
    const disc: number = parseFloat((< HTMLInputElement > document.querySelector('#disc4')).value)!;
    if (userSelect == "inc") {
        if (isNaN(init) || isNaN(disc)) {
            (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            (< HTMLInputElement > document.querySelector('#init4')).value = "";
            (< HTMLInputElement > document.querySelector('#disc4')).value = "";
        } else if (disc == 0) {
            (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-warning">There is no increse between ${init} and ${init}</p>`;
            (< HTMLInputElement > document.querySelector('#init4')).value = "";
            (< HTMLInputElement > document.querySelector('#disc4')).value = "";
        } else {
            (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-success">The final value is ${(init * disc / 100) + init}</p>`;
            (< HTMLInputElement > document.querySelector('#init4')).value = "";
            (< HTMLInputElement > document.querySelector('#disc4')).value = "";
        }
    } else if (userSelect == "dec") {
        if (isNaN(init) || isNaN(disc)) {
            (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            (< HTMLInputElement > document.querySelector('#init4')).value = "";
            (< HTMLInputElement > document.querySelector('#disc4')).value = "";
        } else if (disc == 0) {
            (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-warning">There is no decrease between ${init} and ${init}</p>`;
            (< HTMLInputElement > document.querySelector('#init4')).value = "";
            (< HTMLInputElement > document.querySelector('#disc4')).value = "";
        } else {
            (document.querySelector('#output4')as HTMLElement).innerHTML = `<p class="text-success">The final value is ${init - (init * disc / 100)}</p>`;
            (< HTMLInputElement > document.querySelector('#init4')).value = "";
            (< HTMLInputElement > document.querySelector('#disc4')).value = "";
        }
    }
});

(document.querySelector('#button5')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const userSelect: string = (< HTMLSelectElement > document.querySelector('#select2')).value !;
    const fin: number = parseFloat((< HTMLInputElement > document.querySelector('#fin5')).value)!;
    const disc: number = parseFloat((< HTMLInputElement > document.querySelector('#disc5')).value)!;
    if (userSelect == "inc") {
        if (isNaN(fin) || isNaN(disc)) {
            (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            (< HTMLInputElement > document.querySelector('#fin5')).value = "";
            (< HTMLInputElement > document.querySelector('#disc5')).value = "";
        } else if (disc == 0) {
            (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-warning">There is no increse between ${fin} and ${fin}</p>`;
            (< HTMLInputElement > document.querySelector('#fin5')).value = "";
            (< HTMLInputElement > document.querySelector('#disc5')).value = "";
        } else {
            (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-success">The initial value is ${fin / (1 + disc / 100)}</p>`;
            (< HTMLInputElement > document.querySelector('#fin5')).value = "";
            (< HTMLInputElement > document.querySelector('#disc5')).value = "";
        }
    } else if (userSelect == "dec") {
        if (isNaN(fin) || isNaN(disc)) {
            (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            (< HTMLInputElement > document.querySelector('#fin5')).value = "";
            (< HTMLInputElement > document.querySelector('#disc5')).value = "";
        } else if (disc == 0) {
            (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-warning">There is no decrease between ${fin} and ${fin}</p>`;
            (< HTMLInputElement > document.querySelector('#fin5')).value = "";
            (< HTMLInputElement > document.querySelector('#disc5')).value = "";
        } else {
            (document.querySelector('#output5')as HTMLElement).innerHTML = `<p class="text-success">The initial value is ${fin / (1 - disc / 100)}</p>`;
            (< HTMLInputElement > document.querySelector('#fin5')).value = "";
            (< HTMLInputElement > document.querySelector('#disc5')).value = "";
        }
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.