(<HTMLButtonElement>document.querySelector('#cbrtcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.querySelector('#cbrtrad')).value)!;
    if (isNaN(num)) {
        (<HTMLParagraphElement>document.querySelector('#cbrtout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (num < 0) {
        (<HTMLParagraphElement>document.querySelector('#cbrtout')).innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
    } else {
        if (Math.cbrt(num) === Math.floor(Math.cbrt(num))) {
            (<HTMLParagraphElement>document.querySelector('#cbrtout')).innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)}</p>`;
        } else {
            (<HTMLParagraphElement>document.querySelector('#cbrtout')).innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)} (&#8764; ${Math.cbrt(num).toFixed(3)})</p>`;
        }
    }
});