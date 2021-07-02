//copyright (c) 2021 MathFlare LLC.
(<HTMLButtonElement>document.getElementById('button')).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.getElementById('number')).value)!;
    if (isNaN(num)) {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('number')).value = "";
    } else if (num < 0 || !(Math.floor(num) == num)) {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">The number must be a natural number (>0 and not decimal)</p>`;
        (<HTMLInputElement>document.getElementById('number')).value = "";
    } else if (num >= 170) { //above 170 is infinity anyways so why waste resources in calculating it.
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">The number is too large!</p>`;
        (<HTMLInputElement>document.getElementById('number')).value = "";
    } else {
        let f: number = 1;
        for (let i = 1; i <= num; i++) {
            f = f * i;
        }
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-success">${num}! = ${f}</p>`;
        (<HTMLInputElement>document.getElementById('number')).value = "";
    }
});