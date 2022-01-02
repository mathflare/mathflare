"use strict";
document.querySelector('#proteincontcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const select = document.querySelector('#select').value;
    const Dictionary = {
        UUU: 'F',
        CUU: 'L',
        AUU: 'I',
        GUU: 'V',
        UUC: 'F',
        CUC: 'L',
        AUC: 'I',
        GUC: 'V',
        UUA: 'L',
        CUA: 'L',
        AUA: 'I',
        GUA: 'V',
        UUG: 'L',
        CUG: 'L',
        AUG: 'M',
        GUG: 'V',
        UCU: 'S',
        CCU: 'P',
        ACU: 'T',
        GCU: 'A',
        UCC: 'S',
        CCC: 'P',
        ACC: 'T',
        GCC: 'A',
        UCA: 'S',
        CCA: 'P',
        ACA: 'T',
        GCA: 'A',
        UCG: 'S',
        CCG: 'P',
        ACG: 'T',
        GCG: 'A',
        UAU: 'Y',
        CAU: 'H',
        AAU: 'N',
        GAU: 'D',
        UAC: 'Y',
        CAC: 'H',
        AAC: 'N',
        GAC: 'D',
        UAA: 'STOP',
        CAA: 'Q',
        AAA: 'K',
        GAA: 'E',
        UAG: 'STOP',
        CAG: 'Q',
        AAG: 'K',
        GAG: 'E',
        UGU: 'C',
        CGU: 'R',
        AGU: 'S',
        GGU: 'G',
        UGC: 'C',
        CGC: 'R',
        AGC: 'S',
        GGC: 'G',
        UGA: 'STOP',
        CGA: 'R',
        AGA: 'R',
        GGA: 'G',
        UGG: 'W',
        CGG: 'R',
        AGG: 'R',
        GGG: 'G',
    };
    const proteinTranslation = (sequence) => {
        let protein = '';
        for (let i = 0; i < sequence.length; i += 3) {
            let curr = sequence.toUpperCase().substring(i, i + 3);
            if (Dictionary[curr] === 'STOP') {
                protein += '*';
            }
            else {
                if (Dictionary[curr] !== undefined) {
                    protein += Dictionary[curr];
                }
                else {
                    protein += 'X';
                }
            }
        }
        return protein;
    };
    const proteinPercent = (sequence) => {
        const percent = {
            F: 0,
            L: 0,
            I: 0,
            V: 0,
            M: 0,
            S: 0,
            P: 0,
            T: 0,
            A: 0,
            Y: 0,
            H: 0,
            N: 0,
            D: 0,
            END: 0,
            Q: 0,
            K: 0,
            E: 0,
            C: 0,
            R: 0,
            G: 0,
            W: 0,
            X: 0
        };
        const count = {
            F: 0,
            L: 0,
            I: 0,
            V: 0,
            M: 0,
            S: 0,
            P: 0,
            T: 0,
            A: 0,
            Y: 0,
            H: 0,
            N: 0,
            D: 0,
            END: 0,
            Q: 0,
            K: 0,
            E: 0,
            C: 0,
            R: 0,
            G: 0,
            W: 0,
            X: 0
        };
        let protein = "";
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                protein += sequence[i];
                percent['END'] += 1 / sequence.length * 100;
                count['END']++;
            }
            else if (percent[sequence[i]] === undefined) {
                protein += 'X';
                percent['X'] += 1 / sequence.length * 100;
                count['X']++;
            }
            else {
                protein += sequence[i];
                percent[sequence[i]] += 1 / sequence.length * 100;
                count[sequence[i]]++;
            }
        }
        let aminoacid = "";
        for (let i = 0; i < protein.length; i++) {
            if (!(aminoacid.includes(protein[i]))) {
                aminoacid += protein[i];
            }
        }
        for (let i = 0; i < aminoacid.length; i++) {
            if (aminoacid[i] === '*') {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                td1.innerHTML = `*(stop codon)`;
                td2.innerHTML = `${count['END']}`;
                td3.innerHTML = `${percent['END'].toFixed(2)}`;
                td1.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                document.querySelector('#tablebody').appendChild(tr);
            }
            else if (aminoacid[i] === 'X') {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                td1.innerHTML = `X(Error)`;
                td2.innerHTML = `${count['X']}`;
                td3.innerHTML = `${percent['X'].toFixed(2)}`;
                td1.classList.add('text-warning');
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                document.querySelector('#tablebody').appendChild(tr);
            }
            else {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                td1.innerHTML = aminoacid[i];
                td2.innerHTML = `${count[aminoacid[i]]}`;
                td3.innerHTML = `${percent[aminoacid[i]].toFixed(2)}`;
                td1.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                document.querySelector('#tablebody').appendChild(tr);
            }
        }
    };
    if (select === 'Protein') {
        const Protein = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
        if (Protein === '') {
            document.querySelector('#tablebody').innerText = '';
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">Please enter a valid value</td>';
            tr.classList.add('text-warning');
            document.querySelector('#tablebody').appendChild(tr);
        }
        else {
            document.querySelector('#tablebody').innerText = '';
            proteinPercent(Protein);
        }
    }
    else if (select === 'RNA') {
        const RNA = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
        if (RNA === '') {
            document.querySelector('#tablebody').innerText = '';
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">Please enter a valid value</td>';
            tr.classList.add('text-warning');
            document.querySelector('#tablebody').appendChild(tr);
        }
        else if (RNA.length % 3 !== 0) {
            document.querySelector('#tablebody').innerText = '';
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">The sequence must be a multiple of 3</td>';
            tr.classList.add('text-warning');
            document.querySelector('#tablebody').appendChild(tr);
        }
        else {
            document.querySelector('#tablebody').innerText = '';
            const translatedRna = proteinTranslation(RNA);
            proteinPercent(translatedRna);
        }
    }
    else if (select === 'DNA') {
        const DNA = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
        if (DNA === '') {
            document.querySelector('#tablebody').innerText = '';
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">Please enter a valid value</td>';
            tr.classList.add('text-warning');
            document.querySelector('#tablebody').appendChild(tr);
        }
        else if (DNA.length % 3 !== 0) {
            document.querySelector('#tablebody').innerText = '';
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">The sequence must be a multiple of 3</td>';
            tr.classList.add('text-warning');
            document.querySelector('#tablebody').appendChild(tr);
        }
        else {
            document.querySelector('#tablebody').innerText = '';
            const RNA = Dnatranscription(DNA);
            const translatedRna = proteinTranslation(RNA);
            proteinPercent(translatedRna);
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    document.querySelector('#sequence').value = '';
    document.querySelector('#tablebody').innerText = '';
});
