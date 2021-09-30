"use strict";
const operants = document.querySelectorAll('#operant');
operants.forEach((operant) => {
    operant.addEventListener('click', (e) => {
        document.querySelector('#display').value += operant.dataset.digit;
        document.querySelector('#display').focus();
    });
});
document.querySelector('#evaluate').addEventListener('click', (e) => {
    e.preventDefault();
    const display = document.querySelector('#display');
    if (display.value.trim().length === 0) {
        document.querySelector('#result').value = 'Please enter a valid operation';
    }
    else {
        try {
            const result = eval(display.value.replace(/\×/g, '*').replace(/\÷/g, '/').replace(/log/g, 'Math.log').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/sqrt/g, 'Math.sqrt').replace(/pow/g, 'Math.pow').replace(/pi/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/\^/g, '**').replace(/hyp/g, 'Math.hypot').replace(/abs/g, 'Math.abs').replace(/\%/g, '/100'));
            if (isNaN(result)) {
                document.querySelector('#result').value = 'Please enter a valid operation';
            }
            else {
                document.querySelector('#result').value = result.toString();
            }
        }
        catch (e) {
            document.querySelector('#result').value = 'Please enter a valid operation';
        }
    }
});
document.querySelector('#clear').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#display').value = '';
    document.querySelector('#result').value = '';
});
document.querySelector('#copy-res').addEventListener('click', (e) => {
    e.preventDefault();
    copyToClipboard(document.querySelector('#result').value);
    document.querySelector('#copy-res').innerText = 'Copied!';
});
document.querySelector('#ans').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#display').value = document.querySelector('#result').value;
    document.querySelector('#result').value = '';
});
