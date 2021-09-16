(<HTMLButtonElement>document.querySelector('#gcdcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#gcda')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#gcdb')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (<HTMLParagraphElement>document.querySelector('#gcdout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#gcda')).value = '';
        (<HTMLInputElement>document.querySelector('#gcdb')).value = '';
    } else if (a < 0 || b < 0) {
        (<HTMLParagraphElement>document.querySelector('#gcdout')).innerHTML = `<p class="text-warning">Both values must be greater that zero</p>`;
        (<HTMLInputElement>document.querySelector('#gcda')).value = '';
        (<HTMLInputElement>document.querySelector('#gcdb')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#gcdout')).innerHTML = `<p class="text-success">gcd(${a},${b}) = ${GCD(a, b)}</p>`;
        (<HTMLInputElement>document.querySelector('#gcda')).value = '';
        (<HTMLInputElement>document.querySelector('#gcdb')).value = '';
    }
});