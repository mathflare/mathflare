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
    } else {
        (<HTMLParagraphElement>document.getElementById('tanout')).innerHTML = `<p class="text-success">tan(${angle}) = ${Math.tan(degreesToRadians(angle))}</p>`;
        (<HTMLInputElement>document.getElementById('tana')).value = '';
    }
});