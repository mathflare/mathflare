"use strict";
document.querySelector('#trapcalc1').addEventListener('click', (event) => {
    event.preventDefault();
    const clearValues = () => {
        document.querySelector('#trapl1').value = '';
        document.querySelector('#trapleg1').value = '';
        document.querySelector('#trapβ1').value = '';
    };
    const lside = parseFloat(document.querySelector('#trapl1').value);
    const leg = parseFloat(document.querySelector('#trapleg1').value);
    const b = parseFloat(document.querySelector('#trapβ1').value);
    if (isNaN(lside) || isNaN(leg) || isNaN(b)) {
        document.querySelector('#trapout1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (lside <= 0 || leg <= 0 || b <= 0) {
        if (lside <= 0) {
            document.querySelector('#trapout1').innerHTML = `<p class="text-warning">The large segment must be a positive number</p>`;
            clearValues();
        }
        else if (leg <= 0) {
            document.querySelector('#trapout1').innerHTML = `<p class="text-warning">The leg must be a positive number</p>`;
            clearValues();
        }
        else if (b <= 0) {
            document.querySelector('#trapout1').innerHTML = `<p class="text-warning">The angle must be a positive number</p>`;
            clearValues();
        }
    }
    else if (b >= 180) {
        document.querySelector('#trapout1').innerHTML = `<p class="text-warning">The angle must not surpass 180&#176;</p>`;
        clearValues();
    }
    else {
        document.querySelector('#trapout1').innerHTML = `<p class="text-success">The lenght of the diagonals is D=${Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * Math.cos(degreesToRadians(b)))} (&#8764; ${(Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * Math.cos(degreesToRadians(b)))).toFixed(4)})</p>`;
        clearValues();
    }
});
document.querySelector('#trapcalc2').addEventListener('click', (event) => {
    event.preventDefault();
    const clearValues = () => {
        document.querySelector('#trapl2').value = '';
        document.querySelector('#trapleg2').value = '';
        document.querySelector('#traph2').value = ' ';
    };
    const lside = parseFloat(document.querySelector('#trapl2').value);
    const leg = parseFloat(document.querySelector('#trapleg2').value);
    const height = parseFloat(document.querySelector('#traph2').value);
    if (isNaN(lside) || isNaN(leg) || isNaN(height)) {
        document.querySelector('#trapout2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (lside <= 0 || leg <= 0 || height <= 0) {
        if (lside <= 0) {
            document.querySelector('#trapout2').innerHTML = `<p class="text-warning">The large segment must be a positive number</p>`;
            clearValues();
        }
        else if (leg <= 0) {
            document.querySelector('#trapout2').innerHTML = `<p class="text-warning">The leg must be a positive number</p>`;
            clearValues();
        }
        else if (height <= 0) {
            document.querySelector('#trapout2').innerHTML = `<p class="text-warning">The height must be a positive number</p>`;
            clearValues();
        }
    }
    else if (leg < lside) {
        document.querySelector('#trapout2').innerHTML = `<p class="text-warning">The leg must be greater than the large segment</p>`;
        clearValues();
    }
    else if (leg < height) {
        document.querySelector('#trapout2').innerHTML = `<p class="text-warning">The leg must be greater than the height</p>`;
        clearValues();
    }
    else {
        document.querySelector('#trapout2').innerHTML = `<p class="text-success">The lenght of the diagonals is D=${Math.sqrt(lside * lside + leg * leg - 2 * lside * Math.sqrt(leg * leg - height * height))} (&#8764; ${(Math.sqrt(lside * lside + leg * leg - 2 * lside * Math.sqrt(leg * leg - height * height))).toFixed(4)})</p>`;
        clearValues();
    }
});
