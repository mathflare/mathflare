//copyrights (c) 2021 MathFlare.xyz
function replace(c: number) {
    let final: string = '';
    if (c !== 1) {
        final += c;
    }
    return final;
};
(<HTMLButtonElement>document.getElementById('combustcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const c: number = parseFloat((<HTMLInputElement>document.getElementById('carbons')).value)!;
    const bond: string = (<HTMLInputElement>document.getElementById('bondselect')).value!;
    if (bond === 'single') {
        if (isNaN(c)) {
            (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            (<HTMLInputElement>document.getElementById('carbons')).value = "";
        } else if (Math.floor(c) !== c) {
            (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            (<HTMLInputElement>document.getElementById('carbons')).value = "";
        } else if (c <= 0) {
            if (c === 0) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else if (c < 0) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            }
        } else {
            const h: number = 2 * c + 2;
            const o: number = (h / 2 + 2 * c) / 2;
            if (Math.floor(o) !== o) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${replace(c)} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${replace(c)}<span class="text-warning">CO<sub>2</sub></span></p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${replace(c)} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${replace(c)}<span class="text-warning">CO<sub>2</sub></span></p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            }
        }
    } else if (bond === 'double') {
        if (isNaN(c)) {
            (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            (<HTMLInputElement>document.getElementById('carbons')).value = "";
        } else if (Math.floor(c) !== c) {
            (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            (<HTMLInputElement>document.getElementById('carbons')).value = "";
        } else if (c <= 1) {
            if (c === 0) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else if (c === 1) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else if (c < 0) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            }
        } else {
            const h: number = 2 * c;
            const o: number = (h / 2 + 2 * c) / 2;
            if (Math.floor(o) !== o) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${h / 2}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            }
        }
    } else if (bond === 'triple') {
        if (isNaN(c)) {
            (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
            (<HTMLInputElement>document.getElementById('carbons')).value = "";
        } else if (Math.floor(c) !== c) {
            (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">The number of carbons cannot be a decimal number</p>`;
            (<HTMLInputElement>document.getElementById('carbons')).value = "";
        } else if (c <= 1) {
            if (c === 0) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">There cannot be a combustion with 0 carbons</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else if (c === 1) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">A hydrocarbon with one carbon can only have a single bond</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else if (c < 0) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            }
        } else {
            const h: number = 2 * c - 2;
            const o: number = (h / 2 + 2 * c) / 2;
            if (Math.floor(o) !== o) {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o * 2}/2<span class="text-warning">O<sub>2</sub></span> &#8594; ${replace(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            } else {
                (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `<p class="text-success"><span class="text-warning">H</span>${h}<span class="text-warning">C</span>${c} + ${o}<span class="text-warning">O<sub>2</sub></span> &#8594; ${replace(h / 2)}<span class="text-warning">H<sub>2</sub>O</span> + ${c}<span class="text-warning">CO<sub>2</sub></span></p>`;
                (<HTMLInputElement>document.getElementById('carbons')).value = "";
            }
        }
    }
});
//copyrights (c) 2021 MathFlare.xyz