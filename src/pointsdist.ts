//copyrights (c) 2021 MathFlare Co Ltd. All rights reserved.
(<HTMLButtonElement>document.getElementById('distcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const x1: number = parseFloat((<HTMLInputElement>document.getElementById('x1')).value)!;
    const y1: number = parseFloat((<HTMLInputElement>document.getElementById('y1')).value)!;
    const x2: number = parseFloat((<HTMLInputElement>document.getElementById('x2')).value)!;
    const y2: number = parseFloat((<HTMLInputElement>document.getElementById('y2')).value)!;
    const clearValues = () => {
        (<HTMLInputElement>document.getElementById('x1')).value = '';
        (<HTMLInputElement>document.getElementById('y1')).value = '';
        (<HTMLInputElement>document.getElementById('x2')).value = '';
        (<HTMLInputElement>document.getElementById('y2')).value = '';
    }
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success">The distance between (${x1},${y1}) and (${x2},${y2}) is ${Math.sqrt(Math.pow(x2 - x1, 2)+Math.pow(y2 - y1, 2))}m</p>`;
        clearValues();
    }
});
//copyrights (c) 2021 MathFlare Co. Ltd. All rights reserved.