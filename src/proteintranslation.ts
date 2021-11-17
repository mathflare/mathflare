(<HTMLButtonElement>document.querySelector('#proteincalc')).addEventListener('click', (event: Event) => {
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
                if (typeof Dictionary[curr] !== 'undefined') {
                    protein += Dictionary[curr];
                } else {
                    protein += '<span class="text-warning">X</span>';
                }
            }
        }
        return protein;
    };
    if (select === 'RNA') {
        const RNA: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        if (RNA === '') {
            (<HTMLParagraphElement>document.querySelector('#proteinout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        } else if (RNA.length % 3 !== 0) {
            (<HTMLParagraphElement>document.querySelector('#proteinout')).innerHTML = `<p class="text-warning">The length of the sequence must be a multiple of 3</p>`;
        } else {
            (<HTMLParagraphElement>document.querySelector('#proteinout')).innerHTML = `<p class="text-success">Protein sequence: ${proteinTranslation(RNA)}</p>`;
        }
    } else if (select === 'DNA') {
        const DNA: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        const RNA: string = Dnatranscription(DNA);
        if (RNA === '') {
            (<HTMLParagraphElement>document.querySelector('#proteinout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        } else if (RNA.length % 3 !== 0) {
            (<HTMLParagraphElement>document.querySelector('#proteinout')).innerHTML = `<p class="text-warning">The length of the sequence must be a multiple of 3</p>`;
        } else {
            (<HTMLParagraphElement>document.querySelector('#proteinout')).innerHTML = `<p class="text-success">Protein sequence: ${proteinTranslation(RNA)}</p>`;
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    (<HTMLInputElement>document.querySelector('#sequence')).value = '';
    (<HTMLParagraphElement>document.querySelector('#proteinout')).innerText = '';
});