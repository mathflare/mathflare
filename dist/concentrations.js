"use strict";
const W_W = (sol, dsub) => {
    if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
        return '<p class="text-warning">Please enter a valid value</p>';
    }
    else if (sol === 0 || dsub === 0) {
        return '<p class="text-warning">This is not considered a solution</p>';
    }
    else if (sol < dsub) {
        return '<p class="text-warning">The disolved substance cannot be greater than the solution weight</p>';
    }
    else {
        const concentration = dsub / sol * 100;
        if (concentration >= 50) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution weight</p>';
        }
        return `<p class="text-success">The concentration of the solution(${sol}g) with a disolved substance of ${dsub}g is ${concentration}% w/w</p>`;
    }
};
const W_V = (sol, dsub) => {
    if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
        return '<p class="text-warning">Please enter a valid value</p>';
    }
    else if (sol === 0 || dsub === 0) {
        return '<p class="text-warning">This is not considered a solution</p>';
    }
    else if (sol < dsub) {
        return '<p class="text-warning">The disolved substance cannot be greater than the solution weight</p>';
    }
    else {
        const concentration = dsub / sol * 100;
        if (concentration >= 50) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution weight</p>';
        }
        return `<p class="text-success">The concentration of the solution(${sol}ml) with a disolved substance of ${dsub}g is ${concentration}% w/v</p>`;
    }
};
const V_V = (sol, dsub) => {
    if (isNaN(sol) || isNaN(dsub) || sol < 0 || dsub < 0) {
        return '<p class="text-warning">Please enter a valid value</p>';
    }
    else if (sol === 0 || dsub === 0) {
        return '<p class="text-warning">This is not considered a solution</p>';
    }
    else if (sol < dsub) {
        return '<p class="text-warning">The disolved substance cannot be greater than the solution weight</p>';
    }
    else {
        const concentration = dsub / sol * 100;
        if (concentration >= 50) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 50% of the solution volume</p>';
        }
        return `<p class="text-success">The concentration of the solution(${sol}ml) with a disolved substance of ${dsub}ml is ${concentration}% v/v</p>`;
    }
};
document.getElementById('conccalc').addEventListener('click', (event) => {
    event.preventDefault();
    const conc_select = document.getElementById('conc-select').value;
    const solution = parseFloat(document.getElementById('solution').value);
    const disolved_substance = parseFloat(document.getElementById('dsub').value);
    const clearValues = () => {
        document.getElementById('solution').value = '';
        document.getElementById('dsub').value = '';
    };
    if (conc_select === 'ww') {
        document.getElementById('output').innerHTML = `${W_W(solution, disolved_substance)}`;
        clearValues();
    }
    else if (conc_select === 'wv') {
        document.getElementById('output').innerHTML = `${W_V(solution, disolved_substance)}`;
        clearValues();
    }
    else if (conc_select === 'vv') {
        document.getElementById('output').innerHTML = `${V_V(solution, disolved_substance)}`;
        clearValues();
    }
});
document.getElementById('conc-select').addEventListener('change', (event) => {
    event.preventDefault();
    const select = document.getElementById('conc-select').value;
    const sol_input = document.getElementById('solution');
    const dsub_input = document.getElementById('dsub');
    if (select === 'ww') {
        sol_input.placeholder = 'solution weight';
        dsub_input.placeholder = 'disolved substance weight';
    }
    else if (select === 'wv') {
        sol_input.placeholder = 'solution volume';
        dsub_input.placeholder = 'disolved substance weight';
    }
    else if (select === 'vv') {
        sol_input.placeholder = 'solution volume';
        dsub_input.placeholder = 'disolved substance volume';
    }
});
