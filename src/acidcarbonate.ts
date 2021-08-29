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
        if (str == 'CO<sub>3</sub>' && v !== 1) {
            return `<span class="text-warning">(</span>${str}<span class="text-warning">)</span>`;
        } else if (str.length != 3 || v === 1) {
            if (str == 'CO<sub>3</sub>') return str;
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
        if (z == v) {
            if (z == 2) {// XCO3 + HvY --> XY + H2O + CO2
                const result: string = `<span class="text-warning">${x}</span>CO<sub>3</sub> + H<sub class="text-warning">${v}</sub><span class="text-warning">${y}</span> &#8594; <span class="text-warning">${x}${y}</span> + H<sub>2</sub>O + CO<sub>2</sub>`;
                (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            } else {// X2CO3Z + 2HvY --> 2XY + vH2O + zCO2
                const result: string = `<span class="text-warning">${x}</span><sub>2</sub>${addParentheses('CO<sub>3</sub>', z)}<sub class="text-warning">${z}</sub> + <span class="text-warning">2</span>H<sub class="text-warning">${v}</sub><span class="text-warning">${y}</span> &#8594; <span class="text-warning">2${x}${y}</span> + <span class="text-warning">${v}</span>H<sub>2</sub>O + <span class="text-warning">${z}</span>CO<sub>2</sub>`;
                (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `${removeOne(result)}`;
                clearValues();
            }
        } else if (v == 2) {// X2CO3z + zHvY --> XvYz + zH2O + zCO2
            const result: string = `<span class="text-warning">${x}</span><sub>2</sub>${addParentheses('CO<sub>3</sub>', z)}<sub class="text-warning">${z}</sub> + <span class="text-warning">${z}</span>H<sub class="text-warning">${v}</sub><span class="text-warning">${y}</span> &#8594; <span class="text-warning">${x}</span><sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub> + <span class="text-warning">${z}</span>H<sub>2</sub>O + <span class="text-warning">${z}</span>CO<sub>2</sub>`;
            (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        } else if (z == 2) {// vXCO3 + zHvY --> XvYz + vH2O + vCO2
            const result: string = `<span class="text-warning">${v}${x}</span>CO<sub>3</sub> + <span class="text-warning">${z}</span>H<sub class="text-warning">${v}</sub><span class="text-warning">${y}</span> &#8594; <span class="text-warning">${x}</span><sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub> + <span class="text-warning">${v}</span>H<sub>2</sub>O + <span class="text-warning">${v}</span>CO<sub>2</sub>`;
            (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        } else {// vX2CO3z + 2*zHvY --> 2XvYz + v*zH2O + v*zCO2
            const result: string = `<span class="text-warning">${v}${x}</span><sub>2</sub>${addParentheses('CO<sub>3</sub>', z)}<sub class="text-warning">${z}</sub> + <span class="text-warning">${2 * z}</span>H<sub class="text-warning">${v}</sub><span class="text-warning">${y}</span> &#8594; <span class="text-warning">2${x}</span><sub class="text-warning">${v}</sub>${addParentheses(y, z)}<sub class="text-warning">${z}</sub> + <span class="text-warning">${v * z}</span>H<sub>2</sub>O + <span class="text-warning">${v * z}</span>CO<sub>2</sub>`;
            (<HTMLParagraphElement>document.querySelector('#accarbout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        }
    }
});
//copyrights (c) 2021 MathFlare.xyz