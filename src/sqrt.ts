(<HTMLButtonElement> document.getElementById('button')).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((< HTMLInputElement > document.getElementById('number')).value)!;
    if (isNaN(num)) {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
    } else if (num < 0) {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
    } else {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success">&#8730;${num} = ${Math.sqrt(num)} (&#8764; ${Math.sqrt(num).toFixed(3)})</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
    }
});