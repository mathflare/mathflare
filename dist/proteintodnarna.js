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
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = RNAdict['END'];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                document.querySelector('#tablebody').appendChild(tr);
            }
            else if (RNAdict[sequence[i]] === undefined) {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = 'X';
                td2.innerHTML = 'Error!';
                td1.classList.add('text-warning');
                td2.classList.add('text-warning');
                tr.appendChild(td1);
                tr.appendChild(td2);
                document.querySelector('#tablebody').appendChild(tr);
            }
            else {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = RNAdict[sequence[i]];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                document.querySelector('#tablebody').appendChild(tr);
            }
        }
        ;
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                let temp = RNAdict['END'].split(' ');
                const rand = Math.floor(Math.random() * temp.length);
                document.querySelector('#sample-seq').value += temp[rand];
            }
            else if (RNAdict[sequence[i]] === undefined) {
                document.querySelector('#sample-seq').value += 'X';
            }
            else {
                let temp = RNAdict[sequence[i]].split(' ');
                const rand = Math.floor(Math.random() * temp.length);
                document.querySelector('#sample-seq').value += temp[rand];
            }
        }
    };
    const proteintoDNA = (sequence) => {
        const DNAdict = {
            F: "TTT TTC",
            L: "CTT CTC TTA CTA TTG CTG",
            I: "ATT ATC ATA",
            V: "GTT GTC GTA GTG",
            M: "ATG",
            S: "TCT TCC TCA TCG AGT AGC",
            P: "CCT CCC CCA CCG",
            T: "ACT ACC ACA ACG",
            A: "GCT GCC GCA GCG",
            Y: "TAT TAC",
            H: "CAT CAC",
            N: "AAT AAC",
            D: "GAT GAC",
            END: "TAA TAG TGA",
            Q: "CAA CAG",
            K: "AAA AAG",
            E: "GAA GAG",
            C: "TGT TGC",
            R: "CGT CGC CGA AGA CGG AGG",
            G: "GGT GGC GGA GGG",
            W: "TGG"
        };
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = DNAdict['END'];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                document.querySelector('#tablebody').appendChild(tr);
            }
            else if (DNAdict[sequence[i]] === undefined) {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = 'X';
                td2.innerHTML = 'Error!';
                td1.classList.add('text-warning');
                td2.classList.add('text-warning');
                tr.appendChild(td1);
                tr.appendChild(td2);
                document.querySelector('#tablebody').appendChild(tr);
            }
            else {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = DNAdict[sequence[i]];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                document.querySelector('#tablebody').appendChild(tr);
            }
        }
        ;
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                let temp = DNAdict['END'].split(' ');
                const rand = Math.floor(Math.random() * temp.length);
                document.querySelector('#sample-seq').value += temp[rand];
            }
            else if (DNAdict[sequence[i]] === undefined) {
                document.querySelector('#sample-seq').value += 'X';
            }
            else {
                let temp = DNAdict[sequence[i]].split(' ');
                const rand = Math.floor(Math.random() * temp.length);
                document.querySelector('#sample-seq').value += temp[rand];
            }
        }
    };
    if (protein === '') {
        document.querySelector('#tablebody').innerText = '';
        document.querySelector('#sample-seq').value = '';
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="2">Please enter a valid value</td>';
        tr.classList.add('text-warning');
        document.querySelector('#tablebody').appendChild(tr);
    }
    else {
        if (select === 'RNA') {
            document.querySelector('#tablebody').innerText = '';
            document.querySelector('#sample-seq').value = '';
            proteintoRNA(protein);
        }
        else if (select === 'DNA') {
            document.querySelector('#tablebody').innerText = '';
            document.querySelector('#sample-seq').value = '';
            proteintoDNA(protein);
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#sequence').value = '';
    document.querySelector('#sample-seq').value = '';
    document.querySelector('#tablebody').innerText = '';
});
