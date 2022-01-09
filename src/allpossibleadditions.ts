//copyrights (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#natnumbercalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.querySelector('#num')).value)!;

    if (isNaN(num)) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">Please enter a valid value</td>`;
        tr.classList.add('text-warning');
        (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        //(<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (num < 0) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">The number must be positive</td>`;
        tr.classList.add('text-warning');
        (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        //(<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-warning">The number must be positive</p>`;
    } else if (Math.floor(num) !== num) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">The number must be an integer</td>`;
        tr.classList.add('text-warning');
        (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        //(<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-warning">The number must be an integer</p>`;
    } else if (num > 100000) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = `<td colspan="1">The number is too big(it must be <= 100000</td>`;
        tr.classList.add('text-warning');
        (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
    } else if (num % 2 !== 0) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        const possadd: number = ((num - 1) / 2) + 1;
        (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-success">All the additions for number ${num} are ${possadd}</p>`;
        let x: number = num;
        let y: number = 0;
        for (let i = 0; i < possadd; i++) {
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            x--;
            y++;
        }
    } else {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        const possadd: number = ((num - 1) / 2) + 1;
        (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-success">All the additions for number ${num} are ${possadd}</p>`;
        let x: number = num;
        let y: number = 0;
        for (let i = 0; i < possadd; i++) {
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            x--;
            y++;
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
    (<HTMLInputElement>document.querySelector('#num')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerText = '';
});
//copyrights (c) 2021 MathFlare.xyz