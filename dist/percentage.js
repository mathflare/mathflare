"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.querySelector('#num1').value);
    const den = parseFloat(document.querySelector('#den1').value);
    if (isNaN(num) || isNaN(den)) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#num1').value = "";
        document.querySelector('#den1').value = "";
    }
    else if (den == 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The denominator cannot be 0</p>`;
        document.querySelector('#num1').value = "";
        document.querySelector('#den1').value = "";
    }
    else {
        document.querySelector('#output').innerHTML = `<p class="text-success"><sup>${num}</sup>&frasl;<sub>${den}</sub> = ${(num / den) * 100}&#37;</p>`;
        document.querySelector('#num1').value = "";
        document.querySelector('#den1').value = "";
    }
});
document.querySelector('#button2').addEventListener('click', (event) => {
    event.preventDefault();
    const per = parseFloat(document.querySelector('#per2').value);
    const num2 = parseFloat(document.querySelector('#num2').value);
    if (isNaN(per) || isNaN(num2) || num2 == 0) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#per2').value = "";
        document.querySelector('#num2').value = "";
    }
    else {
        document.querySelector('#output2').innerHTML = `<p class="text-success">${per}&#37; of ${num2} = ${(per / 100) * num2}</p>`;
        document.querySelector('#per2').value = "";
        document.querySelector('#num2').value = "";
    }
});
document.querySelector('#button3').addEventListener('click', (event) => {
    event.preventDefault();
    const init = parseFloat(document.querySelector('#init3').value);
    const fin = parseFloat(document.querySelector('#fin3').value);
    if (isNaN(init) || isNaN(fin) || init == 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#init3').value = "";
        document.querySelector('#fin3').value = "";
    }
    else {
        const result = ((fin - init) / init) * 100;
        if (result == 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-warning">There is no increase/decrease between ${init} and ${fin}</p>`;
            document.querySelector('#init3').value = "";
            document.querySelector('#fin3').value = "";
        }
        else if (result < 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-success">The percentage of the decrease from ${init} to ${fin} is ${result}&#37;</p>`;
            document.querySelector('#init3').value = "";
            document.querySelector('#fin3').value = "";
        }
        else if (result > 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-success">The percentage of the increase from ${init} to ${fin} is ${result}&#37;</p>`;
            document.querySelector('#init3').value = "";
            document.querySelector('#fin3').value = "";
        }
    }
});
document.querySelector('#button4').addEventListener('click', (event) => {
    event.preventDefault();
    const userSelect = document.querySelector('#select').value;
    const init = parseFloat(document.querySelector('#init4').value);
    const disc = parseFloat(document.querySelector('#disc4').value);
    if (userSelect == "inc") {
        if (isNaN(init) || isNaN(disc)) {
            document.querySelector('#output4').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            document.querySelector('#init4').value = "";
            document.querySelector('#disc4').value = "";
        }
        else if (disc == 0) {
            document.querySelector('#output4').innerHTML = `<p class="text-warning">There is no increse between ${init} and ${init}</p>`;
            document.querySelector('#init4').value = "";
            document.querySelector('#disc4').value = "";
        }
        else {
            document.querySelector('#output4').innerHTML = `<p class="text-success">The final value is ${(init * disc / 100) + init}</p>`;
            document.querySelector('#init4').value = "";
            document.querySelector('#disc4').value = "";
        }
    }
    else if (userSelect == "dec") {
        if (isNaN(init) || isNaN(disc)) {
            document.querySelector('#output4').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            document.querySelector('#init4').value = "";
            document.querySelector('#disc4').value = "";
        }
        else if (disc == 0) {
            document.querySelector('#output4').innerHTML = `<p class="text-warning">There is no decrease between ${init} and ${init}</p>`;
            document.querySelector('#init4').value = "";
            document.querySelector('#disc4').value = "";
        }
        else {
            document.querySelector('#output4').innerHTML = `<p class="text-success">The final value is ${init - (init * disc / 100)}</p>`;
            document.querySelector('#init4').value = "";
            document.querySelector('#disc4').value = "";
        }
    }
});
document.querySelector('#button5').addEventListener('click', (event) => {
    event.preventDefault();
    const userSelect = document.querySelector('#select2').value;
    const fin = parseFloat(document.querySelector('#fin5').value);
    const disc = parseFloat(document.querySelector('#disc5').value);
    if (userSelect == "inc") {
        if (isNaN(fin) || isNaN(disc)) {
            document.querySelector('#output5').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            document.querySelector('#fin5').value = "";
            document.querySelector('#disc5').value = "";
        }
        else if (disc == 0) {
            document.querySelector('#output5').innerHTML = `<p class="text-warning">There is no increse between ${fin} and ${fin}</p>`;
            document.querySelector('#fin5').value = "";
            document.querySelector('#disc5').value = "";
        }
        else {
            document.querySelector('#output5').innerHTML = `<p class="text-success">The initial value is ${fin / (1 + disc / 100)}</p>`;
            document.querySelector('#fin5').value = "";
            document.querySelector('#disc5').value = "";
        }
    }
    else if (userSelect == "dec") {
        if (isNaN(fin) || isNaN(disc)) {
            document.querySelector('#output5').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            document.querySelector('#fin5').value = "";
            document.querySelector('#disc5').value = "";
        }
        else if (disc == 0) {
            document.querySelector('#output5').innerHTML = `<p class="text-warning">There is no decrease between ${fin} and ${fin}</p>`;
            document.querySelector('#fin5').value = "";
            document.querySelector('#disc5').value = "";
        }
        else {
            document.querySelector('#output5').innerHTML = `<p class="text-success">The initial value is ${fin / (1 - disc / 100)}</p>`;
            document.querySelector('#fin5').value = "";
            document.querySelector('#disc5').value = "";
        }
    }
});
