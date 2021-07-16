(<HTMLButtonElement>document.getElementById('slopecalc')).addEventListener('click', (event) => {
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
    } else if (x1 === x2 && y1 === y2) {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">The 2 points must have different coordinates</p>`;
        clearValues();
    } else if (x1 === x2) {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">The slope cannot be calculated between the points (${x1},${y1}) and (${x2},${y2}): they belong to a vertical line</p>`;
        clearValues();
    }
    else {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success">The slope is ${(y2 - y1) / (x2 - x1)}m</p>`;
        clearValues();
    }
});