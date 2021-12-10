//copyrights (c) 2021 MathFlare LLC. All rights reserved.
(<HTMLButtonElement>document.querySelector('#puzzlecalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const answer: number = parseFloat((<HTMLInputElement>document.querySelector('#answer')).value)!;
    if (isNaN(answer)) {
        (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;

    } else if (answer !== 184) {
        (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = `<p class="text-warning">False! Try again!</p>`;
    } else {
        (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = `<p class="text-success">Congrats! You solved the puzzle!</p>`;

    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    ((<HTMLInputElement>document.querySelector('#answer')).value) = '';
    (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerText = '';
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.