"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('num1').value);
    const den = parseFloat(document.getElementById('den1').value);
    if (isNaN(num) || isNaN(den)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('num1').value = "";
        document.getElementById('den1').value = "";
    }
    else if (den == 0) {
        document.getElementById('output').innerHTML = `<p class="text-warning">The denominator cannot be 0</p>`;
        document.getElementById('num1').value = "";
        document.getElementById('den1').value = "";
    }
    else {
        document.getElementById('output').innerHTML = `<p class="text-success"><sup>${num}</sup>&frasl;<sub>${den}</sub> = ${(num / den) * 100}&#37;</p>`;
        document.getElementById('num1').value = "";
        document.getElementById('den1').value = "";
    }
});
document.getElementById('button2').addEventListener('click', (event) => {
    event.preventDefault();
    const per = parseFloat(document.getElementById('per2').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(per) || isNaN(num2) || num2 == 0) {
        document.getElementById('output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('per2').value = "";
        document.getElementById('num2').value = "";
    }
    else {
        document.getElementById('output2').innerHTML = `<p class="text-success">${per}&#37; of ${num2} = ${(per / 100) * num2}</p>`;
        document.getElementById('per2').value = "";
        document.getElementById('num2').value = "";
    }
});
document.getElementById('button3').addEventListener('click', (event) => {
    event.preventDefault();
    const init = parseFloat(document.getElementById('init3').value);
    const fin = parseFloat(document.getElementById('fin3').value);
    if (isNaN(init) || isNaN(fin) || init == 0) {
        document.getElementById('output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('init3').value = "";
        document.getElementById('fin3').value = "";
    }
    else {
        const result = ((fin - init) / init) * 100;
        if (result == 0) {
            document.getElementById('output3').innerHTML = `<p class="text-warning">There is no increase/decrease between ${init} and ${fin}</p>`;
            document.getElementById('init3').value = "";
            document.getElementById('fin3').value = "";
        }
        else if (result < 0) {
            document.getElementById('output3').innerHTML = `<p class="text-success">The percentage of the decrease from ${init} to ${fin} is ${result}&#37;</p>`;
            document.getElementById('init3').value = "";
            document.getElementById('fin3').value = "";
        }
        else if (result > 0) {
            document.getElementById('output3').innerHTML = `<p class="text-success">The percentage of the increase from ${init} to ${fin} is ${result}&#37;</p>`;
            document.getElementById('init3').value = "";
            document.getElementById('fin3').value = "";
        }
    }
});
