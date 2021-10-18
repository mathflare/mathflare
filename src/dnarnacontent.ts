(<HTMLButtonElement>document.querySelector('#dnarnacalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const sequence: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
    const select: string = (<HTMLSelectElement>document.querySelector('#contentselect')).value!;
    const ContentpercentageDna: (seq: string) => void = (seq: string) => {
        let a_count: number = 0;
        let t_count: number = 0;
        let c_count: number = 0;
        let g_count: number = 0;
        let x_count: number = 0;
        for (let i: number = 0; i < seq.length; i++) {
            if (seq[i] === 'A') {
                a_count++;
            } else if (seq[i] === 'T') {
                t_count++;
            } else if (seq[i] === 'G') {
                g_count++;
            } else if (seq[i] === 'C') {
                c_count++;
            } else {
                x_count++;
            }
        }
        const a_perc: number = a_count / seq.length * 100;
        const t_perc: number = t_count / seq.length * 100;
        const c_perc: number = c_count / seq.length * 100;
        const g_perc: number = g_count / seq.length * 100;
        const x_perc: number = x_count / seq.length * 100;
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
    const ContentpercentageRna: (seq: string) => void = (seq: string) => {
        let a_count: number = 0;
        let t_count: number = 0;
        let c_count: number = 0;
        let g_count: number = 0;
        let x_count: number = 0;
        for (let i: number = 0; i < seq.length; i++) {
            if (seq[i] === 'A') {
                a_count++;
            } else if (seq[i] === 'U') {
                t_count++;
            } else if (seq[i] === 'G') {
                g_count++;
            } else if (seq[i] === 'C') {
                c_count++;
            } else {
                x_count++;
            }
        }
        const a_perc: number = a_count / seq.length * 100;
        const t_perc: number = t_count / seq.length * 100;
        const c_perc: number = c_count / seq.length * 100;
        const g_perc: number = g_count / seq.length * 100;
        const x_perc: number = x_count / seq.length * 100;
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
    if (sequence.length === 0) {
        (<HTMLParagraphElement>document.querySelector('#drnaout')).innerHTML = `<p class='text-warning'>Please enter a valid value</p>`;
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
        if (select === 'dna') {
            ContentpercentageDna(sequence);
            (<HTMLParagraphElement>document.querySelector('#drnaout')).innerText = '';
        } else if (select === 'rna') {
            ContentpercentageRna(sequence);
            (<HTMLParagraphElement>document.querySelector('#drnaout')).innerText = '';
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event) => {
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
    (<HTMLParagraphElement>document.querySelector('#drnaout')).innerText = '';
});
(<HTMLInputElement>document.querySelector('#contentselect')).addEventListener('change', (event) => {
    event.preventDefault();
    const select: string = (<HTMLSelectElement>document.querySelector('#contentselect')).value!;
    const sequencepch: any = <HTMLInputElement>document.querySelector('#sequence');
    if (select === 'dna') {
        sequencepch.placeholder = 'eg. ATTGC';
        (<HTMLParagraphElement>document.querySelector('#base_t')).innerHTML = 'T';
        (<HTMLParagraphElement>document.querySelector('#title')).innerHTML = 'Enter the DNA sequence';
    } else if (select === 'rna') {
        sequencepch.placeholder = 'eg. AUUGC';
        (<HTMLParagraphElement>document.querySelector('#base_t')).innerHTML = 'U';
        (<HTMLParagraphElement>document.querySelector('#title')).innerHTML = 'Enter the RNA sequence';
    }
});
