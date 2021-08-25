"use strict";
document.querySelector('#combustcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const c = parseFloat(document.querySelector('#carbons').value);
    const bond = document.querySelector('#bondselect').value;
    const cToString = (c) => {
        if (c !== 1) {
            return c.toString();
        }
    };
    if (bond === 'single') {
        if (isNaN(c)) {
            document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            document.querySelector('#carbons').value = '';
        }
        else if (Math.floor(c) !== c) {
            document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            document.querySelector('#carbons').value = '';
        }
        else if (c <= 0) {
            if (c === 0) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                document.querySelector('#carbons').value = '';
            }
            else if (c < 0) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.querySelector('#carbons').value = '';
            }
        }
        else {
            const h = 2 * c + 2;
            const o = (h / 2 + 2 * c) / 2;
            if (Math.floor(o) !== o) {
                document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${cToString(c)} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${cToString(c)}<span class="text-warning">CO<sub>2</sub></span></p>`;
                document.querySelector('#carbons').value = '';
            }
            else {
                document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${cToString(c)} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${cToString(c)}<span class="text-warning">CO<sub>2</sub></span></p>`;
                document.querySelector('#carbons').value = '';
            }
        }
    }
    else if (bond === 'double') {
        if (isNaN(c)) {
            document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            document.querySelector('#carbons').value = '';
        }
        else if (Math.floor(c) !== c) {
            document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            document.querySelector('#carbons').value = '';
        }
        else if (c <= 1) {
            if (c === 0) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                document.querySelector('#carbons').value = '';
            }
            else if (c === 1) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                document.querySelector('#carbons').value = '';
            }
            else if (c < 0) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.querySelector('#carbons').value = '';
            }
        }
        else {
            const h = 2 * c;
            const o = (h / 2 + 2 * c) / 2;
            if (Math.floor(o) !== o) {
                document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                document.querySelector('#carbons').value = '';
            }
            else {
                document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                document.querySelector('#carbons').value = '';
            }
        }
    }
    else if (bond === 'triple') {
        if (isNaN(c)) {
            document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            document.querySelector('#carbons').value = '';
        }
        else if (Math.floor(c) !== c) {
            document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            document.querySelector('#carbons').value = '';
        }
        else if (c <= 1) {
            if (c === 0) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                document.querySelector('#carbons').value = '';
            }
            else if (c === 1) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                document.querySelector('#carbons').value = '';
            }
            else if (c < 0) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.querySelector('#carbons').value = '';
            }
        }
        else {
            const h = 2 * c - 2;
            const o = (h / 2 + 2 * c) / 2;
            if (Math.floor(o) !== o) {
                document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${cToString(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                document.querySelector('#carbons').value = '';
            }
            else {
                document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${cToString(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                document.querySelector('#carbons').value = '';
            }
        }
    }
});
