(<HTMLButtonElement>document.querySelector('#calc')).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.querySelector('#n')).value)!;
    if (isNaN(n) || Math.floor(n) !== n) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else if (n <= 0) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">Your number must be positive</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else if (n % 2 != 0) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-success">${Math.floor(Math.abs(n) / 2)} pairs of numbers and ${Math.abs(n) % 2} non pair number, his position ${(Math.abs(n) + 1) / 2}</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-success">${Math.abs(n) / 2} pairs of numbers and ${Math.abs(n) % 2} non pair numbers</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    }
});