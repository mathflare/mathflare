"use strict";
document.querySelector('#puzzlecalc').addEventListener('click', (event) => {
    event.preventDefault();
    const answer = parseFloat(document.querySelector('#answer').value);
    if (isNaN(answer)) {
        document.querySelector('#puzzleoutput').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (answer !== 184) {
        document.querySelector('#puzzleoutput').innerHTML = `<p class="text-warning">False! Try again!</p>`;
    }
    else {
        document.querySelector('#puzzleoutput').innerHTML = `<p class="text-success">Congrats! You solved the puzzle!</p>`;
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    event.preventDefault();
    (document.querySelector('#answer').value) = '';
    document.querySelector('#puzzleoutput').innerText = '';
});
