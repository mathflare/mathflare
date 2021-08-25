"use strict";
document.querySelector('#loancalc').addEventListener('click', (event) => {
    event.preventDefault();
    const amount = parseFloat(document.querySelector('#amount').value);
    const rate = parseFloat(document.querySelector('#interest').value);
    const term = parseFloat(document.querySelector('#term').value);
    const clearValues = () => {
        document.querySelector('#amount').value = '';
        document.querySelector('#interest').value = '';
        document.querySelector('#term').value = '';
    };
    if (isNaN(amount) || isNaN(rate) || isNaN(term) || rate > 100 || term > 1000) {
        document.querySelector('#loanout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (amount <= 0 || rate <= 0 || term <= 0) {
        document.querySelector('#loanout').innerHTML = `<p class="text-warning">All the numbers must be greater than zero</p>`;
        clearValues();
    }
    else {
        const a = Math.pow(1 + (rate / 100 / 12), term * 12);
        const total = (amount * a * (rate / 100 / 12)) / (a - 1);
        document.querySelector('#loanout').innerHTML = `<p class="text-success">EMI: ${document.querySelector('#currencyselect').value}${total.toFixed(2)}</p>`;
        clearValues();
    }
});
