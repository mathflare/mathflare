"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.querySelector('#puzzlecalc').addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const guess = document.querySelector('#guess').value;
    const email = document.querySelector('#email').value;
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
                document.querySelector('#puzzlecalc').disabled = true;
                document.querySelector('#puzzlecalc').value = 'Checking...';
                document.querySelector('#puzzleoutput').innerHTML = '<p>Checking...</p>';
            },
            success: (response) => {
                document.querySelector('#puzzlecalc').disabled = false;
                document.querySelector('#puzzlecalc').value = 'Check your answer';
                if (response.status === 'success') {
                    document.querySelector('#puzzleoutput').innerHTML = `<p class="text-success">${response.message} The answer is ${response.answer}</p>`;
                }
                else if (response.status === 'failure') {
                    document.querySelector('#puzzleoutput').innerHTML = `<p class="text-danger">${response.message} The answer is not ${response.answer}</p>`;
                }
            },
            error: (error) => {
                console.error(error);
                document.querySelector('#puzzleoutput').innerHTML = `<p class="text-danger">Error! Please try again later.</p>`;
            }
        });
    }
    else {
        document.querySelector('#puzzleoutput').innerHTML = '<p class="text-warning">Please enter a valid email address and guess</p>';
    }
}));
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#guess').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#puzzleoutput').innerText = '';
});
