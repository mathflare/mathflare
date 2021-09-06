"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.querySelector('#x').value);
    const y = parseFloat(document.querySelector('#y').value);
    const clearValues = () => {
        document.querySelector('#x').value = '';
        document.querySelector('#y').value = '';
    };
    const simplification = (num, den) => {
        if (num / den === Math.floor(num / den)) {
            return `${num / den}`;
        }
        else if (num !== Math.floor(num) || den !== Math.floor(den)) {
            return `${num / den} (~${Math.floor(num / den)})`;
        }
        else {
            let x = num;
            let y = den;
            let MKD;
            for (let i = 0; i >= 0; i++) {
                if (x == 0) {
                    MKD = Math.abs(y);
                    break;
                }
                else if (y == 0) {
                    MKD = Math.abs(x);
                    break;
                }
                else if (Math.abs(x) > Math.abs(y)) {
                    x %= Math.abs(y);
                }
                else if (Math.abs(x) < Math.abs(y)) {
                    y %= Math.abs(x);
                }
            }
            if (num < 0 && den < 0)
                return `${-num / MKD}/${-den / MKD}`;
            else if (num > 0 && den > 0)
                return `${num / MKD}/${den / MKD}`;
            else
                return `-${(Math.abs(num) / MKD)}/${(Math.abs(den) / MKD)}`;
        }
    };
    if (isNaN(x) || isNaN(y)) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else {
        document.querySelector('#output').innerHTML = `${simplification(x, y)}`;
        clearValues();
    }
});
