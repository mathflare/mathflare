"use strict";
document.querySelector('#calc1').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a1').value);
    const c = parseFloat(document.querySelector('#c1').value);
    if (isNaN(a) || isNaN(c)) {
        document.querySelector('#output1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a1').value = "";
        document.querySelector('#c1').value = "";
    }
    else if (a == 0 && -c == 0) {
        document.querySelector('#output1').innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
        document.querySelector('#a1').value = "";
        document.querySelector('#c1').value = "";
    }
    else if (a == 0) {
        if (-c < 0) {
            document.querySelector('#output1').innerHTML = `<p class="text-warning">The inequality is an identity x &#8714; R</p>`;
            document.querySelector('#a1').value = "";
            document.querySelector('#c1').value = "";
        }
        else if (-c > 0) {
            document.querySelector('#output1').innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
            document.querySelector('#a1').value = "";
            document.querySelector('#c1').value = "";
        }
    }
    else if (-c == 0) {
        if (a > 0) {
            document.querySelector('#output1').innerHTML = `<p class="text-success">x > 0</p>`;
            document.querySelector('#a1').value = "";
            document.querySelector('#c1').value = "";
        }
        else if (a < 0) {
            document.querySelector('#output1').innerHTML = `<p class="text-success">x < 0</p>`;
            document.querySelector('#a1').value = "";
            document.querySelector('#c1').value = "";
        }
    }
    else {
        const x = -c / a;
        if (a < 0) {
            document.querySelector('#output1').innerHTML = `<p class="text-success">x < ${x}</p>`;
            document.querySelector('#a1').value = "";
            document.querySelector('#c1').value = "";
        }
        else {
            document.querySelector('#output1').innerHTML = `<p class="text-success">x > ${x}</p>`;
            document.querySelector('#a1').value = "";
            document.querySelector('#c1').value = "";
        }
    }
});
document.querySelector('#calc2').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a2').value);
    const c = parseFloat(document.querySelector('#c2').value);
    if (isNaN(a) || isNaN(c)) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#c2').value = "";
    }
    else if (a == 0 && -c == 0) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">The inequality 0x > 0 is a contradiction. The equation 0x = 0 is an identity x &#8714; R</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#c2').value = "";
    }
    else if (a == 0) {
        if (-c < 0) {
            document.querySelector('#output2').innerHTML = `<p class="text-warning">The inequality 0x > ${-c} is an identity x &#8714; R. The equation 0x = ${-c} is a contradiction </p>`;
            document.querySelector('#a2').value = "";
            document.querySelector('#c2').value = "";
        }
        else if (-c > 0) {
            document.querySelector('#output2').innerHTML = `<p class="text-warning">Both the inequality and the equation are a contradiction</p>`;
            document.querySelector('#a2').value = "";
            document.querySelector('#c2').value = "";
        }
    }
    else if (-c == 0) {
        if (a > 0) {
            document.querySelector('#output2').innerHTML = `<p class="text-success">x &#8805; 0</p>`;
            document.querySelector('#a2').value = "";
            document.querySelector('#c2').value = "";
        }
        else if (a < 0) {
            document.querySelector('#output2').innerHTML = `<p class="text-success">x &#8804; 0</p>`;
            document.querySelector('#a2').value = "";
            document.querySelector('#c2').value = "";
        }
    }
    else {
        const x = -c / a;
        if (a < 0) {
            document.querySelector('#output2').innerHTML = `<p class="text-success">x &#8804; ${x}</p>`;
            document.querySelector('#a2').value = "";
            document.querySelector('#c2').value = "";
        }
        else {
            document.querySelector('#output2').innerHTML = `<p class="text-success">x &#8805; ${x}</p>`;
            document.querySelector('#a2').value = "";
            document.querySelector('#c2').value = "";
        }
    }
});
document.querySelector('#calc3').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a3').value);
    const c = parseFloat(document.querySelector('#c3').value);
    if (isNaN(a) || isNaN(c)) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a == 0 && -c == 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a == 0) {
        if (-c < 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#c3').value = "";
        }
        else if (-c > 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-warning">The inequality is an identity x &#8714; R</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#c3').value = "";
        }
    }
    else if (-c == 0) {
        if (a > 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-success">x < 0</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#c3').value = "";
        }
        else if (a < 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-success">x > 0</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#c3').value = "";
        }
    }
    else {
        const x = -c / a;
        if (a < 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-success">x > ${x}</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#c3').value = "";
        }
        else {
            document.querySelector('#output3').innerHTML = `<p class="text-success">x < ${x}</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#c3').value = "";
        }
    }
});
document.querySelector('#calc4').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a4').value);
    const c = parseFloat(document.querySelector('#c4').value);
    if (isNaN(a) || isNaN(c)) {
        document.querySelector('#output4').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a4').value = "";
        document.querySelector('#c4').value = "";
    }
    else if (a == 0 && -c == 0) {
        document.querySelector('#output4').innerHTML = `<p class="text-warning">The inequality 0x < 0 is a contradiction. The equation 0x = 0 is an identity x &#8714; R</p>`;
        document.querySelector('#a4').value = "";
        document.querySelector('#c4').value = "";
    }
    else if (a == 0) {
        if (-c < 0) {
            document.querySelector('#output4').innerHTML = `<p class="text-warning">Both the inequality and the equation are a contradiction</p>`;
            document.querySelector('#a4').value = "";
            document.querySelector('#c4').value = "";
        }
        else if (-c > 0) {
            document.querySelector('#output4').innerHTML = `<p class="text-warning">The inequality 0x < ${-c} is an identity x &#8714; R. The equation 0x = ${-c} is a contradiction</p>`;
            document.querySelector('#a4').value = "";
            document.querySelector('#c4').value = "";
        }
    }
    else if (-c == 0) {
        if (a > 0) {
            document.querySelector('#output4').innerHTML = `<p class="text-success">x &#8804; 0</p>`;
            document.querySelector('#a4').value = "";
            document.querySelector('#c4').value = "";
        }
        else if (a < 0) {
            document.querySelector('#output4').innerHTML = `<p class="text-success">x &#8805; 0</p>`;
            document.querySelector('#a4').value = "";
            document.querySelector('#c4').value = "";
        }
    }
    else {
        const x = -c / a;
        if (a < 0) {
            document.querySelector('#output4').innerHTML = `<p class="text-success">x &#8805; ${x}</p>`;
            document.querySelector('#a4').value = "";
            document.querySelector('#c4').value = "";
        }
        else {
            document.querySelector('#output4').innerHTML = `<p class="text-success">x &#8804; ${x}</p>`;
            document.querySelector('#a4').value = "";
            document.querySelector('#c4').value = "";
        }
    }
});
