//copyright (c) 2021 MathFlare LLC.
//ax+c>0
(<HTMLButtonElement>document.getElementById('calc1')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.getElementById('a1')).value)!;
    const c: number = parseFloat((<HTMLInputElement>document.getElementById('c1')).value)!;
    if (isNaN(a) || isNaN(c)) {
        (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('a1')).value = "";
        (<HTMLInputElement>document.getElementById('c1')).value = "";
    } else if (a == 0 && -c == 0) {
        (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
        (<HTMLInputElement>document.getElementById('a1')).value = "";
        (<HTMLInputElement>document.getElementById('c1')).value = "";
    } else if (a == 0) {
        if (-c < 0) {
            (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-warning">The inequality is an identity x &#8714; R</p>`;
            (<HTMLInputElement>document.getElementById('a1')).value = "";
            (<HTMLInputElement>document.getElementById('c1')).value = "";
        } else if (-c > 0) {
            (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
            (<HTMLInputElement>document.getElementById('a1')).value = "";
            (<HTMLInputElement>document.getElementById('c1')).value = "";
        }
    } else if (-c == 0) {
        if (a > 0) {
            (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-success">x > 0</p>`;
            (<HTMLInputElement>document.getElementById('a1')).value = "";
            (<HTMLInputElement>document.getElementById('c1')).value = "";
        } else if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-success">x < 0</p>`;
            (<HTMLInputElement>document.getElementById('a1')).value = "";
            (<HTMLInputElement>document.getElementById('c1')).value = "";
        }
    } else {
        const x: number = -c / a;
        if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-success">x < ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a1')).value = "";
            (<HTMLInputElement>document.getElementById('c1')).value = "";
        } else {
            (<HTMLParagraphElement>document.getElementById('output1')).innerHTML = `<p class="text-success">x > ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a1')).value = "";
            (<HTMLInputElement>document.getElementById('c1')).value = "";
        }
    }
});
//ax+c>=0
(<HTMLButtonElement>document.getElementById('calc2')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.getElementById('a2')).value)!;
    const c: number = parseFloat((<HTMLInputElement>document.getElementById('c2')).value)!;
    if (isNaN(a) || isNaN(c)) {
        (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('a2')).value = "";
        (<HTMLInputElement>document.getElementById('c2')).value = "";
    } else if (a == 0 && -c == 0) {
        (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-warning">The inequality 0x > 0 is a contradiction. The equation 0x = 0 is an identity x &#8714; R</p>`;
        (<HTMLInputElement>document.getElementById('a2')).value = "";
        (<HTMLInputElement>document.getElementById('c2')).value = "";
    } else if (a == 0) {
        if (-c < 0) {
            (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-warning">The inequality 0x > ${-c} is an identity x &#8714; R. The equation 0x = ${-c} is a contradiction </p>`;
            (<HTMLInputElement>document.getElementById('a2')).value = "";
            (<HTMLInputElement>document.getElementById('c2')).value = "";
        } else if (-c > 0) {
            (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-warning">Both the inequality and the equation are a contradiction</p>`;
            (<HTMLInputElement>document.getElementById('a2')).value = "";
            (<HTMLInputElement>document.getElementById('c2')).value = "";
        }
    } else if (-c == 0) {
        if (a > 0) {
            (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-success">x &#8805; 0</p>`;
            (<HTMLInputElement>document.getElementById('a2')).value = "";
            (<HTMLInputElement>document.getElementById('c2')).value = "";
        } else if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-success">x &#8804; 0</p>`;
            (<HTMLInputElement>document.getElementById('a2')).value = "";
            (<HTMLInputElement>document.getElementById('c2')).value = "";
        }
    } else {
        const x: number = -c / a;
        if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-success">x &#8804; ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a2')).value = "";
            (<HTMLInputElement>document.getElementById('c2')).value = "";
        } else {
            (<HTMLParagraphElement>document.getElementById('output2')).innerHTML = `<p class="text-success">x &#8805; ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a2')).value = "";
            (<HTMLInputElement>document.getElementById('c2')).value = "";
        }
    }
});
//ax+c<0
(<HTMLButtonElement>document.getElementById('calc3')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.getElementById('a3')).value)!;
    const c: number = parseFloat((<HTMLInputElement>document.getElementById('c3')).value)!;
    if (isNaN(a) || isNaN(c)) {
        (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('a3')).value = "";
        (<HTMLInputElement>document.getElementById('c3')).value = "";
    } else if (a == 0 && -c == 0) {
        (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
        (<HTMLInputElement>document.getElementById('a3')).value = "";
        (<HTMLInputElement>document.getElementById('c3')).value = "";
    } else if (a == 0) {
        if (-c < 0) {
            (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-warning">The inequality is a contradiction</p>`;
            (<HTMLInputElement>document.getElementById('a3')).value = "";
            (<HTMLInputElement>document.getElementById('c3')).value = "";
        } else if (-c > 0) {
            (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-warning">The inequality is an identity x &#8714; R</p>`;
            (<HTMLInputElement>document.getElementById('a3')).value = "";
            (<HTMLInputElement>document.getElementById('c3')).value = "";
        }
    } else if (-c == 0) {
        if (a > 0) {
            (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-success">x < 0</p>`;
            (<HTMLInputElement>document.getElementById('a3')).value = "";
            (<HTMLInputElement>document.getElementById('c3')).value = "";
        } else if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-success">x > 0</p>`;
            (<HTMLInputElement>document.getElementById('a3')).value = "";
            (<HTMLInputElement>document.getElementById('c3')).value = "";
        }
    } else {
        const x: number = -c / a;
        if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-success">x > ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a3')).value = "";
            (<HTMLInputElement>document.getElementById('c3')).value = "";
        } else {
            (<HTMLParagraphElement>document.getElementById('output3')).innerHTML = `<p class="text-success">x < ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a3')).value = "";
            (<HTMLInputElement>document.getElementById('c3')).value = "";
        }
    }
});
//ax+c<=0
(<HTMLButtonElement>document.getElementById('calc4')).addEventListener('click', (event) => {
    event.preventDefault();
    const a: number = parseFloat((<HTMLInputElement>document.getElementById('a4')).value)!;
    const c: number = parseFloat((<HTMLInputElement>document.getElementById('c4')).value)!;
    if (isNaN(a) || isNaN(c)) {
        (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('a4')).value = "";
        (<HTMLInputElement>document.getElementById('c4')).value = "";
    } if (a == 0 && -c == 0) {
        (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-warning">The inequality 0x < 0 is a contradiction. The equation 0x = 0 is an identity x &#8714; R</p>`;
        (<HTMLInputElement>document.getElementById('a4')).value = "";
        (<HTMLInputElement>document.getElementById('c4')).value = "";
    } else if (a == 0) {
        if (-c < 0) {
            (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-warning">Both the inequality and the equation are a contradiction</p>`;
            (<HTMLInputElement>document.getElementById('a4')).value = "";
            (<HTMLInputElement>document.getElementById('c4')).value = "";
        } else if (-c > 0) {
            (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-warning">The inequality 0x < ${-c} is an identity x &#8714; R. The equation 0x = ${-c} is a contradiction</p>`;
            (<HTMLInputElement>document.getElementById('a4')).value = "";
            (<HTMLInputElement>document.getElementById('c4')).value = "";
        }
    } else if (-c == 0) {
        if (a > 0) {
            (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-success">x &#8804; 0</p>`;
            (<HTMLInputElement>document.getElementById('a4')).value = "";
            (<HTMLInputElement>document.getElementById('c4')).value = "";
        } else if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-success">x &#8805; 0</p>`;
            (<HTMLInputElement>document.getElementById('a4')).value = "";
            (<HTMLInputElement>document.getElementById('c4')).value = "";
        }
    } else {
        const x: number = -c / a;
        if (a < 0) {
            (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-success">x &#8805; ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a4')).value = "";
            (<HTMLInputElement>document.getElementById('c4')).value = "";
        } else {
            (<HTMLParagraphElement>document.getElementById('output4')).innerHTML = `<p class="text-success">x &#8804; ${x}</p>`;
            (<HTMLInputElement>document.getElementById('a4')).value = "";
            (<HTMLInputElement>document.getElementById('c4')).value = "";
        }
    }
});
//copyright (c) 2021 MathFlare LLC.
