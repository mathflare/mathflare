(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((< HTMLInputElement > document.getElementById('number')).value)!;
    if (isNaN(num)) {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
    } else {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-success">&#8731;${num} = ${Math.cbrt(num)} (&#8764; ${Math.cbrt(num).toFixed(3)})</p>`;
        (< HTMLInputElement > document.getElementById('number')).value = "";
    }
});