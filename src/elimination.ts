//copyrights (c) 2021 MathFlare.xyz
//HxYz + WkOHm
const removeOne: (str: string) => string = (str: string) => {
    let final: string = '';
    for (let i: number = 0; i < str.length; i++) {
        if (str[i] !== '1') {
            final += str[i];
        }
    };
    return final;
};
(<HTMLButtonElement>document.getElementById('eliminationcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const x: number = parseFloat((<HTMLInputElement>document.getElementById('x')).value)!;
    const y: string = ((<HTMLInputElement>document.getElementById('y')).value)!;
    const z: number = parseFloat((<HTMLInputElement>document.getElementById('z')).value)!;
    const w: string = ((<HTMLInputElement>document.getElementById('w')).value)!;
    const k: number = parseFloat((<HTMLInputElement>document.getElementById('k')).value)!;
    const m: number = parseFloat((<HTMLInputElement>document.getElementById('m')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.getElementById('x')).value = '';
        (<HTMLInputElement>document.getElementById('y')).value = '';
        (<HTMLInputElement>document.getElementById('z')).value = '';
        (<HTMLInputElement>document.getElementById('w')).value = '';
        (<HTMLInputElement>document.getElementById('k')).value = '';
        (<HTMLInputElement>document.getElementById('m')).value = '';
    };
    if (isNaN(x) || y == '' || isNaN(z) || w == '' || isNaN(k) || isNaN(m)) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (x <= 0 || z <= 0 || k <= 0 || m <= 0) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (Math.floor(x) !== x || Math.floor(z) !== z || Math.floor(k) !== k || Math.floor(m) !== m) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    } else if (x > 3 || m > 3) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">The value of x or m cannot be more than 3</p>`;
        clearValues();
    } else if (z > 1 || k > 1) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">The value of z or k cannot be more than 1</p>`;
        clearValues();
    } else {
        if (x === m) {
            const result: string = `H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span><sub class="text-warning">${z}</sub> + <span class="text-warning">${w}</span><sub class="text-warning">${k}</sub>OH<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x}</span>H<sub>2</sub>O + <span class="text-warning">${w}${y}</span>`;
            (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        } else {
            const result: string = `<span class="text-warning">${m}</span>H<sub class="text-warning">${x}</sub><span class="text-warning">${y}</span><sub class="text-warning">${z}</sub> + <span class="text-warning">${x}${w}</span><sub class="text-warning">${k}</sub>OH<sub class="text-warning">${m}</sub> &#8594; <span class="text-warning">${x * m}</span>H<sub>2</sub>O + <span class="text-warning">${w}<sub>${x}</sub>${y}<sub>${m}</sub></span>`;
            (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        }
    }
});
//copyrights (c) 2021 MathFlare.xyz