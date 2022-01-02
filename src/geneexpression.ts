(<HTMLButtonElement>document.querySelector('#expressioncalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const templdna: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
    const Anticodons: (strand: string) => string = (strand: string) => {
        let result: string = '';
        let count: number = 0;
        for (let i: number = 0; i < strand.length; i++) {
            if (count === 3) {
                result += '-';
                count = 0;
                i--;
            } else {
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
                count++;
            }
        }
        return result;
    };
    const Translation: (sequence: string) => string = (sequence: string) => {
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
            UAA: '*',
            CAA: 'Q',
            AAA: 'K',
            GAA: 'E',
            UAG: '*',
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
            UGA: '*',
            CGA: 'R',
            AGA: 'R',
            GGA: 'G',
            UGG: 'W',
            CGG: 'R',
            AGG: 'R',
            GGG: 'G',
        };
        let protein: string = '';
        for (let i: number = 0; i < sequence.length; i += 3) {
            let codon: string = sequence.substring(i, i + 3);
            if (Dictionary[codon] === undefined) {
                protein += 'X';
            } else {
                protein += Dictionary[codon];
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
        for (let i: number = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                percent['END'] += 1 / sequence.length * 100;
                count['END']++;
            } else {
                percent[sequence[i]] += 1 / sequence.length * 100;
                count[sequence[i]]++;
            }
        }
        let aminoacid: string = "";
        for (let i: number = 0; i < sequence.length; i++) {
            if (!(aminoacid.includes(sequence[i]))) {
                aminoacid += sequence[i];
            }
        }
        for (let i: number = 0; i < aminoacid.length; i++) {
            if (aminoacid[i] === '*') {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                const td3: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = aminoacid[i];
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
                td1.innerHTML = aminoacid[i];
                td2.innerHTML = `${count[aminoacid[i]]}`;
                td3.innerHTML = `${percent[aminoacid[i]].toFixed(2)}`;
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
    if (templdna === '') {
        (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = '<td colspan="3">Please enter a valid value</td>';
        tr.classList.add('text-warning');
        (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
    } else if (templdna.length % 3 !== 0) {
        (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = '<td colspan="3">The sequence must be a multiple of 3</td>';
        tr.classList.add('text-warning');
        (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
    } else {
        (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
        const mrna: string = Dnatranscription(templdna);
        const protein: string = Translation(mrna);
        (<HTMLParagraphElement>document.querySelector('#expressionout')).innerHTML = `<p><span class="text-warning">Protein: </span>${protein.replace(/X/g, '<span class="text-warning">X</span>')}<br/><br/><span class="text-warning">DNA Coding Strand: </span>${mrna.replace(/U/g, 'T').replace(/X/g, '<span class="text-warning">X</span>')}<br/><br/><span class="text-warning">mRNA Strand: </span>${mrna.replace(/X/g, '<span class="text-warning">X</span>')}<br/><br/><span class="text-warning">tRNA Anticodons: </span>${Anticodons(mrna).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        proteinPercent(protein);
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    (<HTMLInputElement>document.querySelector('#sequence')).value = '';
    (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#expressionout')).innerText = '';
});