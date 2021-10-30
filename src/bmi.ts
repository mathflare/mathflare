(<HTMLButtonElement>document.querySelector('#bmicalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const weight: number = parseFloat((<HTMLInputElement>document.querySelector('#weight')).value)!;
    const height: number = parseFloat((<HTMLInputElement>document.querySelector('#height')).value!) / 100;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#weight')).value = '';
        (<HTMLInputElement>document.querySelector('#height')).value = '';
    };
    const BMICat: (bmi: number) => string = (bmi: number) => {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi < 25) {
            return 'Normal';
        } else if (bmi < 30) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    };
    if (isNaN(weight) || isNaN(height)) {
        (<HTMLParagraphElement>document.querySelector('#bmiout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLParagraphElement>document.querySelector('#bmicatout')).innerHTML = '';
        clearValues();
    } else if (weight <= 0 || height <= 0) {
        (<HTMLParagraphElement>document.querySelector('#bmiout')).innerHTML = `<p class="text-warning">The height and weight must be greater than zero.</p>`;
        (<HTMLParagraphElement>document.querySelector('#bmicatout')).innerHTML = '';
        clearValues();
    } else {
        const bmi: number = weight / (height * height);
        if (bmi === Math.floor(bmi)) {
            (<HTMLParagraphElement>document.querySelector('#bmiout')).innerHTML = `<p class="text-success">BMI: ${bmi}</p>`;
            (<HTMLParagraphElement>document.querySelector('#bmicatout')).innerHTML = `<p class="text-success">Category: ${BMICat(bmi)}</p>`;
            clearValues();
        } else {
            (<HTMLParagraphElement>document.querySelector('#bmiout')).innerHTML = `<p class="text-success">BMI: ${bmi.toFixed(2)}</p>`;
            (<HTMLParagraphElement>document.querySelector('#bmicatout')).innerHTML = `<p class="text-success">Category: ${BMICat(bmi)}</p>`;
            clearValues();
        }
    }
});