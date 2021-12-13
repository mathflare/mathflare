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
                if (typeof Dictionary[curr] !== 'undefined') {
                    protein += Dictionary[curr];
                } else {
                    protein += 'X';
                }
            }
        }
        return protein;
    };
    const proteinPerc: (sequence: string) => void = (sequence: string) => {
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
            W: 0
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
            W: 0
        };
        let error_perc: number = 0;
        let error_count: number = 0;
        for (let i: number = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                percent['END'] += 1 / sequence.length * 100;
                count['END']++;
            } else if (percent[sequence[i]] === undefined) {
                error_perc += 1 / sequence.length * 100;
                error_count++;
            } else {
                percent[sequence[i]] += 1 / sequence.length * 100;
                count[sequence[i]]++;
            }
        }

        //count
        (<HTMLParagraphElement>document.querySelector('#f_count')).innerText = `${count['F']}`;
        (<HTMLParagraphElement>document.querySelector('#l_count')).innerText = `${count['L']}`;
        (<HTMLParagraphElement>document.querySelector('#i_count')).innerText = `${count['I']}`;
        (<HTMLParagraphElement>document.querySelector('#v_count')).innerText = `${count['V']}`;
        (<HTMLParagraphElement>document.querySelector('#m_count')).innerText = `${count['M']}`;
        (<HTMLParagraphElement>document.querySelector('#s_count')).innerText = `${count['S']}`;
        (<HTMLParagraphElement>document.querySelector('#p_count')).innerText = `${count['P']}`;
        (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = `${count['T']}`;
        (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = `${count['A']}`;
        (<HTMLParagraphElement>document.querySelector('#y_count')).innerText = `${count['Y']}`;
        (<HTMLParagraphElement>document.querySelector('#h_count')).innerText = `${count['H']}`;
        (<HTMLParagraphElement>document.querySelector('#n_count')).innerText = `${count['N']}`;
        (<HTMLParagraphElement>document.querySelector('#d_count')).innerText = `${count['D']}`;
        (<HTMLParagraphElement>document.querySelector('#end_count')).innerText = `${count['END']}`;
        (<HTMLParagraphElement>document.querySelector('#q_count')).innerText = `${count['Q']}`;
        (<HTMLParagraphElement>document.querySelector('#k_count')).innerText = `${count['K']}`;
        (<HTMLParagraphElement>document.querySelector('#e_count')).innerText = `${count['E']}`;
        (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = `${count['C']}`;
        (<HTMLParagraphElement>document.querySelector('#r_count')).innerText = `${count['R']}`;
        (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = `${count['G']}`;
        (<HTMLParagraphElement>document.querySelector('#w_count')).innerText = `${count['W']}`;
        (<HTMLParagraphElement>document.querySelector('#x_count')).innerText = `${error_count}`;

        //percentage
        (<HTMLParagraphElement>document.querySelector('#f_perc')).innerText = `${percent['F'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#l_perc')).innerText = `${percent['L'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#i_perc')).innerText = `${percent['I'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#v_perc')).innerText = `${percent['V'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#m_perc')).innerText = `${percent['M'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#s_perc')).innerText = `${percent['S'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#p_perc')).innerText = `${percent['P'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = `${percent['T'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = `${percent['A'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#y_perc')).innerText = `${percent['Y'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#h_perc')).innerText = `${percent['H'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#n_perc')).innerText = `${percent['N'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#d_perc')).innerText = `${percent['D'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#end_perc')).innerText = `${percent['END'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#q_perc')).innerText = `${percent['Q'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#k_perc')).innerText = `${percent['K'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#e_perc')).innerText = `${percent['E'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = `${percent['C'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#r_perc')).innerText = `${percent['R'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = `${percent['G'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#w_perc')).innerText = `${percent['W'].toFixed(2)}`;
        (<HTMLParagraphElement>document.querySelector('#x_perc')).innerText = `${error_perc.toFixed(2)}`;

    };
    if (select === 'Protein') {
        const Protein: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        if (Protein === '') {
            (<HTMLInputElement>document.querySelector('#sequence')).focus();
            //count
            (<HTMLParagraphElement>document.querySelector('#f_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_count')).innerText = '';
            //percentage
            (<HTMLParagraphElement>document.querySelector('#f_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_perc')).innerText = '';
        } else {
            proteinPerc(Protein);
        }
    }
    else if (select === 'RNA') {
        const RNA: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        if (RNA === '') {
            (<HTMLInputElement>document.querySelector('#sequence')).focus();
            //count
            (<HTMLParagraphElement>document.querySelector('#f_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_count')).innerText = '';
            //percentage
            (<HTMLParagraphElement>document.querySelector('#f_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_perc')).innerText = '';
        } else if (RNA.length % 3 !== 0) {
            //count
            (<HTMLParagraphElement>document.querySelector('#f_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_count')).innerText = '';
            //percentage
            (<HTMLParagraphElement>document.querySelector('#f_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_perc')).innerText = '';
        } else {
            const translatedRna: string = proteinTranslation(RNA);
            proteinPerc(translatedRna);
        }
    } else if (select === 'DNA') {
        const DNA: string = (<HTMLInputElement>document.querySelector('#sequence')).value.replace(/\s/g, '').toUpperCase()!;
        const RNA: string = Dnatranscription(DNA);
        if (RNA === '') {
            (<HTMLInputElement>document.querySelector('#sequence')).focus();
            //count
            (<HTMLParagraphElement>document.querySelector('#f_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_count')).innerText = '';
            //percentage
            (<HTMLParagraphElement>document.querySelector('#f_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_perc')).innerText = '';
        } else if (RNA.length % 3 !== 0) {
            //count
            (<HTMLParagraphElement>document.querySelector('#f_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_count')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_count')).innerText = '';
            //percentage
            (<HTMLParagraphElement>document.querySelector('#f_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#l_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#i_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#v_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#m_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#s_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#p_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#y_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#h_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#n_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#d_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#end_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#q_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#k_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#e_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#r_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#w_perc')).innerText = '';
            (<HTMLParagraphElement>document.querySelector('#x_perc')).innerText = '';
        } else {
            const translatedDna: string = proteinTranslation(RNA);
            proteinPerc(translatedDna);
        }
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    (<HTMLInputElement>document.querySelector('#sequence')).value = '';
    //count
    (<HTMLParagraphElement>document.querySelector('#f_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#l_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#i_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#v_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#m_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#s_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#p_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#t_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#a_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#y_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#h_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#n_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#d_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#end_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#q_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#k_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#e_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#c_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#r_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#g_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#w_count')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#x_count')).innerText = '';
    //percentage
    (<HTMLParagraphElement>document.querySelector('#f_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#l_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#i_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#v_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#m_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#s_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#p_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#t_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#a_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#y_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#h_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#n_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#d_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#end_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#q_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#k_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#e_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#c_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#r_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#g_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#w_perc')).innerText = '';
    (<HTMLParagraphElement>document.querySelector('#x_perc')).innerText = '';
});