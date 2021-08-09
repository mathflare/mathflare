"use strict";
document.getElementById('cbrtcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('cbrtrad').value);
    if (isNaN(num)) {
        document.getElementById('cbrtout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('cbrtrad').value = "";
    }
    else if (num < 0) {
        document.getElementById('cbrtout').innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        document.getElementById('cbrtrad').value = "";
    }
    else {
        if (Math.cbrt(num) === Math.floor(Math.cbrt(num))) {
            document.getElementById('cbrtout').innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)}</p>`;
            document.getElementById('cbrtrad').value = "";
        }
        else {
            document.getElementById('cbrtout').innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)} (&#8764; ${Math.cbrt(num).toFixed(3)})</p>`;
            document.getElementById('cbrtrad').value = "";
        }
    }
});
