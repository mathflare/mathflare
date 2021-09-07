(<HTMLButtonElement>document.querySelector('#reductioncalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const x: number = parseFloat((<HTMLInputElement>document.querySelector('#x')).value)!;
    const y: number = parseFloat((<HTMLInputElement>document.querySelector('#y')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x')).value = '';
        (<HTMLInputElement>document.querySelector('#y')).value = '';
    };
    if (isNaN(x) || isNaN(y)) {
        (<HTMLParagraphElement>document.querySelector('#reductionout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#reductionout')).innerHTML = `${reduceFraction(x, y)}`;
        clearValues();
    }
});