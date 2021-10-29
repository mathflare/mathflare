(document.querySelector('#button') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const hypo: number = parseFloat((<HTMLInputElement>document.querySelector('#hypo')).value)!;
    const leg: number = parseFloat((<HTMLInputElement>document.querySelector('#side')).value)!;
    if (isNaN(hypo) || isNaN(leg)) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#hypo')).value = "";
        (<HTMLInputElement>document.querySelector('#side')).value = "";
    } else if (hypo <= 0 || leg <= 0) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">Both the leg and the hypotenuse must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#hypo')).value = "";
        (<HTMLInputElement>document.querySelector('#side')).value = "";
    }
    else if (hypo <= leg) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The hypotenuse cannot be smaller than or equal to the triangle's leg</p>`;
        (<HTMLInputElement>document.querySelector('#hypo')).value = "";
        (<HTMLInputElement>document.querySelector('#side')).value = "";
    } else {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">The other leg is ${Math.sqrt(
            hypo ** 2 - leg ** 2
        )}cm (&#8764; ${(Math.sqrt(hypo ** 2 - leg ** 2)).toFixed(3)})</p>`;
        (<HTMLInputElement>document.querySelector('#hypo')).value = "";
        (<HTMLInputElement>document.querySelector('#side')).value = "";
    }
});