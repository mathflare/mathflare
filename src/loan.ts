(<HTMLButtonElement>document.querySelector('#loancalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const amount: number = parseFloat((<HTMLInputElement>document.querySelector('#amount')).value)!;
    const rate: number = parseFloat((<HTMLInputElement>document.querySelector('#interest')).value)!;
    const term: number = parseFloat((<HTMLInputElement>document.querySelector('#term')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#amount')).value = '';
        (<HTMLInputElement>document.querySelector('#interest')).value = '';
        (<HTMLInputElement>document.querySelector('#term')).value = '';
    };
    if (isNaN(amount) || isNaN(rate) || isNaN(term) || rate > 100 || term > 1000) {
        (<HTMLParagraphElement>document.querySelector('#loanout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (amount <= 0 || rate <= 0 || term <= 0) {
        (<HTMLParagraphElement>document.querySelector('#loanout')).innerHTML = `<p class="text-warning">All the numbers must be greater than zero</p>`;
        clearValues();
    } else {
        const a: number = Math.pow(1 + (rate / 100 / 12), term * 12);
        const total: number = (amount * a * (rate / 100 / 12)) / (a - 1);
        (<HTMLParagraphElement>document.querySelector('#loanout')).innerHTML = `<p class="text-success">EMI: ${(<HTMLInputElement>document.querySelector('#currencyselect')).value}${total.toFixed(2)}</p>`;
        clearValues();
    }
});