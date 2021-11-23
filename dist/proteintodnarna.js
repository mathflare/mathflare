"use strict";
document.querySelector('#proteintodnarnacalc').addEventListener('click', (event) => {
    event.preventDefault();
    const select = document.querySelector('#select').value;
    const protein = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
    const proteintoRNA = (sequence) => {
        const RNAdict = {
            F: "UUU UUC",
            L: "CUU CUC UUA CUA UUG CUG",
            I: "AUU AUC AUA",
            V: "GUU GUC GUA GUG",
            M: "AUG",
            S: "UCU UCC UCA UCG AGU AGC",
            P: "CCU CCC CCA CCG",
            T: "ACU ACC ACA ACG",
            A: "GCU GCC GCA GCG",
            Y: "UAU UAC",
            H: "CAU CAC",
            N: "AAU AAC",
            D: "GAU GAC",
            END: "UAA UAG UGA",
            Q: "CAA CAG",
            K: "AAA AAG",
            E: "GAA GAG",
            C: "UGU UGC",
            R: "CGU CGC CGA AGA CGG AGG",
            G: "GGU GGC GGA GGG",
            W: "UGG"
        };
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                document.querySelector('#tablebody').innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${RNAdict['END']}</th></tr>`;
            }
            else if (RNAdict[sequence[i]] === undefined) {
                document.querySelector('#tablebody').innerHTML += `<tr><th class="text-warning">X</th><th class="text-warning">Error</th></tr>`;
            }
            else {
                document.querySelector('#tablebody').innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${RNAdict[sequence[i]]}</th></tr>`;
            }
        }
    };
    const proteintoDNA = (sequence) => {
        const DNAdict = {
            F: "AAA AAG",
            L: "GAA GAG AAT GAT AAC GAC",
            I: "TAA TAG TAT",
            V: "CAA CAG CAT CAC",
            M: "TAC",
            S: "AGA AGG AGT AGC TCA TCG",
            P: "GGA GGG GGT GGC",
            T: "TGA TGG TGT TGC",
            A: "CGA CGG CGT CGC",
            Y: "ATA ATG",
            H: "GTA GTG",
            N: "TTA TTG",
            D: "CTA CTG",
            END: "ATT ATC ACT",
            Q: "GTT GTC",
            K: "TTT TTC",
            E: "CTT CTC",
            C: "ACA ACG",
            R: "GCA GCG GCT TCT GCC TCC",
            G: "CCA CCG CCT CCC",
            W: "ACC",
        };
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                document.querySelector('#tablebody').innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${DNAdict['END']}</th></tr>`;
            }
            else if (DNAdict[sequence[i]] === undefined) {
                document.querySelector('#tablebody').innerHTML += `<tr><th class="text-warning">X</th><th class="text-warning">Input Error</th></tr>`;
            }
            else {
                document.querySelector('#tablebody').innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${DNAdict[sequence[i]]}</th></tr>`;
            }
        }
    };
    if (protein === '') {
        document.querySelector('#proteintodnarnout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#tablebody').innerText = '';
    }
    else {
        if (select === 'RNA') {
            document.querySelector('#tablebody').innerText = '';
            proteintoRNA(protein);
            document.querySelector('#proteintodnarnout').innerText = '';
        }
        else if (select === 'DNA') {
            document.querySelector('#tablebody').innerText = '';
            proteintoDNA(protein);
            document.querySelector('#proteintodnarnout').innerText = '';
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#sequence').value = '';
    document.querySelector('#tablebody').innerText = '';
    document.querySelector('#proteintodnarnout').innerText = '';
});
