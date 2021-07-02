(<HTMLButtonElement>document.getElementById('dxcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.getElementById('dxa')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.getElementById('dxb')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('dxa')).value = "";
        (<HTMLInputElement>document.getElementById('dxb')).value = "";
    } else {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-success">Dx = ${b - a}</p>`;
        (<HTMLInputElement>document.getElementById('dxa')).value = "";
        (<HTMLInputElement>document.getElementById('dxb')).value = "";
    }
});
(<HTMLButtonElement>document.getElementById('scalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.getElementById('sa')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.getElementById('sb')).value)!;
    if (isNaN(a) || isNaN(b)) {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('sa')).value = "";
        (<HTMLInputElement>document.getElementById('sb')).value = "";
    } else if (a > b) {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-success">S = ${a - b}</p>`;
        (<HTMLInputElement>document.getElementById('sa')).value = "";
        (<HTMLInputElement>document.getElementById('sb')).value = "";
    } else {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-success">S = ${b - a}</p>`;
        (<HTMLInputElement>document.getElementById('sa')).value = "";
        (<HTMLInputElement>document.getElementById('sb')).value = "";
    }
});