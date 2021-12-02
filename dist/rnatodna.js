"use strict";
document.querySelector('#rnatodnacalc').addEventListener('click', (event) => {
    event.preventDefault();
    const rna_string = document.querySelector('#rnastring').value.replace(/\s/g, '').toUpperCase();
    const select = document.querySelector('#select').value;
    const complementaryRna = (strand) => {
        let result = '';
        for (let i = 0; i < strand.length; i++) {
            switch (strand[i]) {
                case 'A':
                    result += 'T';
                    break;
                case 'U':
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
        percentageRna(result);
        return result;
    };
    const revComplementaryRna = (strand) => {
        let result = '';
        for (let i = strand.length - 1; i >= 0; i--) {
            switch (strand[i]) {
                case 'A':
                    result += 'T';
                    break;
                case 'U':
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
        percentageRna(result);
        return result;
    };
    const percentageRna = (complrna) => {
        let a_count = 0;
        let t_count = 0;
        let c_count = 0;
        let g_count = 0;
        let x_count = 0;
        for (let i = 0; i < complrna.length; i++) {
            if (complrna[i] === 'A') {
                a_count++;
            }
            else if (complrna[i] === 'T') {
                t_count++;
            }
            else if (complrna[i] === 'G') {
                g_count++;
            }
            else if (complrna[i] === 'C') {
                c_count++;
            }
            else {
                x_count++;
            }
        }
        const a_perc = a_count / complrna.length * 100;
        const t_perc = t_count / complrna.length * 100;
        const c_perc = c_count / complrna.length * 100;
        const g_perc = g_count / complrna.length * 100;
        const x_perc = x_count / complrna.length * 100;
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
    if (rna_string.length === 0) {
        document.querySelector('#rnatodnaout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
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
        if (select === 'comp') {
            document.querySelector('#rnatodnaout').innerHTML = `<p class="text-success">Complementary sequence: ${complementaryRna(rna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
        else if (select === 'rev-comp') {
            document.querySelector('#rnatodnaout').innerHTML = `<p class="text-success">Reverse complementary sequence: ${revComplementaryRna(rna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#rnastring').value = '';
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
    document.querySelector('#rnatodnaout').innerText = '';
});
