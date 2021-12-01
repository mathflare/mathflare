"use strict";
document.querySelector('#comprnacalc').addEventListener('click', (event) => {
    event.preventDefault();
    const rna_string = document.querySelector('#rnastring').value.replace(/\s/g, '').toUpperCase();
    const complementaryrna = (strand) => {
        let result = '';
        for (let i = 0; i < strand.length; i++) {
            switch (strand[i]) {
                case 'A':
                    result += 'U';
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
        percentagerna(result);
        return result;
    };
    const revrna = (strand) => {
        let result = '';
        for (let i = strand.length - 1; i >= 0; i--) {
            if (strand[i] !== 'A' && strand[i] !== 'G' && strand[i] !== 'C' && strand[i] !== 'U') {
                result += 'X';
            }
            else {
                result += strand[i];
            }
        }
        percentagerna(result);
        return result;
    };
    const revComplementaryrna = (strand) => {
        let result = '';
        for (let i = strand.length - 1; i >= 0; i--) {
            switch (strand[i]) {
                case 'A':
                    result += 'U';
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
        percentagerna(result);
        return result;
    };
    const percentagerna = (complrna) => {
        let a_count = 0;
        let u_count = 0;
        let c_count = 0;
        let g_count = 0;
        let x_count = 0;
        for (let i = 0; i < complrna.length; i++) {
            if (complrna[i] === 'A') {
                a_count++;
            }
            else if (complrna[i] === 'U') {
                u_count++;
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
        const u_perc = u_count / complrna.length * 100;
        const c_perc = c_count / complrna.length * 100;
        const g_perc = g_count / complrna.length * 100;
        const x_perc = x_count / complrna.length * 100;
        document.querySelector('#a_count').innerText = `${a_count}`;
        document.querySelector('#a_perc').innerText = `${a_perc.toFixed(2)}`;
        document.querySelector('#u_count').innerText = `${u_count}`;
        document.querySelector('#u_perc').innerText = `${u_perc.toFixed(2)}`;
        document.querySelector('#c_count').innerText = `${c_count}`;
        document.querySelector('#c_perc').innerText = `${c_perc.toFixed(2)}`;
        document.querySelector('#g_count').innerText = `${g_count}`;
        document.querySelector('#g_perc').innerText = `${g_perc.toFixed(2)}`;
        document.querySelector('#error_count').innerText = `${x_count}`;
        document.querySelector('#error_perc').innerText = `${x_perc.toFixed(2)}`;
    };
    if (rna_string.length === 0) {
        document.querySelector('#comprnaout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a_count').innerText = '';
        document.querySelector('#a_perc').innerText = '';
        document.querySelector('#u_count').innerText = '';
        document.querySelector('#u_perc').innerText = '';
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
            document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Complementary sequence: ${complementaryrna(rna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
        else if (select === 'rev') {
            document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Reverse sequence: ${revrna(rna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
        else if (select === 'rev-comp') {
            document.querySelector('#comprnaout').innerHTML = `<p class="text-success">Reverse complementary sequence: ${revComplementaryrna(rna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    document.querySelector('#rnastring').value = '';
    document.querySelector('#a_count').innerText = '';
    document.querySelector('#a_perc').innerText = '';
    document.querySelector('#u_count').innerText = '';
    document.querySelector('#u_perc').innerText = '';
    document.querySelector('#c_count').innerText = '';
    document.querySelector('#c_perc').innerText = '';
    document.querySelector('#g_count').innerText = '';
    document.querySelector('#g_perc').innerText = '';
    document.querySelector('#error_count').innerText = '';
    document.querySelector('#error_perc').innerText = '';
    document.querySelector('#comprnaout').innerText = '';
});
