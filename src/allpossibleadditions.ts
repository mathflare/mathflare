//copyrights (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#natnumbercalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const num: number = parseFloat((<HTMLInputElement>document.querySelector('#num')).value)!;

    if (isNaN(num)) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (num < 0) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-warning">The number must be positive</p>`;
    } else if (Math.floor(num) !== num) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-warning">The number must be an integer</p>`;
    } else if (num % 2 !== 0) {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-success">All the additions for number ${num} are ${((num - 1) / 2) + 1}</p>`;
        let x: number = num;
        let y: number = 0;
        for (let i = 0; i < ((num - 1) / 2) + 1; i++) {
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            console.log(x, y);
            x--;
            y++;
        }
    } else {
        (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#natnumberout')).innerHTML = `<p class="text-success">All the additions for number ${num} are ${(num / 2) + 1}</p>`;
        let x: number = num;
        let y: number = 0;
        for (let i = 0; i < (num / 2) + 1; i++) {
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = `<td colspan="1">${x} + ${y}</td>`;
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            console.log(x, y);
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