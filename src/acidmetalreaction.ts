//copyrights (c) 2021 MathFlare.xyz
//HxYz + M^+v
(<HTMLButtonElement>document.querySelector('#acmetalcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const x: number = parseFloat((<HTMLInputElement>document.querySelector('#x')).value)!;
    const y: string = ((<HTMLInputElement>document.querySelector('#y')).value)!;
    const m: string = ((<HTMLInputElement>document.querySelector('#m')).value)!;
    const v: number = parseFloat((<HTMLInputElement>document.querySelector('#v')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#x')).value = '';
        (<HTMLInputElement>document.querySelector('#y')).value = '';
        (<HTMLInputElement>document.querySelector('#m')).value = '';
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
        if (str.length != 3 || v === 1) {
            return `<span class="text-warning">${str}</span>`;
        }
        return `(<span class="text-warning">${str}</span>)`;
    };
    if (isNaN(x) || y === '' || m === '' || isNaN(v)) {
        (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (x <= 0 || v <= 0) {
        (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(x) !== x || Math.floor(v) !== v) {
        (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    } else if (x > 3 || v > 3) {
        (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `<p class="text-warning">The value of x or v cannot be more than 3</p>`;
        clearValues();
    } else if (m === "Cu" || m === "Ag" || m === "Au" || m === "Pt" || m === "cu" || m === "ag" || m === "au" || m === "pt") {
        (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `<p class="text-warning">There is not any reaction since the metal is one of these (Cu,Ag,Au,Pt)</p>`;
        clearValues();
    } else {
        if (x === v) {
            if (x === 2) { //HxY + M --> MY + H2
                const result: string = `H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${m}</span> &#8594; <span class="text-warning">${m}</span><span class="text-warning">${y}</span> + H<sub>2</sub>`;
                (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            } else { //2 HxY + 2 M --> 2 MY + x H2
                const result: string = `<span class="text-warning">2</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">2</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">2</span><span class="text-warning">${m}</span><span class="text-warning">${y}</span> + <span class="text-warning">${x}</span>H<sub>2</sub>`;
                (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        } else {
            if (x === 2) { //v HxY + x M --> MxYv + v H2
                const result: string = `<span class="text-warning">${v}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${x}</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">${m}</span><sub class="text-warning">${x}</sub>${addParentheses(y, v)}<sub class="text-warning">${v}</sub> + <span class="text-warning">${v}</span>H<sub>2</sub>`;
                (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            } else { //2*v HxY + 2*x M --> 2 MxYv + v*x H2 
                const result: string = `<span class="text-warning">${2 * v}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span> + <span class="text-warning">${2 * x}</span><span class="text-warning">${m}</span> &#8594; <span class="text-warning">2</span><span class="text-warning">${m}</span><sub class="text-warning">${x}</sub>${addParentheses(y, v)}<sub class="text-warning">${v}</sub> + <span class="text-warning">${x * v}</span>H<sub>2</sub>`;
                (<HTMLParagraphElement>document.querySelector('#acmetalout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        }
    }
});
//copyrights (c) 2021 MathFlare.xyz