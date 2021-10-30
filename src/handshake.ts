(<HTMLButtonElement>document.querySelector('#calc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.querySelector('#n')).value)!;
    if (isNaN(n) || Math.floor(n) !== n) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else if (n < 0) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">The number of visitors must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-success">There have been ${(Math.pow(n, 2) - n) / 2} handshakes at that party</p>`;
        (<HTMLInputElement>document.querySelector('#n')).value = '';
    }
});