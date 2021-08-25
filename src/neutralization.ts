//copyrights (c) 2021 MathFlare.xyz
//HxYz + WkOHm
(<HTMLButtonElement>document.querySelector('#eliminationcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const x: number = parseFloat((<HTMLInputElement>document.querySelector('#x')).value)!;
    const y: string = ((<HTMLInputElement>document.querySelector('#y')).value)!;
    const w: string = ((<HTMLInputElement>document.querySelector('#w')).value)!;
    const m: number = parseFloat((<HTMLInputElement>document.querySelector('#m')).value)!;
    document.querySelector('#');
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x')).value = '';
        (<HTMLInputElement>document.querySelector('#y')).value = '';
        (<HTMLInputElement>document.querySelector('#w')).value = '';
        (<HTMLInputElement>document.querySelector('#m')).value = '';
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
    if (isNaN(x) || y == '' || w == '' || isNaN(m)) {
        (<HTMLParagraphElement>document.querySelector('#eliminationout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (x <= 0 || m <= 0) {
        (<HTMLParagraphElement>document.querySelector('#eliminationout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(x) !== x || Math.floor(m) !== m) {
        (<HTMLParagraphElement>document.querySelector('#eliminationout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    } else if (x > 3 || m > 3) {
        (<HTMLParagraphElement>document.querySelector('#eliminationout')).innerHTML = `<p class="text-warning">The value of x or m cannot be more than 3</p>`;
        clearValues();
    } else {
        if (x === m) {
            const result: string = `H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${w}</span>${addParentheses('OH', m)}<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x}</span>H<sub>2</sub>O + <span class="text-warning">${w}${y}</span>`;
            (<HTMLParagraphElement>document.querySelector('#eliminationout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        } else {
            const result: string = `<span class="text-warning">${m}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${x}${w}</span>${addParentheses('OH', m)}<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x * m}</span>H<sub>2</sub>O + <span class="text-warning">${w}<sub>${x}</sub></span>${addParentheses(y, m)}<sub class="text-warning">${m}</sub>`;
            (<HTMLParagraphElement>document.querySelector('#eliminationout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        }
    }
});
//copyrights (c) 2021 MathFlare.xyz