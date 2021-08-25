"use strict";
document.querySelector('#add').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.querySelector('#num1').value);
        const b = parseFloat(document.querySelector('#num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.querySelector('#result').value = 'Please enter a valid value';
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
        }
        else {
            document.querySelector('#result').value = `${a} + ${b} = ${(a + b).toString()}`;
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
            document.querySelector('#copy-to-clipboard').disabled = false;
            document.querySelector('#copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a + b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
document.querySelector('#sub').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.querySelector('#num1').value);
        const b = parseFloat(document.querySelector('#num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.querySelector('#result').value = 'Please enter a valid value';
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
        }
        else {
            document.querySelector('#result').value = `${a} - ${b} = ${(a - b).toString()}`;
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
            document.querySelector('#copy-to-clipboard').disabled = false;
            document.querySelector('#copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a - b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
document.querySelector('#mul').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.querySelector('#num1').value);
        const b = parseFloat(document.querySelector('#num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.querySelector('#result').value = 'Please enter a valid value';
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
        }
        else {
            document.querySelector('#result').value = `${a} × ${b} = ${(a * b).toString()}`;
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
            document.querySelector('#copy-to-clipboard').disabled = false;
            document.querySelector('#copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a * b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
document.querySelector('#div').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.querySelector('#num1').value);
        const b = parseFloat(document.querySelector('#num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.querySelector('#result').value = 'Please enter a valid value';
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
        }
        else if (b === 0) {
            document.querySelector('#result').value = 'Cannot devide by zero';
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
        }
        else {
            document.querySelector('#result').value = `${a} ÷ ${b} = ${(a / b).toString()}`;
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
            document.querySelector('#copy-to-clipboard').disabled = false;
            document.querySelector('#copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a / b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
