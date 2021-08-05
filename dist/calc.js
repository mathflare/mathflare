"use strict";
document.getElementById('add').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.getElementById('num1').value);
        const b = parseFloat(document.getElementById('num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.getElementById('result').value = 'Please enter a valid value';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        }
        else {
            document.getElementById('result').value = `${a} + ${b} = ${(a + b).toString()}`;
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('copy-to-clipboard').disabled = false;
            document.getElementById('copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a + b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
document.getElementById('sub').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.getElementById('num1').value);
        const b = parseFloat(document.getElementById('num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.getElementById('result').value = 'Please enter a valid value';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        }
        else {
            document.getElementById('result').value = `${a} - ${b} = ${(a - b).toString()}`;
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('copy-to-clipboard').disabled = false;
            document.getElementById('copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a - b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
document.getElementById('mul').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.getElementById('num1').value);
        const b = parseFloat(document.getElementById('num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.getElementById('result').value = 'Please enter a valid value';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        }
        else {
            document.getElementById('result').value = `${a} × ${b} = ${(a * b).toString()}`;
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('copy-to-clipboard').disabled = false;
            document.getElementById('copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a * b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
document.getElementById('div').addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a = parseFloat(document.getElementById('num1').value);
        const b = parseFloat(document.getElementById('num2').value);
        if (isNaN(a) || isNaN(b)) {
            document.getElementById('result').value = 'Please enter a valid value';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        }
        else if (b === 0) {
            document.getElementById('result').value = 'Cannot devide by zero';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        }
        else {
            document.getElementById('result').value = `${a} ÷ ${b} = ${(a / b).toString()}`;
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('copy-to-clipboard').disabled = false;
            document.getElementById('copy-to-clipboard').addEventListener('click', () => {
                navigator.clipboard.writeText((a / b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
