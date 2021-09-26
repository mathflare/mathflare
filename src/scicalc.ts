const operants: NodeList = document.querySelectorAll('#operant');
operants.forEach((operant: any) => {
    operant.addEventListener('click', (e: Event) => {
        (<HTMLInputElement>document.querySelector('#display')).value += operant.dataset.digit;
        (<HTMLInputElement>document.querySelector('#display')).focus();
    });
});

(<HTMLButtonElement>document.querySelector('#evaluate')).addEventListener('click', (e: Event) => {
    e.preventDefault();
    const display: HTMLInputElement = <HTMLInputElement>document.querySelector('#display');
    if (display.value.trim().length === 0) {
        (<HTMLInputElement>document.querySelector('#result')).value = 'Please enter a correct operation'
    } else {
        try {
            const result = eval(display.value.replace('×', '*').replace('÷', '/').replace('log', 'Math.log').replace('sin', 'Math.sin').replace('cos', 'Math.cos').replace('tan', 'Math.tan').replace('sqrt', 'Math.sqrt').replace('pow', 'Math.pow').replace('π', 'Math.PI').replace('e', 'Math.E').replace('^', '**').replace('hyp', 'Math.hypot'));
            if (isNaN(result)) {
                (<HTMLInputElement>document.querySelector('#result')).value = 'Please enter a correct operation'
            } else {
                (<HTMLInputElement>document.querySelector('#result')).value = result.toString();
            }
        } catch (e) {
            (<HTMLInputElement>document.querySelector('#result')).value = 'Math Error';
        }
    }
});

(<HTMLButtonElement>document.querySelector('#clear')).addEventListener('click', (e: Event) => {
    e.preventDefault();
    (<HTMLInputElement>document.querySelector('#display')).value = '';
    (<HTMLInputElement>document.querySelector('#result')).value = '';
});

(<HTMLButtonElement>document.querySelector('#copy-res')).addEventListener('click', (e: Event) => {
    e.preventDefault();
    copyToClipboard((<HTMLInputElement>document.querySelector('#result')).value);
    (<HTMLButtonElement>document.querySelector('#copy-res')).innerText = 'Copied!'
});

(<HTMLButtonElement>document.querySelector('#ans')).addEventListener('click', (e: Event) => {
    e.preventDefault();
    (<HTMLInputElement>document.querySelector('#display')).value = (<HTMLInputElement>document.querySelector('#result')).value;
    (<HTMLInputElement>document.querySelector('#result')).value = '';
});