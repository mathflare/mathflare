//copyright (c) 2021 MathFlare LLC.
(<HTMLButtonElement>document.querySelector('#button')).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.querySelector('#number')).value)!;
    if (isNaN(num)) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#number')).value = "";
    } else if (num < 0 || !(Math.floor(num) == num)) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The number must be a natural number (>0 and not decimal)</p>`;
        (<HTMLInputElement>document.querySelector('#number')).value = "";
    } else if (num >= 170) { //above 170 is infinity anyways so why waste resources in calculating it.
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The number is too large!</p>`;
        (<HTMLInputElement>document.querySelector('#number')).value = "";
    } else {
        let f: number = 1;
        for (let i = 1; i <= num; i++) {
            f *= i;
        }
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success text-break">${num}! = ${f.toLocaleString('en')}</p>`;
        (<HTMLInputElement>document.querySelector('#number')).value = "";
    }
});