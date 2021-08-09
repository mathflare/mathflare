(<HTMLButtonElement>document.getElementById('cbrtcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.getElementById('cbrtrad')).value)!;
    if (isNaN(num)) {
        (<HTMLParagraphElement>document.getElementById('cbrtout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('cbrtrad')).value = "";
    } else if (num < 0) {
        (<HTMLParagraphElement>document.getElementById('cbrtout')).innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        (<HTMLInputElement>document.getElementById('cbrtrad')).value = "";
    } else {
        if (Math.cbrt(num) === Math.floor(Math.cbrt(num))) {
            (<HTMLParagraphElement>document.getElementById('cbrtout')).innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)}</p>`;
            (<HTMLInputElement>document.getElementById('cbrtrad')).value = "";
        }else {
            (<HTMLParagraphElement>document.getElementById('cbrtout')).innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)} (&#8764; ${Math.cbrt(num).toFixed(3)})</p>`;
            (<HTMLInputElement>document.getElementById('cbrtrad')).value = "";
        }
    }
});