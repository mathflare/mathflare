(document.getElementById('button')as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    var input: string = (< HTMLInputElement > document.getElementById('input')).value !;
    if (input == "" || input.charAt(0) == "," || input.charAt(input.length - 1) == ",") {
        (document.getElementById('output')as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
        (< HTMLInputElement > document.getElementById('input')).value = "";
        console.error('empty or not correct format');
    } else {
        var isInvalid: boolean = false;
        for (let i: number = 0; i < input.length; i++) {
            if (isNaN(parseFloat(input[i])) && input[i] != ',' && input[i] != ' ') {
                isInvalid = true;
            }
        }
        if (isInvalid) {
            (<HTMLParagraphElement> document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
            console.error('invalid ' + isNaN(parseFloat("-4.4")));
            (< HTMLInputElement > document.getElementById('input')).value = "";
        } else {
            var array: any = JSON.parse("[" + input + "]");
            var total: number = 0;
            for (var i: any = 0; i < array.length; i++) {
                total += parseFloat(array[i]);
            }
            const avg: number = total / array.length;
            if (isNaN(avg)) {
                (<HTMLParagraphElement> document.getElementById('output')).innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
                (< HTMLInputElement > document.getElementById('input')).value = "";
                console.error('nan avg')
            } else {
                (<HTMLParagraphElement> document.getElementById('output')).innerHTML = `<p class="text-success">The average of all these numbers is ${
                    avg
                }</p>`;
                (< HTMLInputElement > document.getElementById('input')).value = "";
            }
        }

    }
});
