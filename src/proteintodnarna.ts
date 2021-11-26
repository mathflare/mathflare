(<HTMLButtonElement>document.querySelector('#proteintodnarnacalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const select: string = (<HTMLSelectElement>document.querySelector('#select')).value;
    const protein: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
    const proteintoRNA: (sequence: string) => void = (sequence: string) => {
        const RNAdict: { [key: string]: string } = {
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
        for (let i: number = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = RNAdict['END'];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            } else if (RNAdict[sequence[i]] === undefined) {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = 'X';
                td2.innerHTML = 'Error!';
                td1.classList.add('text-warning');
                td2.classList.add('text-warning');
                tr.appendChild(td1);
                tr.appendChild(td2);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            } else {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = RNAdict[sequence[i]];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            }
        };
        for (let i: number = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                let temp: String[] = RNAdict['END'].split(' ');
                const rand: number = Math.floor(Math.random() * temp.length);
                (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value += temp[rand];
            } else if (RNAdict[sequence[i]] === undefined) {
                (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value += 'X';
            } else {
                let temp: String[] = RNAdict[sequence[i]].split(' ');
                const rand: number = Math.floor(Math.random() * temp.length);
                (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value += temp[rand];
            }
        }
    };
    const proteintoDNA: (sequence: string) => void = (sequence: string) => {
        const DNAdict: { [key: string]: string } = {
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
        for (let i: number = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = DNAdict['END'];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            } else if (DNAdict[sequence[i]] === undefined) {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = 'X';
                td2.innerHTML = 'Error!';
                td1.classList.add('text-warning');
                td2.classList.add('text-warning');
                tr.appendChild(td1);
                tr.appendChild(td2);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            } else {
                const tr: HTMLTableRowElement = document.createElement('tr');
                const td1: HTMLTableCellElement = document.createElement('td');
                const td2: HTMLTableCellElement = document.createElement('td');
                td1.innerHTML = sequence[i];
                td2.innerHTML = DNAdict[sequence[i]];
                td2.classList.add('text-success');
                tr.appendChild(td1);
                tr.appendChild(td2);
                (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
            }
        };
        for (let i: number = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                let temp: String[] = DNAdict['END'].split(' ');
                const rand: number = Math.floor(Math.random() * temp.length);
                (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value += temp[rand];
            } else if (DNAdict[sequence[i]] === undefined) {
                (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value += 'X';
            } else {
                let temp: String[] = DNAdict[sequence[i]].split(' ');
                const rand: number = Math.floor(Math.random() * temp.length);
                (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value += temp[rand];
            }
        }
    };
    if (protein === '') {
        (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
        (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value = '';
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = '<td colspan="2">Please enter a valid value</td>';
        tr.classList.add('text-warning');
        (<HTMLTableElement>document.querySelector('#tablebody')).appendChild(tr);
    } else {
        if (select === 'RNA') {
            (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
            (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value = '';
            proteintoRNA(protein);
        } else if (select === 'DNA') {
            (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
            (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value = '';
            proteintoDNA(protein);
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    (<HTMLInputElement>document.querySelector('#sequence')).value = '';
    (<HTMLTextAreaElement>document.querySelector('#sample-seq')).value = '';
    (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
});