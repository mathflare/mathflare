(<HTMLButtonElement>document.querySelector('#gcdcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#gcda')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#gcdb')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (<HTMLParagraphElement>document.querySelector('#gcdout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#gcda')).value = '';
        (<HTMLInputElement>document.querySelector('#gcdb')).value = '';
    } else if (a !== Math.floor(a) || b !== Math.floor(b)) {
        if (a / b === Math.floor(a / b) || b / a === Math.floor(b / a)) {
            (<HTMLParagraphElement>document.querySelector('#gcdout')).innerHTML = `<p class="text-success">gcd(${a},${b}) = ${GCD(a, b)}</p>`;
            (<HTMLInputElement>document.querySelector('#gcda')).value = '';
            (<HTMLInputElement>document.querySelector('#gcdb')).value = '';
        } else {
            (<HTMLParagraphElement>document.querySelector('#gcdout')).innerHTML = `<p class="text-warning">There is no solution for gcd(${a},${b})</p>`;
            (<HTMLInputElement>document.querySelector('#gcda')).value = '';
            (<HTMLInputElement>document.querySelector('#gcdb')).value = '';
        }
    } else {
        (<HTMLParagraphElement>document.querySelector('#gcdout')).innerHTML = `<p class="text-success">gcd(${a},${b}) = ${GCD(a, b)}</p>`;
        (<HTMLInputElement>document.querySelector('#gcda')).value = '';
        (<HTMLInputElement>document.querySelector('#gcdb')).value = '';
    }
});