"use strict";
document.querySelector('#bmicalc').addEventListener('click', (event) => {
    event.preventDefault();
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value) / 100;
    const clearValues = () => {
        document.querySelector('#weight').value = '';
        document.querySelector('#height').value = '';
    };
    const BMICat = (bmi) => {
        if (bmi < 18.5) {
            return 'Underweight';
        }
        else if (bmi < 25) {
            return 'Normal';
        }
        else if (bmi < 30) {
            return 'Overweight';
        }
        else {
            return 'Obese';
        }
    };
    if (isNaN(weight) || isNaN(height)) {
        document.querySelector('#bmiout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#bmicatout').innerHTML = '';
        clearValues();
    }
    else if (weight <= 0 || height <= 0) {
        document.querySelector('#bmiout').innerHTML = `<p class="text-warning">The height and weight must be greater than zero.</p>`;
        document.querySelector('#bmicatout').innerHTML = '';
        clearValues();
    }
    else {
        const bmi = weight / (height * height);
        if (bmi === Math.floor(bmi)) {
            document.querySelector('#bmiout').innerHTML = `<p class="text-success">BMI: ${bmi}</p>`;
            document.querySelector('#bmicatout').innerHTML = `<p class="text-success">Category: ${BMICat(bmi)}</p>`;
            clearValues();
        }
        else {
            document.querySelector('#bmiout').innerHTML = `<p class="text-success">BMI: ${bmi.toFixed(2)}</p>`;
            document.querySelector('#bmicatout').innerHTML = `<p class="text-success">Category: ${BMICat(bmi)}</p>`;
            clearValues();
        }
    }
});
