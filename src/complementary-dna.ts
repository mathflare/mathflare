(<HTMLButtonElement>document.querySelector('#compdnacalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const dna_string: string = (<HTMLInputElement>document.querySelector('#dnastring')).value!;
    const complementaryDna: (strand: string) => string = (strand: string) => {
        let result: string = '';
        for (let i: number = 0; i < strand.length; i++) {
            switch (strand[i]) {
                case 'A':
                    result += 'T';
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
    const revComplementaryDna: (strand: string) => string = (strand: string) => {
        let result: string = '';
        for (let i: number = strand.length - 1; i >= 0; i--) {
            switch (strand[i]) {
                case 'A':
                    result += 'T';
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
    if (dna_string.length === 0) {
        (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#dnastring')).value = '';
    } else {
        const select: string = (<HTMLSelectElement>document.querySelector('#select')).value!;
        if (select === 'comp') {
            if (complementaryDna(dna_string).includes('X')) {
                (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">Complementary sequence: ${complementaryDna(dna_string)}</p>`;
                (<HTMLInputElement>document.querySelector('#dnastring')).value = '';
                (<HTMLParagraphElement>document.querySelector('#hasxmessage')).innerText = 'X means that a character you entered in the sequence is not valid.';
            } else {
                (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">${complementaryDna(dna_string)}</p>`;
                (<HTMLInputElement>document.querySelector('#dnastring')).value = '';
                (<HTMLParagraphElement>document.querySelector('#hasxmessage'))!.innerText = '';
            }
        } else if (select === 'rev') {
            (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">Reverse sequence: ${dna_string.split('').reverse().join('')}</p>`;
            (<HTMLInputElement>document.querySelector('#dnastring')).value = '';
            (<HTMLParagraphElement>document.querySelector('#hasxmessage')).innerText = '';
        } else if (select === 'rev-comp') {
            if (complementaryDna(dna_string).includes('X')) {
                (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">Reverse complementary sequence: ${revComplementaryDna(dna_string)}</p>`;
                (<HTMLInputElement>document.querySelector('#dnastring')).value = '';
                (<HTMLParagraphElement>document.querySelector('#hasxmessage')).innerText = 'X means that a character you entered in the sequence is not valid.';
            } else {
                (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">Reverse complementary sequence: ${complementaryDna(dna_string).split('').reverse().join('')}</p>`;
                (<HTMLInputElement>document.querySelector('#dnastring')).value = '';
                (<HTMLParagraphElement>document.querySelector('#hasxmessage'))!.innerText = '';
            }
        }
    }
});