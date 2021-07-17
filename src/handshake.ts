(<HTMLButtonElement>document.getElementById('calc')).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.getElementById('n')).value)!;
    if (isNaN(n) || Math.floor(n) !== n) {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('n')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success">There have been ${(Math.pow(n, 2) - n) / 2} handshakes at that party</p>`;
        (<HTMLInputElement>document.getElementById('n')).value = '';
    }
});