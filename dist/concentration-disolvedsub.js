"use strict";
document.querySelector('#dsubcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const dsub_select = document.querySelector('#dsub-select').value;
    const solution = parseFloat(document.querySelector('#dsubsolution').value);
    const concentration = parseFloat(document.querySelector('#dsubconcentration').value);
    const W_W = (sol, conc) => {
        if (isNaN(sol) || isNaN(conc) || sol < 0 || conc < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        }
        else if (sol === 0 || conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        }
        else if (conc >= 50) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution weight</p>';
        }
        else {
            const dsub = conc / 100 * sol;
            return `<p class="text-success">The disolved substance of the solution(${sol}g) with a concentration of ${conc}% w/w is ${dsub}g</p>`;
        }
    };
    const W_V = (sol, conc) => {
        if (isNaN(sol) || isNaN(conc) || sol < 0 || conc < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        }
        else if (sol === 0 || conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        }
        else if (conc >= 50) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution weight</p>';
        }
        else {
            const dsub = conc / 100 * sol;
            return `<p class="text-success">The disolved substance of the solution(${sol}ml) with a concentration of ${conc}% w/v is ${dsub}g</p>`;
        }
    };
    const V_V = (sol, conc) => {
        if (isNaN(sol) || isNaN(conc) || sol < 0 || conc < 0) {
            return '<p class="text-warning">Please enter a valid value</p>';
        }
        else if (sol === 0 || conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        }
        else if (conc >= 50) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution volume</p>';
        }
        else {
            const dsub = conc / 100 * sol;
            return `<p class="text-success">The disolved substance of the solution(${sol}ml) with a concentration of ${conc}% v/v is ${dsub}ml</p>`;
        }
    };
    const clearValues = () => {
        document.querySelector('#dsubsolution').value = '';
        document.querySelector('#dsubconcentration').value = '';
    };
    if (dsub_select === 'ww') {
        document.querySelector('#dsubout').innerHTML = `${W_W(solution, concentration)}`;
        clearValues();
    }
    else if (dsub_select === 'wv') {
        document.querySelector('#dsubout').innerHTML = `${W_V(solution, concentration)}`;
        clearValues();
    }
    else if (dsub_select === 'vv') {
        document.querySelector('#dsubout').innerHTML = `${V_V(solution, concentration)}`;
        clearValues();
    }
});
document.querySelector('#dsub-select').addEventListener('change', (event) => {
    event.preventDefault();
    const select = document.querySelector('#dsub-select').value;
    const sol_input = document.querySelector('#dsubsolution');
    if (select === 'ww') {
        sol_input.placeholder = 'solution weight';
    }
    else if (select === 'wv') {
        sol_input.placeholder = 'solution volume';
    }
    else if (select === 'vv') {
        sol_input.placeholder = 'solution volume';
    }
});
