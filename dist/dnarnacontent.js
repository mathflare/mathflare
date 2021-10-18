"use strict";
document.querySelector('#dnarnacalc').addEventListener('click', (event) => {
    event.preventDefault();
    const sequence = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
    const select = document.querySelector('#contentselect').value;
    const ContentpercentageDna = (seq) => {
        let a_count = 0;
        let t_count = 0;
        let c_count = 0;
        let g_count = 0;
        let x_count = 0;
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === 'A') {
                a_count++;
            }
            else if (seq[i] === 'T') {
                t_count++;
            }
            else if (seq[i] === 'G') {
                g_count++;
            }
            else if (seq[i] === 'C') {
                c_count++;
            }
            else {
                x_count++;
            }
        }
        const a_perc = a_count / seq.length * 100;
        const t_perc = t_count / seq.length * 100;
        const c_perc = c_count / seq.length * 100;
        const g_perc = g_count / seq.length * 100;
        const x_perc = x_count / seq.length * 100;
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
    const ContentpercentageRna = (seq) => {
        let a_count = 0;
        let t_count = 0;
        let c_count = 0;
        let g_count = 0;
        let x_count = 0;
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === 'A') {
                a_count++;
            }
            else if (seq[i] === 'U') {
                t_count++;
            }
            else if (seq[i] === 'G') {
                g_count++;
            }
            else if (seq[i] === 'C') {
                c_count++;
            }
            else {
                x_count++;
            }
        }
        const a_perc = a_count / seq.length * 100;
        const t_perc = t_count / seq.length * 100;
        const c_perc = c_count / seq.length * 100;
        const g_perc = g_count / seq.length * 100;
        const x_perc = x_count / seq.length * 100;
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
    if (sequence.length === 0) {
        document.querySelector('#drnaout').innerHTML = `<p class='text-warning'>Please enter a valid value</p>`;
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
        if (select === 'dna') {
            ContentpercentageDna(sequence);
            document.querySelector('#drnaout').innerText = '';
        }
        else if (select === 'rna') {
            ContentpercentageRna(sequence);
            document.querySelector('#drnaout').innerText = '';
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
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
    document.querySelector('#drnaout').innerText = '';
});
document.querySelector('#contentselect').addEventListener('change', (event) => {
    event.preventDefault();
    const select = document.querySelector('#contentselect').value;
    const sequencepch = document.querySelector('#sequence');
    if (select === 'dna') {
        sequencepch.placeholder = 'eg. ATTGC';
        document.querySelector('#base_t').innerHTML = 'T';
        document.querySelector('#title').innerHTML = 'Enter the DNA sequence';
    }
    else if (select === 'rna') {
        sequencepch.placeholder = 'eg. AUUGC';
        document.querySelector('#base_t').innerHTML = 'U';
        document.querySelector('#title').innerHTML = 'Enter the RNA sequence';
    }
});
