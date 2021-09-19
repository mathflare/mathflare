"use strict";
document.querySelector('#comprnacalc').addEventListener('click', (event) => {
    event.preventDefault();
    const rna_string = document.querySelector('#rnastring').value;
    const complementaryRna = (strand) => {
        let result = '';
        for (let i = 0; i < strand.length; i++) {
            switch (strand[i]) {
                case 'A':
                    result += 'U';
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
                    result += 'X';
                    break;
            }
        }
        return result;
    };
    if (rna_string.length === 0) {
        document.querySelector('#comprnaout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#rnastring').value = '';
    }
    else {
        const select = document.querySelector('#select').value;
        if (select === 'comp') {
            if (complementaryRna(rna_string).includes('X')) {
                document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Complementary sequence: ${complementaryRna(rna_string)}</p>`;
                document.querySelector('#rnastring').value = '';
                document.querySelector('#hasxmessage').innerText = 'X means that a character you entered in the sequence is not valid.';
            }
            else {
                document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Complementary sequence: ${complementaryRna(rna_string)}</p>`;
                document.querySelector('#rnastring').value = '';
                document.querySelector('#hasxmessage').innerText = '';
            }
        }
        else if (select === 'rev') {
            document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Reverse sequence: ${rna_string.split('').reverse().join('')}</p>`;
            document.querySelector('#rnastring').value = '';
            document.querySelector('#hasxmessage').innerText = '';
        }
        else if (select === 'rev-comp') {
            if (complementaryRna(rna_string).includes('X')) {
                document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Reverse complementary sequence: ${complementaryRna(rna_string).split('').reverse().join('')}</p>`;
                document.querySelector('#rnastring').value = '';
                document.querySelector('#hasxmessage').innerText = 'X means that a character you entered in the sequence is not valid.';
            }
            else {
                document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Reverse complementary sequence: ${complementaryRna(rna_string).split('').reverse().join('')}</p>`;
                document.querySelector('#rnastring').value = '';
                document.querySelector('#hasxmessage').innerText = '';
            }
        }
    }
});
