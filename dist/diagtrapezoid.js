"use strict";
document.getElementById('trapcalc1').addEventListener('click', (event) => {
    event.preventDefault();
    const clearValues = () => {
        document.getElementById('trapl1').value = "";
        document.getElementById('trapleg1').value = "";
        document.getElementById('trapβ1').value = "";
    };
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    const lside = parseFloat(document.getElementById('trapl1').value);
    const leg = parseFloat(document.getElementById('trapleg1').value);
    const b = parseFloat(document.getElementById('trapβ1').value);
    if (isNaN(lside) || isNaN(leg) || isNaN(b)) {
        document.getElementById('trapout1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (lside <= 0 || leg <= 0 || b <= 0) {
        if (lside <= 0) {
            document.getElementById('trapout1').innerHTML = `<p class="text-warning">The large segment must be a positive number</p>`;
            clearValues();
        }
        else if (leg <= 0) {
            document.getElementById('trapout1').innerHTML = `<p class="text-warning">The leg must be a positive number</p>`;
            clearValues();
        }
        else if (b <= 0) {
            document.getElementById('trapout1').innerHTML = `<p class="text-warning">The angle must be a positive number</p>`;
            clearValues();
        }
    }
    else if (b >= 180) {
        document.getElementById('trapout1').innerHTML = `<p class="text-warning">The angle must not surpass 180&#176;</p>`;
        clearValues();
    }
    else {
        document.getElementById('trapout1').innerHTML = `<p class="text-success">The lenght of the diagonals is D=${Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * Math.cos(degreesToRadians(b)))} (&#8764; ${(Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * Math.cos(degreesToRadians(b)))).toFixed(4)})</p>`;
        clearValues();
    }
});
document.getElementById('trapcalc2').addEventListener('click', (event) => {
    event.preventDefault();
    const clearValues = () => {
        document.getElementById('trapl2').value = "";
        document.getElementById('trapleg2').value = "";
        document.getElementById('traph2').value = "";
    };
    const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };
    const lside = parseFloat(document.getElementById('trapl2').value);
    const leg = parseFloat(document.getElementById('trapleg2').value);
    const height = parseFloat(document.getElementById('traph2').value);
    if (isNaN(lside) || isNaN(leg) || isNaN(height)) {
        document.getElementById('trapout2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (lside <= 0 || leg <= 0 || height <= 0) {
        if (lside <= 0) {
            document.getElementById('trapout2').innerHTML = `<p class="text-warning">The large segment must be a positive number</p>`;
            clearValues();
        }
        else if (leg <= 0) {
            document.getElementById('trapout2').innerHTML = `<p class="text-warning">The leg must be a positive number</p>`;
            clearValues();
        }
        else if (height <= 0) {
            document.getElementById('trapout2').innerHTML = `<p class="text-warning">The height must be a positive number</p>`;
            clearValues();
        }
    }
    else {
        document.getElementById('trapout2').innerHTML = `<p class="text-success">The lenght of the diagonals is D=${Math.sqrt(lside * lside + leg * leg - 2 * lside * Math.sqrt(leg * leg - height * height))} (&#8764; ${(Math.sqrt(lside * lside + leg * leg - 2 * lside * Math.sqrt(leg * leg - height * height))).toFixed(4)})</p>`;
        clearValues();
    }
});
