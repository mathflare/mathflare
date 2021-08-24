"use strict";
function replaceone(c) {
    let final = '';
    if (c !== 1) {
        final += c;
    }
    return final;
}
;
document.getElementById('combustcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const product = document.querySelector('#prodselect').value;
    if (product === 'co') {
        const c = parseFloat(document.getElementById('carbons').value);
        const bond = document.getElementById('bondselect').value;
        if (bond === 'single') {
            if (isNaN(c)) {
                document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (Math.floor(c) !== c) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (c <= 0) {
                if (c === 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c < 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                    document.getElementById('carbons').value = "";
                }
            }
            else {
                const h = 2 * c + 2;
                const o = (h / 2 + c) / 2;
                document.getElementById('output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${replaceone(c)} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceone(c)}<span class="text-warning">CO</span></p>`;
                document.getElementById('carbons').value = "";
            }
        }
        else if (bond === 'double') {
            if (isNaN(c)) {
                document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (Math.floor(c) !== c) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c === 1) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c < 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                    document.getElementById('carbons').value = "";
                }
            }
            else {
                const h = 2 * c;
                const o = (h / 2 + c) / 2;
                document.getElementById('output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO</span></p>`;
                document.getElementById('carbons').value = "";
            }
        }
        else if (bond === 'triple') {
            if (isNaN(c)) {
                document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (Math.floor(c) !== c) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c === 1) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c < 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                    document.getElementById('carbons').value = "";
                }
            }
            else {
                const h = 2 * c - 2;
                const o = (h / 2 + c) / 2;
                document.getElementById('output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceone(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO</span></p>`;
                document.getElementById('carbons').value = "";
            }
        }
    }
    else if (product === 'c') {
        const c = parseFloat(document.getElementById('carbons').value);
        const bond = document.getElementById('bondselect').value;
        if (bond === 'single') {
            if (isNaN(c)) {
                document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (Math.floor(c) !== c) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (c <= 0) {
                if (c === 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c < 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                    document.getElementById('carbons').value = "";
                }
            }
            else {
                const h = 2 * c + 2;
                const o = (h / 2) / 2;
                document.getElementById('output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${replaceone(h)}<span class="text-warning">C</span>${replaceone(c)} + ${replaceone(o)}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceone(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceone(c)}<span class="text-warning">C</span></p>`;
                document.getElementById('carbons').value = "";
            }
        }
        else if (bond === 'double') {
            if (isNaN(c)) {
                document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (Math.floor(c) !== c) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c === 1) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c < 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                    document.getElementById('carbons').value = "";
                }
            }
            else {
                const h = 2 * c;
                const o = (h / 2) / 2;
                document.getElementById('output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${replaceone(h)}<span class="text-warning">C</span>${replaceone(c)} + ${replaceone(o)}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceone(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceone(c)}<span class="text-warning">C</span></p>`;
                document.getElementById('carbons').value = "";
            }
        }
        else if (bond === 'triple') {
            if (isNaN(c)) {
                document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (Math.floor(c) !== c) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
                document.getElementById('carbons').value = "";
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c === 1) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                    document.getElementById('carbons').value = "";
                }
                else if (c < 0) {
                    document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                    document.getElementById('carbons').value = "";
                }
            }
            else {
                const h = 2 * c - 2;
                const o = (h / 2) / 2;
                document.getElementById('output').innerHTML = `<p class="text-success"><span class="text-warning">H</span>${replaceone(h)}<span class="text-warning">C</span>${replaceone(c)} + ${replaceone(o)}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceone(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceone(c)}<span class="text-warning">C</span></p>`;
                document.getElementById('carbons').value = "";
            }
        }
    }
});
