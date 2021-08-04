//sin
(<HTMLButtonElement>document.getElementById('sincalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('sina')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('sinout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('sina')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('sinout')).innerHTML = `<p class="text-success">sin(${angle}) = ${Math.sin(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('sina')).value = '';
    }
});
//cos
(<HTMLButtonElement>document.getElementById('coscalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('cosa')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('cosout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('cosa')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('cosout')).innerHTML = `<p class="text-success">cos(${angle}) = ${Math.cos(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('cosa')).value = '';
    }
});
//tan
(<HTMLButtonElement>document.getElementById('tancalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('tana')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('tanout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('tana')).value = '';
    } else if (angle === 90) {
        (<HTMLParagraphElement>document.getElementById('tanout')).innerHTML = `<p class="text-warning">The angle cannot be 90&#176;</p>`;
        (<HTMLInputElement>document.getElementById('tana')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('tanout')).innerHTML = `<p class="text-success">tan(${angle}) = ${Math.tan(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('tana')).value = '';
    }
});
//asin
(<HTMLButtonElement>document.getElementById('asincalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('asina')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('asinout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('asina')).value = '';
    } else if (angle > 1 || angle < -1) {
        (<HTMLParagraphElement>document.getElementById('asinout')).innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        (<HTMLInputElement>document.getElementById('asina')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('asinout')).innerHTML = `<p class="text-success">asin(${angle}) = ${Math.asin(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('asina')).value = '';
    }
});
//acos
(<HTMLButtonElement>document.getElementById('acoscalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('acosa')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('acosout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('acosa')).value = '';
    } else if (angle > 1 || angle < -1) {
        (<HTMLParagraphElement>document.getElementById('acosout')).innerHTML = `<p class="text-warning">The angle must be between -1 and 1</p>`;
        (<HTMLInputElement>document.getElementById('acosa')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('acosout')).innerHTML = `<p class="text-success">acos(${angle}) = ${Math.acos(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('acosa')).value = '';
    }
});
//atan
(<HTMLButtonElement>document.getElementById('atancalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('atana')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('atanout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('atana')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('atanout')).innerHTML = `<p class="text-success">atan(${angle}) = ${Math.atan(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('atana')).value = '';
    }
});
//sinh
(<HTMLButtonElement>document.getElementById('sinhcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('sinha')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('sinhout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('sinha')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('sinhout')).innerHTML = `<p class="text-success">sinh(${angle}) = ${Math.sinh(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('sinha')).value = '';
    }
});
//cosh
(<HTMLButtonElement>document.getElementById('coshcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('cosha')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('coshout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('cosha')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('coshout')).innerHTML = `<p class="text-success">cosh(${angle}) = ${Math.cosh(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('cosha')).value = '';
    }
});
//tanh
(<HTMLButtonElement>document.getElementById('tanhcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const angle: number = parseFloat((<HTMLInputElement>document.getElementById('tanha')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(angle)) {
        (<HTMLParagraphElement>document.getElementById('tanhout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('tanha')).value = '';
    } else {
        (<HTMLParagraphElement>document.getElementById('tanhout')).innerHTML = `<p class="text-success">tanh(${angle}) = ${Math.tanh(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('tanha')).value = '';
    }
});
