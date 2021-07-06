(<HTMLButtonElement>document.getElementById('dxcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const u: number = parseFloat((<HTMLInputElement>document.getElementById('u')).value)!;
    const dt: number = parseFloat((<HTMLInputElement>document.getElementById('dt')).value)!;
    if (isNaN(u) || isNaN(dt)) {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('u')).value = "";
        (<HTMLInputElement>document.getElementById('dt')).value = "";
    } else if (u <= 0) {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-warning">The speed must be a positive number</p>`;
        (<HTMLInputElement>document.getElementById('u')).value = "";
        (<HTMLInputElement>document.getElementById('dt')).value = "";
    } else if (dt <= 0) {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-warning">Δt must be a positive number</p>`;
        (<HTMLInputElement>document.getElementById('u')).value = "";
        (<HTMLInputElement>document.getElementById('dt')).value = "";
    } else {
        (<HTMLParagraphElement>document.getElementById('dxout')).innerHTML = `<p class="text-success">Δx = ${u * dt}</p>`;
        (<HTMLInputElement>document.getElementById('u')).value = "";
        (<HTMLInputElement>document.getElementById('dt')).value = "";
    }
});