(<HTMLButtonElement>document.querySelector('#addfractcalc')).addEventListener('click', (event) => {
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
        (<HTMLParagraphElement>document.querySelector('#addfractout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(x) !== x || Math.floor(y) !== y || Math.floor(a) !== a || Math.floor(b) !== b) {
        (<HTMLParagraphElement>document.querySelector('#addfractout')).innerHTML = `<p class="text-warning">All numbers must be integers</p>`;
        clearValues();
    } else {
        const result: number[][] = addFractions(x, y, a, b);
        (<HTMLParagraphElement>document.querySelector('#addfractout')).innerHTML = `${reduceFraction(result[0][0], result[0][1])}`;
        clearValues();
    }
});