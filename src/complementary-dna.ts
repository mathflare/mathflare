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
                    result += 'X';
                    break;
            }
        }
        percentageDna(result);
        return result;
    };
    const revDna: (strand: string) => string = (strand: string) => {
        let result: string = '';
        for (let i: number = strand.length - 1; i >= 0; i--) {
            if (strand[i] !== 'A' && strand[i] !== 'G' && strand[i] !== 'C' && strand[i] !== 'T') {
                result += 'X';
            } else {
                result += strand[i];
            }
        }
        percentageDna(result);
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
                    result += 'X';
                    break;
            }
        }
        percentageDna(result);
        return result;
    };
    const percentageDna: (compldna: string) => void = (compldna: string) => {
        let a_count: number = 0;
        let t_count: number = 0;
        let c_count: number = 0;
        let g_count: number = 0;
        let x_count: number = 0;
        for (let i: number = 0; i < compldna.length; i++) {
            if (compldna[i] === 'A') {
                a_count++;
            } else if (compldna[i] === 'T') {
                t_count++;
            } else if (compldna[i] === 'G') {
                g_count++;
            } else if (compldna[i] === 'C') {
                c_count++;
            } else {
                x_count++;
            }
        }
        const a_perc: number = a_count / compldna.length * 100;
        const t_perc: number = t_count / compldna.length * 100;
        const c_perc: number = c_count / compldna.length * 100;
        const g_perc: number = g_count / compldna.length * 100;
        const x_perc: number = x_count / compldna.length * 100;
        (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = `${a_count}`;
        (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = `${a_perc.toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = `${t_count}`;
        (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = `${t_perc.toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = `${c_count}`;
        (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = `${c_perc.toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = `${g_count}`;
        (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = `${g_perc.toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#error_count')).innerText = `${x_count}`;
        (<HTMLParagraphElement>document.querySelector('#error_perc')).innerText = `${x_perc.toFixed(2)}`;
    };
    if (dna_string.length === 0) {
        (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#error_count')).innerText = "";
        (<HTMLParagraphElement>document.querySelector('#error_perc')).innerText = "";
    } else {
        const select: string = (<HTMLSelectElement>document.querySelector('#select')).value!;
        if (select === 'comp') {
            (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">Complementary sequence: ${complementaryDna(dna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        } else if (select === 'rev') {
            (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">Reverse sequence: ${revDna(dna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        } else if (select === 'rev-comp') {
            (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerHTML = `<p class="text-success">Reverse complementary sequence: ${revComplementaryDna(dna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clear')).addEventListener('click', (event) => {
    event.preventDefault();
    (<HTMLInputElement>document.querySelector('#dnastring')).value = "";
    (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#error_count')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#error_perc')).innerText = "";
    (<HTMLParagraphElement>document.querySelector('#compdnaout')).innerText = "";
});