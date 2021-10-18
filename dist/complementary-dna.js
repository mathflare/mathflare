"use strict";
document.querySelector('#compdnacalc').addEventListener('click', (event) => {
    event.preventDefault();
    const dna_string = document.querySelector('#dnastring').value.replace(/\s/g, '').toUpperCase();
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
                    result += 'X';
                    break;
            }
        }
        percentageDna(result);
        return result;
    };
    const revDna = (strand) => {
        let result = '';
        for (let i = strand.length - 1; i >= 0; i--) {
            if (strand[i] !== 'A' && strand[i] !== 'G' && strand[i] !== 'C' && strand[i] !== 'T') {
                result += 'X';
            }
            else {
                result += strand[i];
            }
        }
        percentageDna(result);
        return result;
    };
    const revComplementaryDna = (strand) => {
        let result = '';
        for (let i = strand.length - 1; i >= 0; i--) {
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
                    result += 'X';
                    break;
            }
        }
        percentageDna(result);
        return result;
    };
    const percentageDna = (compldna) => {
        let a_count = 0;
        let t_count = 0;
        let c_count = 0;
        let g_count = 0;
        let x_count = 0;
        for (let i = 0; i < compldna.length; i++) {
            if (compldna[i] === 'A') {
                a_count++;
            }
            else if (compldna[i] === 'T') {
                t_count++;
            }
            else if (compldna[i] === 'G') {
                g_count++;
            }
            else if (compldna[i] === 'C') {
                c_count++;
            }
            else {
                x_count++;
            }
        }
        const a_perc = a_count / compldna.length * 100;
        const t_perc = t_count / compldna.length * 100;
        const c_perc = c_count / compldna.length * 100;
        const g_perc = g_count / compldna.length * 100;
        const x_perc = x_count / compldna.length * 100;
        document.querySelector('#a_count').innerText = `${a_count}`;
        document.querySelector('#a_perc').innerText = `${a_perc.toFixed(2)}`;
        document.querySelector('#t_count').innerText = `${t_count}`;
        document.querySelector('#t_perc').innerText = `${t_perc.toFixed(2)}`;
        document.querySelector('#c_count').innerText = `${c_count}`;
        document.querySelector('#c_perc').innerText = `${c_perc.toFixed(2)}`;
        document.querySelector('#g_count').innerText = `${g_count}`;
        document.querySelector('#g_perc').innerText = `${g_perc.toFixed(2)}`;
        document.querySelector('#error_count').innerText = `${x_count}`;
        document.querySelector('#error_perc').innerText = `${x_perc.toFixed(2)}`;
    };
    if (dna_string.length === 0) {
        document.querySelector('#compdnaout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a_count').innerText = '';
        document.querySelector('#a_perc').innerText = '';
        document.querySelector('#t_count').innerText = '';
        document.querySelector('#t_perc').innerText = '';
        document.querySelector('#c_count').innerText = '';
        document.querySelector('#c_perc').innerText = '';
        document.querySelector('#g_count').innerText = '';
        document.querySelector('#g_perc').innerText = '';
        document.querySelector('#error_count').innerText = '';
        document.querySelector('#error_perc').innerText = '';
    }
    else {
        const select = document.querySelector('#select').value;
        if (select === 'comp') {
            document.querySelector('#compdnaout').innerHTML = `<p class="text-success">Complementary sequence: ${complementaryDna(dna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
        else if (select === 'rev') {
            document.querySelector('#compdnaout').innerHTML = `<p class="text-success">Reverse sequence: ${revDna(dna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
        else if (select === 'rev-comp') {
            document.querySelector('#compdnaout').innerHTML = `<p class="text-success">Reverse complementary sequence: ${revComplementaryDna(dna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    document.querySelector('#dnastring').value = '';
    document.querySelector('#a_count').innerText = '';
    document.querySelector('#a_perc').innerText = '';
    document.querySelector('#t_count').innerText = '';
    document.querySelector('#t_perc').innerText = '';
    document.querySelector('#c_count').innerText = '';
    document.querySelector('#c_perc').innerText = '';
    document.querySelector('#g_count').innerText = '';
    document.querySelector('#g_perc').innerText = '';
    document.querySelector('#error_count').innerText = '';
    document.querySelector('#error_perc').innerText = '';
    document.querySelector('#compdnaout').innerText = '';
});
