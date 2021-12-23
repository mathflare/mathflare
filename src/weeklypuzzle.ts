(<HTMLButtonElement>document.querySelector('#puzzlecalc')).addEventListener('click', async (event: Event) => {
    event.preventDefault();
    const guess: string = (<HTMLInputElement>document.querySelector('#guess')).value!;
    const email: string = (<HTMLInputElement>document.querySelector('#email')).value!;
    if (guess.length > 0 && email.length > 0 && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        $.ajax({
            url: 'https://mathflarepuzzlevalidator.herokuapp.com/validate',
            type: 'POST',
            cache: false,
            dataType: "json",
            data: {
                guess: guess,
                userEmail: email
            },
            beforeSend: () => {
                (<HTMLButtonElement>document.querySelector('#puzzlecalc')).disabled = true;
                (<HTMLButtonElement>document.querySelector('#puzzlecalc')).value = 'Checking...';
                (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = '<p>Checking...</p>';
            },
            success: (response: any) => {
                (<HTMLButtonElement>document.querySelector('#puzzlecalc')).disabled = false;
                (<HTMLButtonElement>document.querySelector('#puzzlecalc')).value = 'Check your answer';
                if (response.status === 'success') {
                    (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = `<p class="text-success">${response.message} The answer is ${response.answer}</p>`;
                } else if (response.status === 'failure') {
                    (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = `<p class="text-danger">${response.message} The answer is not ${response.answer}</p>`;
                }
            },
            error: (error: any) => {
                console.error(error);
                (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = `<p class="text-danger">Error! Please try again later.</p>`;
            }
        });
    } else {
        (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerHTML = '<p class="text-warning">Please enter a valid email address and guess</p>';
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    (<HTMLInputElement>document.querySelector('#guess')).value = '';
    (<HTMLInputElement>document.querySelector('#email')).value = '';
    (<HTMLParagraphElement>document.querySelector('#puzzleoutput')).innerText = '';
});