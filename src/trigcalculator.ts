//sin
(<HTMLButtonElement>document.querySelector('#sincalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#sina')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#sinout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#sina')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#sinout')).innerHTML = `<p class="text-success">sin(${angle}) = ${Math.sin(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#sina')).value = '';
    }
});
//cos
(<HTMLButtonElement>document.querySelector('#coscalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#cosa')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#cosout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#cosa')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#cosout')).innerHTML = `<p class="text-success">cos(${angle}) = ${Math.cos(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#cosa')).value = '';
    }
});
//tan
(<HTMLButtonElement>document.querySelector('#tancalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#tana')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#tanout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#tana')).value = '';
    } else if (angle === 90) {
        (<HTMLParagraphElement>document.querySelector('#tanout')).innerHTML = `<p class="text-warning">The angle cannot be 90&#176;</p>`;
        (<HTMLInputElement>document.querySelector('#tana')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#tanout')).innerHTML = `<p class="text-success">tan(${angle}) = ${Math.tan(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#tana')).value = '';
    }
});
//asin
(<HTMLButtonElement>document.querySelector('#asincalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#asina')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#asinout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#asina')).value = '';
    } else if (angle > 1 || angle < -1) {
        (<HTMLParagraphElement>document.querySelector('#asinout')).innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        (<HTMLInputElement>document.querySelector('#asina')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#asinout')).innerHTML = `<p class="text-success">asin(${angle}) = ${Math.asin(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#asina')).value = '';
    }
});
//acos
(<HTMLButtonElement>document.querySelector('#acoscalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#acosa')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#acosout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#acosa')).value = '';
    } else if (angle > 1 || angle < -1) {
        (<HTMLParagraphElement>document.querySelector('#acosout')).innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        (<HTMLInputElement>document.querySelector('#acosa')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#acosout')).innerHTML = `<p class="text-success">acos(${angle}) = ${Math.acos(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#acosa')).value = '';
    }
});
//atan
(<HTMLButtonElement>document.querySelector('#atancalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#atana')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#atanout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#atana')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#atanout')).innerHTML = `<p class="text-success">atan(${angle}) = ${Math.atan(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#atana')).value = '';
    }
});
//sinh
(<HTMLButtonElement>document.querySelector('#sinhcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#sinha')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#sinhout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#sinha')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#sinhout')).innerHTML = `<p class="text-success">sinh(${angle}) = ${Math.sinh(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#sinha')).value = '';
    }
});
//cosh
(<HTMLButtonElement>document.querySelector('#coshcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#cosha')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#coshout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#cosha')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#coshout')).innerHTML = `<p class="text-success">cosh(${angle}) = ${Math.cosh(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#cosha')).value = '';
    }
});
//tanh
(<HTMLButtonElement>document.querySelector('#tanhcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.querySelector('#tanha')).value)!;
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.querySelector('#tanhout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#tanha')).value = '';
    } else {
        (<HTMLParagraphElement>document.querySelector('#tanhout')).innerHTML = `<p class="text-success">tanh(${angle}) = ${Math.tanh(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.querySelector('#tanha')).value = '';
    }
});
