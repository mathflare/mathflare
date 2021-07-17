//Δx
(<HTMLButtonElement>document.getElementById('dxcalc1')).addEventListener('click', (event) => {
    event.preventDefault();
    const v: number = parseFloat((<HTMLInputElement>document.getElementById('v1')).value)!;
    const dt: number = parseFloat((<HTMLInputElement>document.getElementById('dt1')).value)!;
    const clearValues = () => {
        (<HTMLInputElement>document.getElementById('v1')).value = '';
        (<HTMLInputElement>document.getElementById('dt1')).value = '';
    }
    if (isNaN(v) || isNaN(dt)) {
        (<HTMLParagraphElement>document.getElementById('dxout1')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (dt <= 0) {
        (<HTMLParagraphElement>document.getElementById('dxout1')).innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.getElementById('dxout1')).innerHTML = `<p class="text-success">Δx = ${v * dt}</p>`;
        clearValues();
    }
});
//Δt
(<HTMLButtonElement>document.getElementById('dtcalc2')).addEventListener('click', (event) => {
    event.preventDefault();
    const v: number = parseFloat((<HTMLInputElement>document.getElementById('v2')).value)!;
    const dx: number = parseFloat((<HTMLInputElement>document.getElementById('dx2')).value)!;
    const clearValues = () => {
        (<HTMLInputElement>document.getElementById('v2')).value = '';
        (<HTMLInputElement>document.getElementById('dx2')).value = '';
    }
    if (isNaN(v) || isNaN(dx)) {
        (<HTMLParagraphElement>document.getElementById('dtout2')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (dx <= 0) {
        (<HTMLParagraphElement>document.getElementById('dtout2')).innerHTML = `<p class="text-warning">The Δx must be a positive number</p>`;
        clearValues();
    } else if (v === 0) {
        (<HTMLParagraphElement>document.getElementById('dtout2')).innerHTML = `<p class="text-warning">The speed cannot be 0</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.getElementById('dtout2')).innerHTML = `<p class="text-success">Δt = ${dx / v}</p>`;
        clearValues();
    }
});
//v
(<HTMLButtonElement>document.getElementById('vcalc3')).addEventListener('click', (event) => {
    event.preventDefault();
    const dx: number = parseFloat((<HTMLInputElement>document.getElementById('dx3')).value)!;
    const dt: number = parseFloat((<HTMLInputElement>document.getElementById('dt3')).value)!;
    const clearValues = () => {
        (<HTMLInputElement>document.getElementById('dx3')).value = '';
        (<HTMLInputElement>document.getElementById('dt3')).value = '';
    }
    if (isNaN(dt) || isNaN(dx)) {
        (<HTMLParagraphElement>document.getElementById('vout3')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (dt <= 0) {
        (<HTMLParagraphElement>document.getElementById('vout3')).innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.getElementById('vout3')).innerHTML = `<p class="text-success">v = ${dx / dt}</p>`;
        clearValues();
    }
});