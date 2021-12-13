(<HTMLButtonElement>document.querySelector('#rnatodnacalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const rna_string: string = (<HTMLInputElement>document.querySelector('#rnastring')).value.replace(/\s/g, '').toUpperCase()!;
    const select: string = (<HTMLSelectElement>document.querySelector('#select')).value!;
    const complementaryRna: (strand: string) => string = (strand: string) => {
        let result: string = '';
        for (let i: number = 0; i < strand.length; i++) {
            switch (strand[i]) {
                case 'A':
                    result += 'T';
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
        }
        percentageRna(result);
        return result;
    };
    const revComplementaryRna: (strand: string) => string = (strand: string) => {
        let result: string = '';
        for (let i: number = strand.length - 1; i >= 0; i--) {
            switch (strand[i]) {
                case 'A':
                    result += 'T';
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
        }
        percentageRna(result);
        return result;
    };
    const percentageRna: (complrna: string) => void = (complrna: string) => {
        let a_count: number = 0;
        let t_count: number = 0;
        let c_count: number = 0;
        let g_count: number = 0;
        let x_count: number = 0;
        for (let i: number = 0; i < complrna.length; i++) {
            if (complrna[i] === 'A') {
                a_count++;
            } else if (complrna[i] === 'T') {
                t_count++;
            } else if (complrna[i] === 'G') {
                g_count++;
            } else if (complrna[i] === 'C') {
                c_count++;
            } else {
                x_count++;
            }
        }
        const a_perc: number = a_count / complrna.length * 100;
        const t_perc: number = t_count / complrna.length * 100;
        const c_perc: number = c_count / complrna.length * 100;
        const g_perc: number = g_count / complrna.length * 100;
        const x_perc: number = x_count / complrna.length * 100;
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
    if (rna_string.length === 0) {
        (<HTMLParagraphElement>document.querySelector('#rnatodnaout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#error_count')).innerText = '';
        (<HTMLParagraphElement>document.querySelector('#error_perc')).innerText = '';
    } else {
        if (select === 'comp') {
            (<HTMLParagraphElement>document.querySelector('#rnatodnaout')).innerHTML = `<p class="text-success">Complementary sequence: ${complementaryRna(rna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        } else if (select === 'rev-comp') {
            (<HTMLParagraphElement>document.querySelector('#rnatodnaout')).innerHTML = `<p class="text-success">Reverse complementary sequence: ${revComplementaryRna(rna_string).replace(/X/g, '<span class="text-warning">X</span>')}</p>`;
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    (<HTMLInputElement>document.querySelector('#rnastring')).value = '';
    (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#error_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#error_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#rnatodnaout')).innerText = '';
});