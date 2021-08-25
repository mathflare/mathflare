(<HTMLButtonElement>document.querySelector('#add')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.querySelector('#num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.querySelector('#num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.querySelector('#result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
        } else {
            (<HTMLInputElement>document.querySelector('#result')).value = `${a} + ${b} = ${(a + b).toString()}`;
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a + b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
(<HTMLButtonElement>document.querySelector('#sub')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.querySelector('#num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.querySelector('#num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.querySelector('#result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
        } else {
            (<HTMLInputElement>document.querySelector('#result')).value = `${a} - ${b} = ${(a - b).toString()}`;
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a - b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
(<HTMLButtonElement>document.querySelector('#mul')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.querySelector('#num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.querySelector('#num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.querySelector('#result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
        } else {
            (<HTMLInputElement>document.querySelector('#result')).value = `${a} × ${b} = ${(a * b).toString()}`;
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a * b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
(<HTMLButtonElement>document.querySelector('#div')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.querySelector('#num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.querySelector('#num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.querySelector('#result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
        } else if (b === 0) {
            (<HTMLInputElement>document.querySelector('#result')).value = 'Cannot devide by zero';
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
        } else {
            (<HTMLInputElement>document.querySelector('#result')).value = `${a} ÷ ${b} = ${(a / b).toString()}`;
            (<HTMLInputElement>document.querySelector('#num1')).value = '';
            (<HTMLInputElement>document.querySelector('#num2')).value = '';
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.querySelector('#copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a / b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});