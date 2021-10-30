(<HTMLButtonElement>document.querySelector('#solcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const sol_select: string = (<HTMLSelectElement>document.querySelector('#sol-select')).value!;
    const dsubstance: number = parseFloat((<HTMLInputElement>document.querySelector('#soldsub')).value)!;
    const concentration: number = parseFloat((<HTMLInputElement>document.querySelector('#solconcentration')).value!);
    const W_W: (dsub: number, conc: number) => string = (dsub: number, conc: number) => {
        if (isNaN(dsub) || isNaN(conc) || dsub < 0 || conc < 0 || (conc === 0 && dsub > 0 || conc > 0 && dsub === 0)) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (dsub === 0 && conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution weight</p>'
        } else {
            const sol: number = dsub / conc * 100;
            return `<p class="text-success">The solution with concentration ${conc}% w/w and disolved substance of ${dsub}g is ${sol}g</p>`;
        }
    };
    const W_V: (dsub: number, conc: number) => string = (dsub: number, conc: number) => {
        if (isNaN(dsub) || isNaN(conc) || dsub < 0 || conc < 0 || (conc === 0 && dsub > 0 || conc > 0 && dsub === 0)) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (dsub === 0 && conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution weight</p>'
        } else {
            const sol: number = dsub / conc * 100;
            return `<p class="text-success">The solution with concentration ${conc}% w/v and disolved substance of ${dsub}g is ${sol}ml</p>`;
        }
    };
    const V_V: (dsub: number, conc: number) => string = (dsub: number, conc: number) => {
        if (isNaN(dsub) || isNaN(conc) || dsub < 0 || conc < 0 || (conc === 0 && dsub > 0 || conc > 0 && dsub === 0)) {
            return '<p class="text-warning">Please enter a valid value</p>';
        } else if (dsub === 0 && conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        } else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution volume</p>'
        } else {
            const sol: number = dsub / conc * 100;
            return `<p class="text-success">The solution with concentration ${conc}% v/v and disolved substance of ${dsub}ml is ${sol}ml</p>`;
        }
    };
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#soldsub')).value = '';
        (<HTMLInputElement>document.querySelector('#solconcentration')).value = '';
    };
    if (sol_select === 'ww') {
        (<HTMLParagraphElement>document.querySelector('#solout')).innerHTML = `${W_W(dsubstance, concentration)}`;
        clearValues();
    } else if (sol_select === 'wv') {
        (<HTMLParagraphElement>document.querySelector('#solout')).innerHTML = `${W_V(dsubstance, concentration)}`;
        clearValues();
    } else if (sol_select === 'vv') {
        (<HTMLParagraphElement>document.querySelector('#solout')).innerHTML = `${V_V(dsubstance, concentration)}`;
        clearValues();
    }
});

(<HTMLInputElement>document.querySelector('#sol-select')).addEventListener('change', (event: Event) => {
    event.preventDefault();
    const select: string = (<HTMLSelectElement>document.querySelector('#sol-select')).value!;
    const dsub: any = <HTMLInputElement>document.querySelector('#soldsub');
    if (select === 'ww') {
        dsub.placeholder = 'disolved substance weight';
    } else if (select === 'wv') {
        dsub.placeholder = 'disolved substance volume';
    } else if (select === 'vv') {
        dsub.placeholder = 'disolved substance volume';
    }
});