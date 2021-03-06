(<HTMLButtonElement>document.querySelector('#sqrtcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.querySelector('#sqrtrad')).value)!;
    if (isNaN(num)) {
        (<HTMLParagraphElement>document.querySelector('#sqrtout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (num < 0) {
        (<HTMLParagraphElement>document.querySelector('#sqrtout')).innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
    } else {
        if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) {
            (<HTMLParagraphElement>document.querySelector('#sqrtout')).innerHTML = `<p class="text-success">&#8730;${num} = ${Math.sqrt(num)}</p>`;
        } else {
            (<HTMLParagraphElement>document.querySelector('#sqrtout')).innerHTML = `<p class="text-success">&#8730;${num} = ${Math.sqrt(num)} (&#8764; ${Math.sqrt(num).toFixed(3)})</p>`;
            
        }
    }
});