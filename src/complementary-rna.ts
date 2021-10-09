(<HTMLButtonElement>document.querySelector('#comprnacalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const rna_string: string = (<HTMLInputElement>document.querySelector('#rnastring')).value!;
    const complementaryRna: (strand: string) => string = (strand: string) => {
        let result: string = '';
        for (let i: number = 0; i < strand.length; i++) {
            switch (strand[i]) {
                case 'A':
                    result += 'U';
                    break;
                case 'T':
                    result += 'A';
                    break;
                case 'G':
                    result += 'C';
                    break;
                case 'C':
                    result += 'G';
                    break;
                default:
                    result += '<span class="text-warning">X</span>';
                    break;
            }
        }
        return result;
    };
    const revComplementaryRna: (strand: string) => string = (strand: string) => {
        let result: string = '';
        for (let i: number = strand.length - 1; i >= 0; i--) {
            switch (strand[i]) {
                case 'A':
                    result += 'U';
                    break;
                case 'T':
                    result += 'A';
                    break;
                case 'G':
                    result += 'C';
                    break;
                case 'C':
                    result += 'G';
                    break;
                default:
                    result += '<span class="text-warning">X</span>';
                    break;
            }
        }
        return result;
    };
    if (rna_string.length === 0) {
        (<HTMLParagraphElement>document.querySelector('#comprnaout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else {
        const select: string = (<HTMLSelectElement>document.querySelector('#select')).value!;
        if (select === 'comp') {
            if (complementaryRna(rna_string).includes('X')) {
                (<HTMLParagraphElement>document.querySelector('#comprnaout')).innerHTML = `<p class="text-success">Complementary sequence: ${complementaryRna(rna_string)}</p>`;
                (<HTMLParagraphElement>document.querySelector('#hasxmessage')).innerText = 'X means that a character you entered in the sequence is not valid.';
            } else {
                (<HTMLParagraphElement>document.querySelector('#comprnaout')).innerHTML = `<p class="text-success">Complementary sequence: ${complementaryRna(rna_string)}</p>`;
                (<HTMLParagraphElement>document.querySelector('#hasxmessage'))!.innerText = '';
            }
        } else if (select === 'rev') {
            (<HTMLParagraphElement>document.querySelector('#comprnaout')).innerHTML = `<p class="text-success">Reverse sequence: ${rna_string.split('').reverse().join('')}</p>`;
            (<HTMLParagraphElement>document.querySelector('#hasxmessage')).innerText = '';
        } else if (select === 'rev-comp') {
            if (complementaryRna(rna_string).includes('X')) {
                (<HTMLParagraphElement>document.querySelector('#comprnaout')).innerHTML = `<p class="text-success">Reverse complementary sequence: ${revComplementaryRna(rna_string)}</p>`;
                (<HTMLParagraphElement>document.querySelector('#hasxmessage')).innerText = 'X means that a character you entered in the sequence is not valid.';
            } else {
                (<HTMLParagraphElement>document.querySelector('#comprnaout')).innerHTML = `<p class="text-success">Reverse complementary sequence: ${complementaryRna(rna_string).split('').reverse().join('')}</p>`;
                (<HTMLParagraphElement>document.querySelector('#hasxmessage'))!.innerText = '';
            }
        }
    }
});