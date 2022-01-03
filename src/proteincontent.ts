(<HTMLButtonElement>document.querySelector('#proteincontcalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const select: string = (<HTMLSelectElement>document.querySelector('#select')).value;
    const Dictionary: { [key: string]: string } = {
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
    const proteinTranslation: (sequence: string) => string = (sequence: string) => {
        let protein: string = '';
        for (let i: number = 0; i < sequence.length; i += 3) {
            let curr: string = sequence.toUpperCase().substring(i, i + 3);
            if (Dictionary[curr] === 'STOP') {
                protein += '*';
            } else {
                if (Dictionary[curr] !== undefined) {
                    protein += Dictionary[curr];
                } else {
                    protein += 'X';
                }
            }
        }
        return protein;
    };
    const proteinPercent: (sequence: string) => void = (sequence: string) => {
        const percent: { [key: string]: number } = {
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
        const count: { [key: string]: number } = {
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
        let protein: string = "";
        for (let i: number = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                protein += sequence[i];
                percent['END'] += 1 / sequence.length * 100;
                count['END']++;
            } else if (percent[sequence[i]] === undefined) {
                protein += 'X';
                percent['X'] += 1 / sequence.length * 100;
                count['X']++;
            } else {
                protein += sequence[i];
                percent[sequence[i]] += 1 / sequence.length * 100;
                count[sequence[i]]++;
            }
        }
        let aminoacid: string = "";
        for (let i: number = 0; i < protein.length; i++) {
            if (!(aminoacid.includes(protein[i]))) {
                aminoacid += protein[i];
            }
        }
        for (let i: number = 0; i < aminoacid.length; i++) {
            if (aminoacid[i] === '*') {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                const td3: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = `*(stop codon)`;
                td2.innerHTML = `${count['END']}`;
                td3.innerHTML = `${percent['END'].toFixed(2)}`;
                td1.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            } else if (aminoacid[i] === 'X') {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                const td3: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = `X(Error)`;
                td2.innerHTML = `${count['X']}`;
                td3.innerHTML = `${percent['X'].toFixed(2)}`;
                td1.classList.add('text-warning');
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            } else {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                const td3: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = aminoacid[i];
                td2.innerHTML = `${count[aminoacid[i]]}`;
                td3.innerHTML = `${percent[aminoacid[i]].toFixed(2)}`;
                td1.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            }
        }
    };
    if (select === 'Protein') {
        const Protein: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        if (Protein === '') {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">Please enter a valid value</td>';
            tr.classList.add('text-warning');
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        } else {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            proteinPercent(Protein);
        }
    }
    else if (select === 'RNA') {
        const RNA: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        if (RNA === '') {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">Please enter a valid value</td>';
            tr.classList.add('text-warning');
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        } else if (RNA.length % 3 !== 0) {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">The sequence length must be a multiple of 3</td>';
            tr.classList.add('text-warning');
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        } else {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            const translatedRna: string = proteinTranslation(RNA);
            proteinPercent(translatedRna);
        }
    } else if (select === 'DNA') {
        const DNA: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        if (DNA === '') {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">Please enter a valid value</td>';
            tr.classList.add('text-warning');
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        } else if (DNA.length % 3 !== 0) {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.innerHTML = '<td colspan="3">The sequence length must be a multiple of 3</td>';
            tr.classList.add('text-warning');
            (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
        } else {
            (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
            const RNA: string = Dnatranscription(DNA);
            const translatedRna: string = proteinTranslation(RNA);
            proteinPercent(translatedRna);
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    (<HTMLInputElement>document.querySelector('#sequence')).value = '';
    (<HTMLTableElement>document.querySelector('#tablebody')).innerText = '';
});