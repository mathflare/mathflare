"use strict";
document.querySelector('#natnumbercalc').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.querySelector('#num').value);
    if (isNaN(num)) {
        document.querySelector('#tablebody').innerText = '';
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">Please enter a valid value</td>`;
        tr.classList.add('text-warning');
        document.querySelector('#tablebody').appendChild(tr);
    }
    else if (num < 0) {
        document.querySelector('#tablebody').innerText = '';
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">The number must be positive</td>`;
        tr.classList.add('text-warning');
        document.querySelector('#tablebody').appendChild(tr);
    }
    else if (Math.floor(num) !== num) {
        document.querySelector('#tablebody').innerText = '';
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">The number must be an integer</td>`;
        tr.classList.add('text-warning');
        document.querySelector('#tablebody').appendChild(tr);
    }
    else if (num > 100000) {
        document.querySelector('#tablebody').innerText = '';
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">The number is too big(it must be <= 100000</td>`;
        tr.classList.add('text-warning');
        document.querySelector('#tablebody').appendChild(tr);
    }
    else if (num % 2 !== 0) {
        document.querySelector('#tablebody').innerText = '';
        const possadd = ((num - 1) / 2) + 1;
        document.querySelector('#natnumberout').innerHTML = `<p class="text-success">All the additions for number ${num} are ${possadd}</p>`;
        let x = num;
        let y = 0;
        for (let i = 0; i < possadd; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            document.querySelector('#tablebody').appendChild(tr);
            x--;
            y++;
        }
    }
    else {
        document.querySelector('#tablebody').innerText = '';
        const possadd = ((num - 1) / 2) + 1;
        document.querySelector('#natnumberout').innerHTML = `<p class="text-success">All the additions for number ${num} are ${possadd}</p>`;
        let x = num;
        let y = 0;
        for (let i = 0; i < possadd; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            document.querySelector('#tablebody').appendChild(tr);
            x--;
            y++;
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    document.querySelector('#tablebody').innerText = '';
    document.querySelector('#num').innerText = '';
    document.querySelector('#natnumberout').innerText = '';
});
