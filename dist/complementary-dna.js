"use strict";
document.querySelector('#compdnacalc').addEventListener('click', (event) => {
    event.preventDefault();
    const dna_string = document.querySelector('#dnastring').value;
    const complementaryDna = (strand) => {
        let result = '';
        for (let i = 0; i < strand.length; i++) {
            switch (strand[i]) {
                case 'A':
                    result += 'T';
                    break;
                case 'T':
                    result += 'A';
                    break;
                case 'G':
                    result += 'C';
                    break;
                case 'C':
                    result += 'G';
                    break;
                default:
                    result += '<span class="text-warning">X</span>';
                    break;
            }
        }
        return result;
    };
    if (dna_string.length === 0) {
        document.querySelector('#compdnaout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#dnastring').value = '';
    }
    else {
        const select = document.querySelector('#select').value;
        if (select === 'comp') {
            if (complementaryDna(dna_string).includes('X')) {
                document.querySelector('#compdnaout').innerHTML = `<p class="text-success">${complementaryDna(dna_string)}</p>`;
                document.querySelector('#dnastring').value = '';
                document.querySelector('#hasxmessage').innerText = 'X means that a character you entered in the sequence is not valid.';
            }
            else {
                document.querySelector('#compdnaout').innerHTML = `<p class="text-success">${complementaryDna(dna_string)}</p>`;
                document.querySelector('#dnastring').value = '';
                document.querySelector('#hasxmessage').innerText = '';
            }
        }
        else if (select === 'rev') {
            document.querySelector('#compdnaout').innerHTML = `<p class="text-success">${dna_string.split('').reverse().join('')}</p>`;
            document.querySelector('#dnastring').value = '';
            document.querySelector('#hasxmessage').innerText = '';
        }
        else if (select === 'rev-comp') {
            if (complementaryDna(dna_string).includes('X')) {
                document.querySelector('#compdnaout').innerHTML = `<p class="text-success">${complementaryDna(dna_string).split('').reverse().join('')}</p>`;
                document.querySelector('#dnastring').value = '';
                document.querySelector('#hasxmessage').innerText = 'X means that a character you entered in the sequence is not valid.';
            }
            else {
                document.querySelector('#compdnaout').innerHTML = `<p class="text-success">${complementaryDna(dna_string).split('').reverse().join('')}</p>`;
                document.querySelector('#dnastring').value = '';
                document.querySelector('#hasxmessage').innerText = '';
            }
        }
    }
});
