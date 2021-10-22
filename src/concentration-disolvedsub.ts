(<HTMLButtonElement>document.querySelector('#dsubcalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const dsub_select: string = (<HTMLSelectElement>document.querySelector('#dsub-select')).value!;
    const solution: number = parseFloat((<HTMLInputElement>document.querySelector('#dsubsolution')).value)!;
    const concentration: number = parseFloat((<HTMLInputElement>document.querySelector('#dsubconcentration')).value!);
    const W_W: (sol: number, conc: number) => string = (sol: number, conc: number) => {
        if (isNaN(sol) || isNaN(conc) || sol < 0 || conc < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (sol === 0 || conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution weight</p>'
        } else {
            const dsub: number = conc / 100 * sol;
            return `<p class="text-success">The disolved substance of the solution(${sol}g) with a concentration of ${conc}% w/w is ${dsub}g</p>`;
        }
    };
    const W_V: (sol: number, conc: number) => string = (sol: number, conc: number) => {
        if (isNaN(sol) || isNaN(conc) || sol < 0 || conc < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (sol === 0 || conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution weight</p>'
        } else {
            const dsub: number = conc / 100 * sol;
            return `<p class="text-success">The disolved substance of the solution(${sol}ml) with a concentration of ${conc}% w/v is ${dsub}g</p>`;
        }
    };
    const V_V: (sol: number, conc: number) => string = (sol: number, conc: number) => {
        if (isNaN(sol) || isNaN(conc) || sol < 0 || conc < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (sol === 0 || conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution volume</p>'
        } else {
            const dsub: number = conc / 100 * sol;
            return `<p class="text-success">The disolved substance of the solution(${sol}ml) with a concentration of ${conc}% v/v is ${dsub}ml</p>`;
        }
    };
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#dsubsolution')).value = '';
        (<HTMLInputElement>document.querySelector('#dsubconcentration')).value = '';
    };
    if (dsub_select === 'ww') {
        (<HTMLParagraphElement>document.querySelector('#dsubout')).innerHTML = `${W_W(solution, concentration)}`;
        clearValues();
    } else if (dsub_select === 'wv') {
        (<HTMLParagraphElement>document.querySelector('#dsubout')).innerHTML = `${W_V(solution, concentration)}`;
        clearValues();
    } else if (dsub_select === 'vv') {
        (<HTMLParagraphElement>document.querySelector('#dsubout')).innerHTML = `${V_V(solution, concentration)}`;
        clearValues();
    }
});

(<HTMLInputElement>document.querySelector('#dsub-select')).addEventListener('change', (event) => {
    event.preventDefault();
    const select: string = (<HTMLSelectElement>document.querySelector('#dsub-select')).value!;
    const sol_input: any = <HTMLInputElement>document.querySelector('#dsubsolution');
    if (select === 'ww') {
        sol_input.placeholder = 'solution weight';
    } else if (select === 'wv') {
        sol_input.placeholder = 'solution volume';
    } else if (select === 'vv') {
        sol_input.placeholder = 'solution volume';
    }
});