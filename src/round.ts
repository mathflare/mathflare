(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((< HTMLInputElement > document.getElementById('num')).value)!;
    const userSelect: string = (< HTMLSelectElement > document.getElementById('select')).value !;
    if (isNaN(num)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('num')).value = "";
    } else {
        if (userSelect == "tofixed") {
            if (Number.isInteger(num)) {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            } else {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">${num} rounded to the 3<sup>rd</sup> decimal digit is ${
                    num.toFixed(3)
                } </p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            }
        } else if (userSelect == "round") {
            if (Math.round(num) == num) {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            } else {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">${num} rounded to the nearest integer is ${
                    Math.round(num)
                }</p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            }
        } else if (userSelect == "ceil") {
            if (Math.ceil(num) == num) {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            } else {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">${num} rounded a number up to the next largest integer is ${
                    Math.ceil(num)
                }</p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            }
        } else if (userSelect == "floor") {
            if (Math.floor(num) == num) {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            } else {
                (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">the largest integer less than or equal to ${num} is ${
                    Math.floor(num)
                }</p>`;
                (< HTMLInputElement > document.getElementById('num')).value = "";
            }
        }
    }
});
