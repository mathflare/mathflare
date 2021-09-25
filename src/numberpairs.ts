(<HTMLButtonElement>document.querySelector('#numpairscalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.querySelector('#n')).value)!;
    if (isNaN(n)) {
        (<HTMLParagraphElement>document.querySelector('#numpairsout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else if (n <= 0 || Math.floor(n) !== n) {
        (<HTMLParagraphElement>document.querySelector('#numpairsout')).innerHTML = `<p class="text-warning">the value must be a positive integer</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else if (n % 2 != 0) {
        (<HTMLParagraphElement>document.querySelector('#numpairsout')).innerHTML = `<p class="text-success">There are ${Math.floor(Math.abs(n) / 2)} pairs of numbers with 1 extra number(position: ${(Math.abs(n) + 1) / 2})</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#numpairsout')).innerHTML = `<p class="text-success">There are ${Math.abs(n) / 2} pairs of numbers with 0 extra numbers</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    }
});