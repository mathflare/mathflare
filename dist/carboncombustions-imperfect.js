"use strict";
document.querySelector('#combustcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const product = document.querySelector('#prodselect').value;
    const replaceOne = (c) => {
        let final = '';
        if (c !== 1) {
            final += c;
        }
        return final;
    };
    if (product === 'co') {
        const c = parseFloat(document.querySelector('#carbons').value);
        const bond = document.querySelector('#bondselect').value;
        if (bond === 'single') {
            if (isNaN(c)) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            }
            else if (Math.floor(c) !== c) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            }
            else if (c <= 0) {
                if (c === 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                }
                else if (c < 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                }
            }
            else {
                const h = 2 * c + 2;
                const o = (h / 2 + c) / 2;
                if (Math.floor(o) !== o) {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${h} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">CO</span></p>`;
                }
                else {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${h} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">CO</span></p>`;
                }
            }
        }
        else if (bond === 'double') {
            if (isNaN(c)) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            }
            else if (Math.floor(c) !== c) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                }
                else if (c === 1) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                }
                else if (c < 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                }
            }
            else {
                const h = 2 * c;
                const o = (h / 2 + c) / 2;
                if (Math.floor(o) !== o) {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${c}<span class="text-warning">H</span>${h} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO</span></p>`;
                }
                else {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${c}<span class="text-warning">H</span>${h} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO</span></p>`;
                }
            }
        }
        else if (bond === 'triple') {
            if (isNaN(c)) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            }
            else if (Math.floor(c) !== c) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                }
                else if (c === 1) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                }
                else if (c < 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                }
            }
            else {
                const h = 2 * c - 2;
                const o = (h / 2 + c) / 2;
                if (Math.floor(o) !== o) {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${c}<span class="text-warning">H</span>${h} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO</span></p>`;
                }
                else {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${c}<span class="text-warning">H</span>${h} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO</span></p>`;
                }
            }
        }
    }
    else if (product === 'c') {
        const c = parseFloat(document.querySelector('#carbons').value);
        const bond = document.querySelector('#bondselect').value;
        if (bond === 'single') {
            if (isNaN(c)) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            }
            else if (Math.floor(c) !== c) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            }
            else if (c <= 0) {
                if (c === 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                }
                else if (c < 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                }
            }
            else {
                const h = 2 * c + 2;
                const o = (h / 2) / 2;
                if (Math.floor(o) !== o) {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${replaceOne(h)} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">C</span></p>`;
                }
                else {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${replaceOne(h)} + ${replaceOne(o)}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">C</span></p>`;
                }
            }
        }
        else if (bond === 'double') {
            if (isNaN(c)) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            }
            else if (Math.floor(c) !== c) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                }
                else if (c === 1) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                }
                else if (c < 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                }
            }
            else {
                const h = 2 * c;
                const o = (h / 2) / 2;
                if (Math.floor(o) !== o) {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${replaceOne(h)} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">C</span></p>`;
                }
                else {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${replaceOne(h)} + ${replaceOne(o)}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">C</span></p>`;
                }
            }
        }
        else if (bond === 'triple') {
            if (isNaN(c)) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            }
            else if (Math.floor(c) !== c) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            }
            else if (c <= 1) {
                if (c === 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                }
                else if (c === 1) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                }
                else if (c < 0) {
                    document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                }
            }
            else {
                const h = 2 * c - 2;
                const o = (h / 2) / 2;
                if (Math.floor(o) !== o) {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${replaceOne(h)} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">C</span></p>`;
                }
                else {
                    document.querySelector('#output').innerHTML = `<p class="text-success"><span class="text-warning">C</span>${replaceOne(c)}<span class="text-warning">H</span>${replaceOne(h)} + ${replaceOne(o)}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replaceOne(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${replaceOne(c)}<span class="text-warning">C</span></p>`;
                }
            }
        }
    }
});
