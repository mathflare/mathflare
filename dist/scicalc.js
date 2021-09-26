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
        document.querySelector('#result').value = 'Please enter a correct operation';
    }
    else {
        try {
            const result = eval(display.value.replace('×', '*').replace('÷', '/').replace('log', 'Math.log').replace('sin', 'Math.sin').replace('cos', 'Math.cos').replace('tan', 'Math.tan').replace('sqrt', 'Math.sqrt').replace('pow', 'Math.pow').replace('π', 'Math.PI').replace('e', 'Math.E').replace('^', '**').replace('hyp', 'Math.hypot'));
            if (isNaN(result)) {
                document.querySelector('#result').value = 'Please enter a correct operation';
            }
            else {
                document.querySelector('#result').value = result.toString();
            }
        }
        catch (e) {
            document.querySelector('#result').value = 'Math Error';
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
