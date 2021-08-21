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
    }
    else if (x <= 0 || z <= 0 || k <= 0 || m <= 0) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (Math.floor(x) !== x || Math.floor(z) !== z || Math.floor(k) !== k || Math.floor(m) !== m) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
        clearValues();
    }
    else if (x > 3 || m > 3) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">The value of x or m cannot be more than 3</p>`;
        clearValues();
    }
    else if (z > 1 || k > 1) {
        (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `<p class="text-warning">The value of z or k cannot be more or less than 1</p>`;
        clearValues();
    }
    else {
        if (x === m) {
            const result: string = `H<sub>${x}</sub>${y}<sub>${z}</sub> + ${w}<sub>${k}</sub>OH<sub>${m}</sub> &#8594; ${x}H<sub>2</sub>O + ${w}${y}`;
            (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        }
        else {
            const result: string = `${m}H<sub>${x}</sub>${y}<sub>${z}</sub> + ${x}${w}<sub>${k}</sub>OH<sub>${m}</sub> &#8594; ${x * m}H<sub>2</sub>O + ${w}${x}${y}${m}`;
            (<HTMLParagraphElement>document.getElementById('eliminationout')).innerHTML = `${removeOne(result)}`;
            clearValues();
        }

    }

});