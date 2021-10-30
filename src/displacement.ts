//Δx
(<HTMLButtonElement>document.querySelector('#dxcalc1')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const v: number = parseFloat((<HTMLInputElement>document.querySelector('#v1')).value)!;
    const dt: number = parseFloat((<HTMLInputElement>document.querySelector('#dt1')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#v1')).value = '';
        (<HTMLInputElement>document.querySelector('#dt1')).value = '';
    }
    if (isNaN(v) || isNaN(dt)) {
        (<HTMLParagraphElement>document.querySelector('#dxout1')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (dt < 0) {
        (<HTMLParagraphElement>document.querySelector('#dxout1')).innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#dxout1')).innerHTML = `<p class="text-success">Δx = ${v * dt}</p>`;
        clearValues();
    }
});
//Δt
(<HTMLButtonElement>document.querySelector('#dtcalc2')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const v: number = parseFloat((<HTMLInputElement>document.querySelector('#v2')).value)!;
    const dx: number = parseFloat((<HTMLInputElement>document.querySelector('#dx2')).value)!;
    const clearValues = () => {
        (<HTMLInputElement>document.querySelector('#v2')).value = '';
        (<HTMLInputElement>document.querySelector('#dx2')).value = '';
    }
    if (isNaN(v) || isNaN(dx)) {
        (<HTMLParagraphElement>document.querySelector('#dtout2')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (dx === 0 && v !== 0) {
        (<HTMLParagraphElement>document.querySelector('#dtout2')).innerHTML = `<p class="text-warning">The Δt cannot be calculated with this formula</p>`;
        clearValues();
    } else if (v === 0) {
        if (dx !== 0) {
            (<HTMLParagraphElement>document.querySelector('#dtout2')).innerHTML = `<p class="text-warning">The speed cannot be 0 when the Δx is not 0</p>`;
            clearValues();
        } else {
            (<HTMLParagraphElement>document.querySelector('#dtout2')).innerHTML = `<p class="text-warning">The Δt cannot be calculated with this formula</p>`;
            clearValues();
        }
    } else if (dx < 0) {
        if (dx < 0 && v > 0) {
            (<HTMLParagraphElement>document.querySelector('#dtout2')).innerHTML = `<p class="text-warning">The Δx must be a positive number</p>`;
            clearValues();
        }
        else {
            (<HTMLParagraphElement>document.querySelector('#dtout2')).innerHTML = `<p class="text-success">Δt = ${dx / v}</p>`;
            clearValues();
        }
    } else {
        (<HTMLParagraphElement>document.querySelector('#dtout2')).innerHTML = `<p class="text-success">Δt = ${dx / v}</p>`;
        clearValues();
    }
});
//v
(<HTMLButtonElement>document.querySelector('#vcalc3')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const dx: number = parseFloat((<HTMLInputElement>document.querySelector('#dx3')).value)!;
    const dt: number = parseFloat((<HTMLInputElement>document.querySelector('#dt3')).value)!;
    const clearValues = () => {
        (<HTMLInputElement>document.querySelector('#dx3')).value = '';
        (<HTMLInputElement>document.querySelector('#dt3')).value = '';
    }
    if (isNaN(dt) || isNaN(dx)) {
        (<HTMLParagraphElement>document.querySelector('#vout3')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (dt <= 0) {
        (<HTMLParagraphElement>document.querySelector('#vout3')).innerHTML = `<p class="text-warning">The Δt must be a positive number</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#vout3')).innerHTML = `<p class="text-success">v = ${dx / dt}</p>`;
        clearValues();
    }
});