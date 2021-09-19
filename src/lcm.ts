(<HTMLButtonElement>document.querySelector('#lcmcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#lcma')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#lcmb')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (<HTMLParagraphElement>document.querySelector('#lcmout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#lcma')).value = '';
        (<HTMLInputElement>document.querySelector('#lcmb')).value = '';
    } else if (a !== Math.floor(a) || b !== Math.floor(b)) {
        if (a / b === Math.floor(a / b) || b / a === Math.floor(b / a)) {
            (<HTMLParagraphElement>document.querySelector('#lcmout')).innerHTML = `<p class="text-success">lcm(${a},${b}) = ${LCM(a, b)}</p>`;
            (<HTMLInputElement>document.querySelector('#lcma')).value = '';
            (<HTMLInputElement>document.querySelector('#lcmb')).value = '';
        } else {
            (<HTMLParagraphElement>document.querySelector('#lcmout')).innerHTML = `<p class="text-warning">There is no solution for lcm(${a},${b})</p>`;
            (<HTMLInputElement>document.querySelector('#lcma')).value = '';
            (<HTMLInputElement>document.querySelector('#lcmb')).value = '';
        }
    } else {
        (<HTMLParagraphElement>document.querySelector('#lcmout')).innerHTML = `<p class="text-success">lcm(${a},${b}) = ${LCM(a, b)}</p>`;
        (<HTMLInputElement>document.querySelector('#lcma')).value = '';
        (<HTMLInputElement>document.querySelector('#lcmb')).value = '';
    }
});