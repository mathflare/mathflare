//copyrights (c) 2021 MathFlare.xyz
//X2CO3z + HvY
(<HTMLButtonElement>document.querySelector('#accarbcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const x: string = ((<HTMLInputElement>document.querySelector('#x')).value)!;
    const y: string = ((<HTMLInputElement>document.querySelector('#y')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.querySelector('#z')).value)!;
    const v: number = parseFloat((<HTMLInputElement>document.querySelector('#v')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x')).value = '';
        (<HTMLInputElement>document.querySelector('#y')).value = '';
        (<HTMLInputElement>document.querySelector('#z')).value = '';
        (<HTMLInputElement>document.querySelector('#v')).value = '';
    };
    const removeOne: (str: string) => string = (str: string) => {
        let final: string = '';
        for (let i: number = 0; i < str.length; i++) {
            if (str[i] !== '1') {
                final += str[i];
            }
        };
        return final;
    };
    const addParentheses: (str: string, v: number) => string = (str: string, v: number) => {
        if (str == 'OH' && v !== 1) {
            return `<span class="text-warning">(</span>${str}<span class="text-warning">)</span>`;
        } else if (str.length != 3 || v === 1) {
            if (str == 'OH') return str;
            else return `<span class="text-warning">${str}</span>`;
        }
        return `(<span class="text-warning">${str}</span>)`;
    };
    if (isNaN(z) || y == '' || x == '' || isNaN(v)) {
        (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (z <= 0 || v <= 0) {
        (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(z) !== z || Math.floor(v) !== v) {
        (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    } else if (z > 3 || v > 3) {
        (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `<p class="text-warning">The value of z or v cannot be more than 3</p>`;
        clearValues();
    } else {

        const result: string = ``;
        (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `${removeOne(result)}`;
        clearValues();

    }
});
//copyrights (c) 2021 MathFlare.xyz