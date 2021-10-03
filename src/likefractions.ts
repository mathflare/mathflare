(<HTMLButtonElement>document.querySelector('#likefractcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const x: number = parseFloat((<HTMLInputElement>document.querySelector('#x')).value)!;
    const y: number = parseFloat((<HTMLInputElement>document.querySelector('#y')).value)!;
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#b')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x')).value = '';
        (<HTMLInputElement>document.querySelector('#y')).value = '';
        (<HTMLInputElement>document.querySelector('#a')).value = '';
        (<HTMLInputElement>document.querySelector('#b')).value = '';
    };
    if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b)) {
        (<HTMLParagraphElement>document.querySelector('#likefractout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(x) !== x || Math.floor(y) !== y || Math.floor(a) !== a || Math.floor(b) !== b) {
        (<HTMLParagraphElement>document.querySelector('#likefractout')).innerHTML = `<p class="text-warning">All numbers must be integers</p>`;
        clearValues();
    } else if (y === 0 || b === 0) {
        (<HTMLParagraphElement>document.querySelector('#likefractout')).innerHTML = `<p class="text-warning">The value of y and b cannot be 0</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#likefractout')).innerHTML = `${likeToUnlike(x, y, a, b)}`;
        clearValues();
    }
});