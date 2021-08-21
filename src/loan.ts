(<HTMLButtonElement>document.getElementById('loancalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const amount: number = parseFloat((<HTMLInputElement>document.getElementById('amount')).value)!;
    const rate: number = parseFloat((<HTMLInputElement>document.getElementById('interest')).value)!;
    const term: number = parseFloat((<HTMLInputElement>document.getElementById('term')).value)!;
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.getElementById('amount')).value = '';
        (<HTMLInputElement>document.getElementById('interest')).value = '';
        (<HTMLInputElement>document.getElementById('term')).value = '';
    };
    if (isNaN(amount) || isNaN(rate) || isNaN(term) || rate > 100 || term > 1000) {
        (<HTMLParagraphElement>document.getElementById('loanout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (amount <= 0 || rate <= 0 || term <= 0) {
        (<HTMLParagraphElement>document.getElementById('loanout')).innerHTML = `<p class="text-warning">All the numbers must be greater than zero</p>`;
        clearValues();
    } else {
        const a: number = Math.pow(1 + (rate / 100 / 12), term * 12);
        const total: number = (amount * a * (rate / 100 / 12)) / (a - 1);
        (<HTMLParagraphElement>document.getElementById('loanout')).innerHTML = `<p class="text-success">EMI: ${(<HTMLInputElement>document.getElementById('currencyselect')).value}${total.toFixed(2)}</p>`;
        clearValues();
    }
});