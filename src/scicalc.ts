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
            const result = eval(display.value.replace(/\×/g, '*').replace(/\÷/g, '/').replace(/\log/g, 'Math.log').replace(/\sin/g, 'Math.sin').replace(/\cos/g, 'Math.cos').replace(/\tan/g, 'Math.tan').replace(/\sqrt/g, 'Math.sqrt').replace(/\pow/g, 'Math.pow').replace(/\pi/g, 'Math.PI').replace(/\e/g, 'Math.E').replace(/\^/g, '**').replace(/\hyp/g, 'Math.hypot'));
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