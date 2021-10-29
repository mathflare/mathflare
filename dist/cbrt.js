"use strict";
document.querySelector('#cbrtcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.querySelector('#cbrtrad').value);
    if (isNaN(num)) {
        document.querySelector('#cbrtout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (num < 0) {
        document.querySelector('#cbrtout').innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
    }
    else {
        if (Math.cbrt(num) === Math.floor(Math.cbrt(num))) {
            document.querySelector('#cbrtout').innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)}</p>`;
        }
        else {
            document.querySelector('#cbrtout').innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)} (&#8764; ${Math.cbrt(num).toFixed(3)})</p>`;
        }
    }
});
