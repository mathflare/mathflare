const W_W = (sol: number, dsub: number) => {
    if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
        return '<p class="text-warning">Please enter a valid value</p>';
    } else if (sol === 0 || dsub === 0) {
        return '<p class="text-warning">This is not considered a solution</p>';
    } else if (sol < dsub) {
        return '<p class="text-warning">The disolved substance cannot be greater that the solution weight</p>';
    } else {
        const concentration: number = dsub / sol * 100;
        return `<p class="text-success">The concentration of the solution(${sol}g) with a disolved substance of ${dsub}g is ${concentration}% w/w</p>`;
    }
};
const W_V = (sol: number, dsub: number) => {
    if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
        return '<p class="text-warning">Please enter a valid value</p>';
    } else if (sol === 0 || dsub === 0) {
        return '<p class="text-warning">This is not considered a solution</p>';
    } else if (sol < dsub) {
        return '<p class="text-warning">The disolved substance cannot be greater that the solution weight</p>';
    } else {
        const concentration: number = dsub / sol * 100;
        return `<p class="text-success">The concentration of the solution(${sol}ml) with a disolved substance of ${dsub}g is ${concentration}% w/v</p>`;
    }
};
const V_V = (sol: number, dsub: number) => {
    if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
        return '<p class="text-warning">Please enter a valid value</p>';
    } else if (sol === 0 || dsub === 0) {
        return '<p class="text-warning">This is not considered a solution</p>';
    } else if (sol < dsub) {
        return '<p class="text-warning">The disolved substance cannot be greater that the solution weight</p>';
    } else {
        const concentration: number = dsub / sol * 100;
        return `<p class="text-success">The concentration of the solution(${sol}ml) with a disolved substance of ${dsub}ml is ${concentration}% v/v</p>`;
    }
};
(<HTMLButtonElement>document.getElementById('conccalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const conc_select: string = (<HTMLSelectElement>document.getElementById('conc-select')).value!;
    const solution: number = parseFloat((<HTMLInputElement>document.getElementById('solution')).value)!;
    const disolved_substance: number = parseFloat((<HTMLInputElement>document.getElementById('dsub')).value!);
    const clearValues = () => {
        (<HTMLInputElement>document.getElementById('solution')).value = '';
        (<HTMLInputElement>document.getElementById('dsub')).value = '';
    };
    if (conc_select === 'ww') {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `${W_W(solution, disolved_substance)}`;
        clearValues();
    } else if (conc_select === 'wv') {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `${W_V(solution, disolved_substance)}`;
        clearValues();
    } else if (conc_select === 'vv') {
        (<HTMLParagraphElement>document.getElementById('output')).innerHTML = `${V_V(solution, disolved_substance)}`;
        clearValues();
    }
});
(<HTMLInputElement>document.getElementById('conc-select')).addEventListener('change', (event) => {
    event.preventDefault();
    const select: string = (<HTMLSelectElement>document.getElementById('conc-select')).value!;
    const sol_input: any = <HTMLInputElement>document.getElementById('solution');
    const dsub_input: any = <HTMLInputElement>document.getElementById('dsub');
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