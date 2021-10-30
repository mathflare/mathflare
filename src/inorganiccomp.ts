//copyrights (c) 2021 MathFlare.xyz
//X^+z + Y^-v
(<HTMLButtonElement>document.querySelector('#inorgancalc')).addEventListener('click', (event: Event) => {
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
        if (str === 'OH' && v !== 1) {
            return `<span class="text-warning">(</span>${str}<span class="text-warning">)</span>`;
        } else if (str.length != 3 || v === 1) {
            if (str === 'OH') return str;
            else return `<span class="text-warning">${str}</span>`;
        }
        return `(<span class="text-warning">${str}</span>)`;
    };
    if (x === '' || y === '' || isNaN(z) || isNaN(v)) {
        (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (z <= 0 || v <= 0) {
        (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(z) !== z || Math.floor(v) !== v) {
        (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    } else if (z > 3 || v > 3) {
        (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `<p class="text-warning">The value of z or v cannot be more than 3</p>`;
        clearValues();
    } else {
        if (x === 'H') {
            if (z != 1) {
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `<p class="text-warning">The value of z must be 1 since the metal is H</p>`;
                clearValues();
            } else if (y === 'OH' && v === 1) {
                const result: string = `H<sub class="text-warning">2</sub>O:<span class="text-warning"> water</span>`;
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            } else if (z === v) {
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${x}${y}<span class="text-warning">: acid</span>`;
                clearValues();
            } else if (y === 'O' && v === 2) {
                const result: string = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> water</span>`;
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            } else {
                const result: string = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> acid</span>`;
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        } else if (y === 'O') {
            if (v != 2) {
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `<p class="text-warning">The value of v must be 2 since the non-metal is O</p>`;
                clearValues();
            } else if (z === v) {
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${x}${y}<span class="text-warning">: oxide</span>`;
                clearValues();
            } else {
                const result: string = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> oxide</span>`;
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        } else if (y === 'OH') {
            if (v != 1) {
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `<p class="text-warning">The value of v must be 1 since the non-metal is OH</p>`;
                clearValues();
            } else if (z === v) {
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${x}${y}<span class="text-warning">: base</span>`;
                clearValues();
            } else {
                const result: string = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> base</span>`;
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        } else {
            if (z === v) {
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${x}${y}<span class="text-warning">: salt</span>`;
                clearValues();
            } else {
                const result: string = `${x}<sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub>:<span class="text-warning"> salt</span>`;
                (<HTMLParagraphElement>document.querySelector('#inorganout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        }
    }
});
//copyrights (c) 2021 MathFlare.xyz