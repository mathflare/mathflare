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
                (<HTMLParagraphElement>document.querySelector('#tablebody')).innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${RNAdict['END']}</th></tr>`;
            } else if (RNAdict[sequence[i]] === undefined) {
                (<HTMLParagraphElement>document.querySelector('#tablebody')).innerHTML += `<tr><th class="text-warning">X</th><th class="text-warning">Error</th></tr>`;
            } else {
                (<HTMLParagraphElement>document.querySelector('#tablebody')).innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${RNAdict[sequence[i]]}</th></tr>`;
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
                (<HTMLParagraphElement>document.querySelector('#tablebody')).innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${DNAdict['END']}</th></tr>`;
            } else if (DNAdict[sequence[i]] === undefined) {
                (<HTMLParagraphElement>document.querySelector('#tablebody')).innerHTML += `<tr><th class="text-warning">X</th><th class="text-warning">Input Error</th></tr>`;
            } else {
                (<HTMLParagraphElement>document.querySelector('#tablebody')).innerHTML += `<tr><th>${sequence[i]}</th><th class="text-success">${DNAdict[sequence[i]]}</th></tr>`;
            }
        }
    };
    if (protein === '') {
        (<HTMLParagraphElement>document.querySelector('#proteintodnarnout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
    } else {
        if (select === 'RNA') {
            (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
            proteintoRNA(protein);
            (<HTMLParagraphElement>document.querySelector('#proteintodnarnout')).innerText = '';
        } else if (select === 'DNA') {
            (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
            proteintoDNA(protein);
            (<HTMLParagraphElement>document.querySelector('#proteintodnarnout')).innerText = '';
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    (<HTMLInputElement>document.querySelector('#sequence')).value = '';
    (<HTMLParagraphElement>document.querySelector('#tablebody')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#proteintodnarnout')).innerText = '';
});