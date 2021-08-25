"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    let input = document.querySelector('#input').value;
    input = input.replace(' ', '');
    if (input == "" || input.charAt(0) == "," || input.charAt(input.length - 1) == ",") {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
        document.querySelector('#input').value = "";
        console.error('empty or not correct format');
    }
    else {
        const array = input.split(',');
        let isInvalid = false;
        for (let i = 0; i < array.length; i++) {
            if (isNaN(parseFloat(array[i]))) {
                isInvalid = true;
                break;
            }
        }
        if (isInvalid) {
            document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
            document.querySelector('#input').value = "";
            console.error('NaN');
        }
        else {
            const array = input.split(',').map(Number);
            let total = 0;
            for (var i = 0; i < array.length; i++) {
                total += array[i];
            }
            const avg = total / array.length;
            if (isNaN(avg)) {
                document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
                document.querySelector('#input').value = "";
            }
            else {
                document.querySelector('#output').innerHTML = `<p class="text-success">The average of all these numbers is ${avg}</p>`;
                document.querySelector('#input').value = "";
            }
        }
    }
});
