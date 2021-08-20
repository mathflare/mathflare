"use strict";
document.getElementById('loancalc').addEventListener('click', (event) => {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('interest').value);
    const term = parseFloat(document.getElementById('term').value);
    const clearValues = () => {
        document.getElementById('amount').value = '';
        document.getElementById('interest').value = '';
        document.getElementById('term').value = '';
    };
    if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
        document.getElementById('loanout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (amount <= 0 || rate <= 0 || term <= 0) {
        document.getElementById('loanout').innerHTML = `<p class="text-warning">All the numbers must be greater than zero</p>`;
        clearValues();
    }
    else {
        const a = Math.pow(1 + (rate / 100 / 12), term * 12);
        const total = (amount * a * (rate / 100 / 12)) / (a - 1);
        if (total === Math.floor(total)) {
            document.getElementById('loanout').innerHTML = `<p class="text-success">EMI: €${total}</p>`;
            clearValues();
        }
        else {
            document.getElementById('loanout').innerHTML = `<p class="text-success">EMI: €${total} (&#8764; €${total.toFixed(2)})</p>`;
            clearValues();
        }
    }
});
