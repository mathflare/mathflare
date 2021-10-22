"use strict";
document.querySelector('#solcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const sol_select = document.querySelector('#sol-select').value;
    const dsubstance = parseFloat(document.querySelector('#soldsub').value);
    const concentration = parseFloat(document.querySelector('#solconcentration').value);
    const W_W = (dsub, conc) => {
        if (isNaN(dsub) || isNaN(conc) || dsub < 0 || conc < 0 || (conc === 0 && dsub > 0 || conc > 0 && dsub === 0)) {
            return '<p class="text-warning">Please enter a valid value</p>';
        }
        else if (dsub === 0 && conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        }
        else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution weight</p>';
        }
        else {
            const sol = dsub / conc * 100;
            return `<p class="text-success">The solution with concentration ${conc}% w/w and disolved substance of ${dsub}g is ${sol}g</p>`;
        }
    };
    const W_V = (dsub, conc) => {
        if (isNaN(dsub) || isNaN(conc) || dsub < 0 || conc < 0 || (conc === 0 && dsub > 0 || conc > 0 && dsub === 0)) {
            return '<p class="text-warning">Please enter a valid value</p>';
        }
        else if (dsub === 0 && conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        }
        else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution weight</p>';
        }
        else {
            const sol = dsub / conc * 100;
            return `<p class="text-success">The solution with concentration ${conc}% w/v and disolved substance of ${dsub}g is ${sol}ml</p>`;
        }
    };
    const V_V = (dsub, conc) => {
        if (isNaN(dsub) || isNaN(conc) || dsub < 0 || conc < 0 || (conc === 0 && dsub > 0 || conc > 0 && dsub === 0)) {
            return '<p class="text-warning">Please enter a valid value</p>';
        }
        else if (dsub === 0 && conc === 0) {
            return '<p class="text-warning">This is not considered a solution</p>';
        }
        else if (conc >= 100) {
            return '<p class="text-warning">The disolved substance cannot substitue more than 100% of the solution volume</p>';
        }
        else {
            const sol = dsub / conc * 100;
            return `<p class="text-success">The solution with concentration ${conc}% v/v and disolved substance of ${dsub}ml is ${sol}ml</p>`;
        }
    };
    const clearValues = () => {
        document.querySelector('#soldsub').value = '';
        document.querySelector('#solconcentration').value = '';
    };
    if (sol_select === 'ww') {
        document.querySelector('#solout').innerHTML = `${W_W(dsubstance, concentration)}`;
        clearValues();
    }
    else if (sol_select === 'wv') {
        document.querySelector('#solout').innerHTML = `${W_V(dsubstance, concentration)}`;
        clearValues();
    }
    else if (sol_select === 'vv') {
        document.querySelector('#solout').innerHTML = `${V_V(dsubstance, concentration)}`;
        clearValues();
    }
});
document.querySelector('#sol-select').addEventListener('change', (event) => {
    event.preventDefault();
    const select = document.querySelector('#sol-select').value;
    const dsub = document.querySelector('#soldsub');
    if (select === 'ww') {
        dsub.placeholder = 'disolved substance weight';
    }
    else if (select === 'wv') {
        dsub.placeholder = 'disolved substance volume';
    }
    else if (select === 'vv') {
        dsub.placeholder = 'disolved substance volume';
    }
});
