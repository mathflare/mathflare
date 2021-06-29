"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    var input = document.getElementById('input').value;
    if (input == "" || input.charAt(0) == "," || input.charAt(input.length - 1) == ",") {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
        document.getElementById('input').value = "";
        console.error('empty or not correct format');
    }
    else {
        var isInvalid = false;
        for (let i = 0; i < input.length; i++) {
            if (isNaN(parseFloat(input[i])) && input[i] != ',' && input[i] != ' ') {
                isInvalid = true;
            }
        }
        if (isInvalid) {
            document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
            console.error('invalid ' + isNaN(parseFloat("-4.4")));
            document.getElementById('input').value = "";
        }
        else {
            var array = JSON.parse("[" + input + "]");
            var total = 0;
            for (var i = 0; i < array.length; i++) {
                total += parseFloat(array[i]);
            }
            const avg = total / array.length;
            if (isNaN(avg)) {
                document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
                document.getElementById('input').value = "";
                console.error('nan avg');
            }
            else {
                document.getElementById('output').innerHTML = `<p class="text-success">The average of all these numbers is ${avg}</p>`;
                document.getElementById('input').value = "";
            }
        }
    }
});
