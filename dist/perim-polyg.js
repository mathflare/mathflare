"use strict";
document.getElementById('polyg').addEventListener('click', (event) => {
    event.preventDefault();
    var input = document.getElementById('sides').value;
    if (input == "" || input.charAt(0) == "," || input.charAt(input.length - 1) == ",") {
        document.getElementById('output6').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
        document.getElementById('sides').value = "";
    }
    else {
        let isInvalid = false;
        for (let i = 0; i < input.length; i++) {
            if (isNaN(parseFloat(input[i])) && input[i] != ',' && input[i] != ' ' || (input[i] == ',' && input[i + 1] == ',')) {
                isInvalid = true;
                break;
            }
        }
        if (isInvalid) {
            document.getElementById('output6').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
            document.getElementById('sides').value = "";
        }
        else {
            var array = JSON.parse("[" + input + "]");
            var hasNegative = false;
            for (let i = 0; i < array.length; i++) {
                if (array[i] <= 0) {
                    hasNegative = true;
                    break;
                }
            }
            if (hasNegative) {
                document.getElementById('output6').innerHTML = `<p class="text-warning">All the segments must be a positive number</p>`;
                document.getElementById('sides').value = "";
            }
            else if (array.length < 3) {
                document.getElementById('output6').innerHTML = `<p class="text-warning">There is no polygon with less than 3 segments</p>`;
                document.getElementById('sides').value = "";
            }
            else {
                document.getElementById('output6').innerHTML = `<p class="text-success">C = ${array.reduce((a, b) => a + b, 0)}cm</p>`;
                document.getElementById('sides').value = "";
            }
        }
    }
});
