(<HTMLButtonElement>document.querySelector('#conccalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const conc_select: string = (<HTMLSelectElement>document.querySelector('#conc-select')).value!;
    const solution: number = parseFloat((<HTMLInputElement>document.querySelector('#concsolution')).value)!;
    const disolved_substance: number = parseFloat((<HTMLInputElement>document.querySelector('#concdsub')).value!);
    const W_W: (sol: number, dsub: number) => string = (sol: number, dsub: number) => {
        if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (sol === 0 || dsub === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (sol < dsub) {
            return '<p class="text-warning">The disolved substance cannot be greater than the solution weight</p>';
        } else {
            const concentration: number = dsub / sol * 100;
            if (concentration >= 50) {
                return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution weight</p>';
            }
            return `<p class="text-success">The concentration of the solution(${sol}g) with a disolved substance of ${dsub}g is ${concentration}% w/w</p>`;
        }
    };
    const W_V: (sol: number, dsub: number) => string = (sol: number, dsub: number) => {
        if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (sol === 0 || dsub === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (sol < dsub) {
            return '<p class="text-warning">The disolved substance cannot be greater than the solution weight</p>';
        } else {
            const concentration: number = dsub / sol * 100;
            if (concentration >= 50) {
                return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution weight</p>';
            }
            return `<p class="text-success">The concentration of the solution(${sol}ml) with a disolved substance of ${dsub}g is ${concentration}% w/v</p>`;
        }
    };
    const V_V: (sol: number, dsub: number) => string = (sol: number, dsub: number) => {
        if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (sol === 0 || dsub === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (sol < dsub) {
            return '<p class="text-warning">The disolved substance cannot be greater than the solution weight</p>';
        } else {
            const concentration: number = dsub / sol * 100;
            if (concentration >= 50) {
                return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution volume</p>';
            }
            return `<p class="text-success">The concentration of the solution(${sol}ml) with a disolved substance of ${dsub}ml is ${concentration}% v/v</p>`;
        }
    };
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#concsolution')).value = '';
        (<HTMLInputElement>document.querySelector('#concdsub')).value = '';
    };
    if (conc_select === 'ww') {
        (<HTMLParagraphElement>document.querySelector('#concout')).innerHTML = `${W_W(solution, disolved_substance)}`;
        clearValues();
    } else if (conc_select === 'wv') {
        (<HTMLParagraphElement>document.querySelector('#concout')).innerHTML = `${W_V(solution, disolved_substance)}`;
        clearValues();
    } else if (conc_select === 'vv') {
        (<HTMLParagraphElement>document.querySelector('#concout')).innerHTML = `${V_V(solution, disolved_substance)}`;
        clearValues();
    }
});

(<HTMLInputElement>document.querySelector('#conc-select')).addEventListener('change', (event) => {
    event.preventDefault();
    const select: string = (<HTMLSelectElement>document.querySelector('#conc-select')).value!;
    const sol_input: any = <HTMLInputElement>document.querySelector('#concsolution');
    const dsub_input: any = <HTMLInputElement>document.querySelector('#concdsub');
    if (select === 'ww') {
        sol_input.placeholder = 'solution weight';
        dsub_input.placeholder = 'disolved substance weight';
    } else if (select === 'wv') {
        sol_input.placeholder = 'solution volume';
        dsub_input.placeholder = 'disolved substance weight';
    } else if (select === 'vv') {
        sol_input.placeholder = 'solution volume';
        dsub_input.placeholder = 'disolved substance volume';
    }
});