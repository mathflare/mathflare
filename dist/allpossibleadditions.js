"use strict";
document.querySelector('#natnumbercalc').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.querySelector('#num').value);
    if (isNaN(num)) {
        document.querySelector('#tablebody').innerText = '';
        document.querySelector('#natnumberout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (num < 0) {
        document.querySelector('#tablebody').innerText = '';
        document.querySelector('#natnumberout').innerHTML = `<p class="text-warning">The number must be positive</p>`;
    }
    else if (Math.floor(num) !== num) {
        document.querySelector('#tablebody').innerText = '';
        document.querySelector('#natnumberout').innerHTML = `<p class="text-warning">The number must be an integer</p>`;
    }
    else if (num % 2 !== 0) {
        document.querySelector('#tablebody').innerText = '';
        document.querySelector('#natnumberout').innerHTML = `<p class="text-success">All the additions for number ${num} are ${((num - 1) / 2) + 1}</p>`;
        let x = num;
        let y = 0;
        for (let i = 0; i < ((num - 1) / 2) + 1; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            document.querySelector('#tablebody').appendChild(tr);
            console.log(x, y);
            x--;
            y++;
        }
    }
    else {
        document.querySelector('#tablebody').innerText = '';
        document.querySelector('#natnumberout').innerHTML = `<p class="text-success">All the additions for number ${num} are ${(num / 2) + 1}</p>`;
        let x = num;
        let y = 0;
        for (let i = 0; i < (num / 2) + 1; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            document.querySelector('#tablebody').appendChild(tr);
            console.log(x, y);
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
