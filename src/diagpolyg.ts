(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((< HTMLInputElement > document.getElementById('vertex')).value)!;
    if (isNaN(n) || !(Math.floor(n) == n)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('vertex')).value = "";
    } 
    else if (n <= 2) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">There is no polygon with less than 3 segments</p>`;
        (< HTMLInputElement > document.getElementById('vertex')).value = "";
    } else if (n == 3) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this triangle is ${(n * (n - 3)) / 2}</p>`;
        (< HTMLInputElement > document.getElementById('vertex')).value = "";
    } else if (n == 4) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this parallelogram is ${(n * (n - 3)) / 2}</p>`;
        (< HTMLInputElement > document.getElementById('vertex')).value = "";
    } else {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this convex ${n}-gon is ${(n * (n - 3)) / 2}</p>`;
        (< HTMLInputElement > document.getElementById('vertex')).value = "";
    }
});

(document.getElementById('button2')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((< HTMLInputElement > document.getElementById('sside')).value)!;
    if (isNaN(n)) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('sside')).value = "";
    } 
    else if (n <= 0) {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (< HTMLInputElement > document.getElementById('sside')).value = "";
    }
    else {
        (document.getElementById('output2')as HTMLElement).innerHTML = `<p class="text-success">The lenght of the diagonal is D = ${n * Math.sqrt(2)}cm (&#8764; ${(n * Math.sqrt(2)).toFixed(3)})</p>`;
        (< HTMLInputElement > document.getElementById('sside')).value = "";
    }
});