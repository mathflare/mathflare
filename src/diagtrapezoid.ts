//copyrights (c) 2021 MathFlare LLC. All rights reserved.
//using sides and angle
(<HTMLButtonElement>document.querySelector('#trapcalc1')).addEventListener('click', (event) => {
    event.preventDefault();
    const clearValues = () => {
        (<HTMLInputElement>document.querySelector('#trapl1')).value = '';
        (<HTMLInputElement>document.querySelector('#trapleg1')).value = '';
        (<HTMLInputElement>document.querySelector('#trapβ1')).value = '';
    }
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    const lside: number = parseFloat((<HTMLInputElement>document.querySelector('#trapl1')).value)!;
    const leg: number = parseFloat((<HTMLInputElement>document.querySelector('#trapleg1')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#trapβ1')).value)!;
    if (isNaN(lside) || isNaN(leg) || isNaN(b)) {
        (<HTMLParagraphElement>document.querySelector('#trapout1')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (lside <= 0 || leg <= 0 || b <= 0) {
        if (lside <= 0) {
            (<HTMLParagraphElement>document.querySelector('#trapout1')).innerHTML = `<p class="text-warning">The large segment must be a positive number</p>`;
            clearValues();
        } else if (leg <= 0) {
            (<HTMLParagraphElement>document.querySelector('#trapout1')).innerHTML = `<p class="text-warning">The leg must be a positive number</p>`;
            clearValues();
        } else if (b <= 0) {
            (<HTMLParagraphElement>document.querySelector('#trapout1')).innerHTML = `<p class="text-warning">The angle must be a positive number</p>`;
            clearValues();
        }
    }
    else if (b >= 180) {
        (<HTMLParagraphElement>document.querySelector('#trapout1')).innerHTML = `<p class="text-warning">The angle must not surpass 180&#176;</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#trapout1')).innerHTML = `<p class="text-success">The lenght of the diagonals is D=${Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * Math.cos(degreesToRadians(b)))} (&#8764; ${(Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * Math.cos(degreesToRadians(b)))).toFixed(4)})</p>`;
        clearValues();
    }
});
//using height
(<HTMLButtonElement>document.querySelector('#trapcalc2')).addEventListener('click', (event) => {
    event.preventDefault();
    const clearValues = () => {
        (<HTMLInputElement>document.querySelector('#trapl2')).value = '';
        (<HTMLInputElement>document.querySelector('#trapleg2')).value = '';
        (<HTMLInputElement>document.querySelector('#traph2')).value = ' ';
    }
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    const lside: number = parseFloat((<HTMLInputElement>document.querySelector('#trapl2')).value)!;
    const leg: number = parseFloat((<HTMLInputElement>document.querySelector('#trapleg2')).value)!;
    const height: number = parseFloat((<HTMLInputElement>document.querySelector('#traph2')).value)!;
    if (isNaN(lside) || isNaN(leg) || isNaN(height)) {
        (<HTMLParagraphElement>document.querySelector('#trapout2')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (lside <= 0 || leg <= 0 || height <= 0) {
        if (lside <= 0) {
            (<HTMLParagraphElement>document.querySelector('#trapout2')).innerHTML = `<p class="text-warning">The large segment must be a positive number</p>`;
            clearValues();
        } else if (leg <= 0) {
            (<HTMLParagraphElement>document.querySelector('#trapout2')).innerHTML = `<p class="text-warning">The leg must be a positive number</p>`;
            clearValues();
        } else if (height <= 0) {
            (<HTMLParagraphElement>document.querySelector('#trapout2')).innerHTML = `<p class="text-warning">The height must be a positive number</p>`;
            clearValues();
        }
    } else if (leg < lside) {
        (<HTMLParagraphElement>document.querySelector('#trapout2')).innerHTML = `<p class="text-warning">The leg must be greater than the large segment</p>`;
        clearValues();
    } else if (leg < height) {
        (<HTMLParagraphElement>document.querySelector('#trapout2')).innerHTML = `<p class="text-warning">The leg must be greater than the height</p>`;
        clearValues();
    } else {
        (<HTMLParagraphElement>document.querySelector('#trapout2')).innerHTML = `<p class="text-success">The lenght of the diagonals is D=${Math.sqrt(lside * lside + leg * leg - 2 * lside * Math.sqrt(leg * leg - height * height))} (&#8764; ${(Math.sqrt(lside * lside + leg * leg - 2 * lside * Math.sqrt(leg * leg - height * height))).toFixed(4)})</p>`;
        clearValues();
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.