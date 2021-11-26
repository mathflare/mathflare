"use strict";
document.querySelector('#proteincontcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const select = document.querySelector('#select').value;
    const Dictionary = {
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
    const proteinTranslation = (sequence) => {
        let protein = '';
        for (let i = 0; i < sequence.length; i += 3) {
            let curr = sequence.toUpperCase().substring(i, i + 3);
            if (Dictionary[curr] === 'STOP') {
                protein += '*';
            }
            else {
                if (typeof Dictionary[curr] !== 'undefined') {
                    protein += Dictionary[curr];
                }
                else {
                    protein += 'X';
                }
            }
        }
        return protein;
    };
    const proteinPerc = (sequence) => {
        const percent = {
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
        const count = {
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
        let error_perc = 0;
        let error_count = 0;
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === '*') {
                percent['END'] += 1 / sequence.length * 100;
                count['END']++;
            }
            else if (percent[sequence[i]] === undefined) {
                error_perc += 1 / sequence.length * 100;
                error_count++;
            }
            else {
                percent[sequence[i]] += 1 / sequence.length * 100;
                count[sequence[i]]++;
            }
        }
        document.querySelector('#f_count').innerText = `${count['F']}`;
        document.querySelector('#l_count').innerText = `${count['L']}`;
        document.querySelector('#i_count').innerText = `${count['I']}`;
        document.querySelector('#v_count').innerText = `${count['V']}`;
        document.querySelector('#m_count').innerText = `${count['M']}`;
        document.querySelector('#s_count').innerText = `${count['S']}`;
        document.querySelector('#p_count').innerText = `${count['P']}`;
        document.querySelector('#t_count').innerText = `${count['T']}`;
        document.querySelector('#a_count').innerText = `${count['A']}`;
        document.querySelector('#y_count').innerText = `${count['Y']}`;
        document.querySelector('#h_count').innerText = `${count['H']}`;
        document.querySelector('#n_count').innerText = `${count['N']}`;
        document.querySelector('#d_count').innerText = `${count['D']}`;
        document.querySelector('#end_count').innerText = `${count['END']}`;
        document.querySelector('#q_count').innerText = `${count['Q']}`;
        document.querySelector('#k_count').innerText = `${count['K']}`;
        document.querySelector('#e_count').innerText = `${count['E']}`;
        document.querySelector('#c_count').innerText = `${count['C']}`;
        document.querySelector('#r_count').innerText = `${count['R']}`;
        document.querySelector('#g_count').innerText = `${count['G']}`;
        document.querySelector('#w_count').innerText = `${count['W']}`;
        document.querySelector('#x_count').innerText = `${error_count}`;
        document.querySelector('#f_perc').innerText = `${percent['F'].toFixed(2)}`;
        document.querySelector('#l_perc').innerText = `${percent['L'].toFixed(2)}`;
        document.querySelector('#i_perc').innerText = `${percent['I'].toFixed(2)}`;
        document.querySelector('#v_perc').innerText = `${percent['V'].toFixed(2)}`;
        document.querySelector('#m_perc').innerText = `${percent['M'].toFixed(2)}`;
        document.querySelector('#s_perc').innerText = `${percent['S'].toFixed(2)}`;
        document.querySelector('#p_perc').innerText = `${percent['P'].toFixed(2)}`;
        document.querySelector('#t_perc').innerText = `${percent['T'].toFixed(2)}`;
        document.querySelector('#a_perc').innerText = `${percent['A'].toFixed(2)}`;
        document.querySelector('#y_perc').innerText = `${percent['Y'].toFixed(2)}`;
        document.querySelector('#h_perc').innerText = `${percent['H'].toFixed(2)}`;
        document.querySelector('#n_perc').innerText = `${percent['N'].toFixed(2)}`;
        document.querySelector('#d_perc').innerText = `${percent['D'].toFixed(2)}`;
        document.querySelector('#end_perc').innerText = `${percent['END'].toFixed(2)}`;
        document.querySelector('#q_perc').innerText = `${percent['Q'].toFixed(2)}`;
        document.querySelector('#k_perc').innerText = `${percent['K'].toFixed(2)}`;
        document.querySelector('#e_perc').innerText = `${percent['E'].toFixed(2)}`;
        document.querySelector('#c_perc').innerText = `${percent['C'].toFixed(2)}`;
        document.querySelector('#r_perc').innerText = `${percent['R'].toFixed(2)}`;
        document.querySelector('#g_perc').innerText = `${percent['G'].toFixed(2)}`;
        document.querySelector('#w_perc').innerText = `${percent['W'].toFixed(2)}`;
        document.querySelector('#x_perc').innerText = `${error_perc.toFixed(2)}`;
    };
    if (select === 'Protein') {
        const Protein = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
        if (Protein === '') {
            document.querySelector('#sequence').focus();
            document.querySelector('#f_count').innerText = '';
            document.querySelector('#l_count').innerText = '';
            document.querySelector('#i_count').innerText = '';
            document.querySelector('#v_count').innerText = '';
            document.querySelector('#m_count').innerText = '';
            document.querySelector('#s_count').innerText = '';
            document.querySelector('#p_count').innerText = '';
            document.querySelector('#t_count').innerText = '';
            document.querySelector('#a_count').innerText = '';
            document.querySelector('#y_count').innerText = '';
            document.querySelector('#h_count').innerText = '';
            document.querySelector('#n_count').innerText = '';
            document.querySelector('#d_count').innerText = '';
            document.querySelector('#end_count').innerText = '';
            document.querySelector('#q_count').innerText = '';
            document.querySelector('#k_count').innerText = '';
            document.querySelector('#e_count').innerText = '';
            document.querySelector('#c_count').innerText = '';
            document.querySelector('#r_count').innerText = '';
            document.querySelector('#g_count').innerText = '';
            document.querySelector('#w_count').innerText = '';
            document.querySelector('#x_count').innerText = '';
            document.querySelector('#f_perc').innerText = '';
            document.querySelector('#l_perc').innerText = '';
            document.querySelector('#i_perc').innerText = '';
            document.querySelector('#v_perc').innerText = '';
            document.querySelector('#m_perc').innerText = '';
            document.querySelector('#s_perc').innerText = '';
            document.querySelector('#p_perc').innerText = '';
            document.querySelector('#t_perc').innerText = '';
            document.querySelector('#a_perc').innerText = '';
            document.querySelector('#y_perc').innerText = '';
            document.querySelector('#h_perc').innerText = '';
            document.querySelector('#n_perc').innerText = '';
            document.querySelector('#d_perc').innerText = '';
            document.querySelector('#end_perc').innerText = '';
            document.querySelector('#q_perc').innerText = '';
            document.querySelector('#k_perc').innerText = '';
            document.querySelector('#e_perc').innerText = '';
            document.querySelector('#c_perc').innerText = '';
            document.querySelector('#r_perc').innerText = '';
            document.querySelector('#g_perc').innerText = '';
            document.querySelector('#w_perc').innerText = '';
            document.querySelector('#x_perc').innerText = '';
        }
        else {
            proteinPerc(Protein);
        }
    }
    else if (select === 'RNA') {
        const RNA = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
        if (RNA === '') {
            document.querySelector('#sequence').focus();
            document.querySelector('#f_count').innerText = '';
            document.querySelector('#l_count').innerText = '';
            document.querySelector('#i_count').innerText = '';
            document.querySelector('#v_count').innerText = '';
            document.querySelector('#m_count').innerText = '';
            document.querySelector('#s_count').innerText = '';
            document.querySelector('#p_count').innerText = '';
            document.querySelector('#t_count').innerText = '';
            document.querySelector('#a_count').innerText = '';
            document.querySelector('#y_count').innerText = '';
            document.querySelector('#h_count').innerText = '';
            document.querySelector('#n_count').innerText = '';
            document.querySelector('#d_count').innerText = '';
            document.querySelector('#end_count').innerText = '';
            document.querySelector('#q_count').innerText = '';
            document.querySelector('#k_count').innerText = '';
            document.querySelector('#e_count').innerText = '';
            document.querySelector('#c_count').innerText = '';
            document.querySelector('#r_count').innerText = '';
            document.querySelector('#g_count').innerText = '';
            document.querySelector('#w_count').innerText = '';
            document.querySelector('#x_count').innerText = '';
            document.querySelector('#f_perc').innerText = '';
            document.querySelector('#l_perc').innerText = '';
            document.querySelector('#i_perc').innerText = '';
            document.querySelector('#v_perc').innerText = '';
            document.querySelector('#m_perc').innerText = '';
            document.querySelector('#s_perc').innerText = '';
            document.querySelector('#p_perc').innerText = '';
            document.querySelector('#t_perc').innerText = '';
            document.querySelector('#a_perc').innerText = '';
            document.querySelector('#y_perc').innerText = '';
            document.querySelector('#h_perc').innerText = '';
            document.querySelector('#n_perc').innerText = '';
            document.querySelector('#d_perc').innerText = '';
            document.querySelector('#end_perc').innerText = '';
            document.querySelector('#q_perc').innerText = '';
            document.querySelector('#k_perc').innerText = '';
            document.querySelector('#e_perc').innerText = '';
            document.querySelector('#c_perc').innerText = '';
            document.querySelector('#r_perc').innerText = '';
            document.querySelector('#g_perc').innerText = '';
            document.querySelector('#w_perc').innerText = '';
            document.querySelector('#x_perc').innerText = '';
        }
        else if (RNA.length % 3 !== 0) {
            document.querySelector('#f_count').innerText = '';
            document.querySelector('#l_count').innerText = '';
            document.querySelector('#i_count').innerText = '';
            document.querySelector('#v_count').innerText = '';
            document.querySelector('#m_count').innerText = '';
            document.querySelector('#s_count').innerText = '';
            document.querySelector('#p_count').innerText = '';
            document.querySelector('#t_count').innerText = '';
            document.querySelector('#a_count').innerText = '';
            document.querySelector('#y_count').innerText = '';
            document.querySelector('#h_count').innerText = '';
            document.querySelector('#n_count').innerText = '';
            document.querySelector('#d_count').innerText = '';
            document.querySelector('#end_count').innerText = '';
            document.querySelector('#q_count').innerText = '';
            document.querySelector('#k_count').innerText = '';
            document.querySelector('#e_count').innerText = '';
            document.querySelector('#c_count').innerText = '';
            document.querySelector('#r_count').innerText = '';
            document.querySelector('#g_count').innerText = '';
            document.querySelector('#w_count').innerText = '';
            document.querySelector('#x_count').innerText = '';
            document.querySelector('#f_perc').innerText = '';
            document.querySelector('#l_perc').innerText = '';
            document.querySelector('#i_perc').innerText = '';
            document.querySelector('#v_perc').innerText = '';
            document.querySelector('#m_perc').innerText = '';
            document.querySelector('#s_perc').innerText = '';
            document.querySelector('#p_perc').innerText = '';
            document.querySelector('#t_perc').innerText = '';
            document.querySelector('#a_perc').innerText = '';
            document.querySelector('#y_perc').innerText = '';
            document.querySelector('#h_perc').innerText = '';
            document.querySelector('#n_perc').innerText = '';
            document.querySelector('#d_perc').innerText = '';
            document.querySelector('#end_perc').innerText = '';
            document.querySelector('#q_perc').innerText = '';
            document.querySelector('#k_perc').innerText = '';
            document.querySelector('#e_perc').innerText = '';
            document.querySelector('#c_perc').innerText = '';
            document.querySelector('#r_perc').innerText = '';
            document.querySelector('#g_perc').innerText = '';
            document.querySelector('#w_perc').innerText = '';
            document.querySelector('#x_perc').innerText = '';
        }
        else {
            const translatedRna = proteinTranslation(RNA);
            proteinPerc(translatedRna);
        }
    }
    else if (select === 'DNA') {
        const DNA = document.querySelector('#sequence').value.replace(/\s/g, '').toUpperCase();
        const RNA = Dnatranscription(DNA);
        if (RNA === '') {
            document.querySelector('#sequence').focus();
            document.querySelector('#f_count').innerText = '';
            document.querySelector('#l_count').innerText = '';
            document.querySelector('#i_count').innerText = '';
            document.querySelector('#v_count').innerText = '';
            document.querySelector('#m_count').innerText = '';
            document.querySelector('#s_count').innerText = '';
            document.querySelector('#p_count').innerText = '';
            document.querySelector('#t_count').innerText = '';
            document.querySelector('#a_count').innerText = '';
            document.querySelector('#y_count').innerText = '';
            document.querySelector('#h_count').innerText = '';
            document.querySelector('#n_count').innerText = '';
            document.querySelector('#d_count').innerText = '';
            document.querySelector('#end_count').innerText = '';
            document.querySelector('#q_count').innerText = '';
            document.querySelector('#k_count').innerText = '';
            document.querySelector('#e_count').innerText = '';
            document.querySelector('#c_count').innerText = '';
            document.querySelector('#r_count').innerText = '';
            document.querySelector('#g_count').innerText = '';
            document.querySelector('#w_count').innerText = '';
            document.querySelector('#x_count').innerText = '';
            document.querySelector('#f_perc').innerText = '';
            document.querySelector('#l_perc').innerText = '';
            document.querySelector('#i_perc').innerText = '';
            document.querySelector('#v_perc').innerText = '';
            document.querySelector('#m_perc').innerText = '';
            document.querySelector('#s_perc').innerText = '';
            document.querySelector('#p_perc').innerText = '';
            document.querySelector('#t_perc').innerText = '';
            document.querySelector('#a_perc').innerText = '';
            document.querySelector('#y_perc').innerText = '';
            document.querySelector('#h_perc').innerText = '';
            document.querySelector('#n_perc').innerText = '';
            document.querySelector('#d_perc').innerText = '';
            document.querySelector('#end_perc').innerText = '';
            document.querySelector('#q_perc').innerText = '';
            document.querySelector('#k_perc').innerText = '';
            document.querySelector('#e_perc').innerText = '';
            document.querySelector('#c_perc').innerText = '';
            document.querySelector('#r_perc').innerText = '';
            document.querySelector('#g_perc').innerText = '';
            document.querySelector('#w_perc').innerText = '';
            document.querySelector('#x_perc').innerText = '';
        }
        else if (RNA.length % 3 !== 0) {
            document.querySelector('#f_count').innerText = '';
            document.querySelector('#l_count').innerText = '';
            document.querySelector('#i_count').innerText = '';
            document.querySelector('#v_count').innerText = '';
            document.querySelector('#m_count').innerText = '';
            document.querySelector('#s_count').innerText = '';
            document.querySelector('#p_count').innerText = '';
            document.querySelector('#t_count').innerText = '';
            document.querySelector('#a_count').innerText = '';
            document.querySelector('#y_count').innerText = '';
            document.querySelector('#h_count').innerText = '';
            document.querySelector('#n_count').innerText = '';
            document.querySelector('#d_count').innerText = '';
            document.querySelector('#end_count').innerText = '';
            document.querySelector('#q_count').innerText = '';
            document.querySelector('#k_count').innerText = '';
            document.querySelector('#e_count').innerText = '';
            document.querySelector('#c_count').innerText = '';
            document.querySelector('#r_count').innerText = '';
            document.querySelector('#g_count').innerText = '';
            document.querySelector('#w_count').innerText = '';
            document.querySelector('#x_count').innerText = '';
            document.querySelector('#f_perc').innerText = '';
            document.querySelector('#l_perc').innerText = '';
            document.querySelector('#i_perc').innerText = '';
            document.querySelector('#v_perc').innerText = '';
            document.querySelector('#m_perc').innerText = '';
            document.querySelector('#s_perc').innerText = '';
            document.querySelector('#p_perc').innerText = '';
            document.querySelector('#t_perc').innerText = '';
            document.querySelector('#a_perc').innerText = '';
            document.querySelector('#y_perc').innerText = '';
            document.querySelector('#h_perc').innerText = '';
            document.querySelector('#n_perc').innerText = '';
            document.querySelector('#d_perc').innerText = '';
            document.querySelector('#end_perc').innerText = '';
            document.querySelector('#q_perc').innerText = '';
            document.querySelector('#k_perc').innerText = '';
            document.querySelector('#e_perc').innerText = '';
            document.querySelector('#c_perc').innerText = '';
            document.querySelector('#r_perc').innerText = '';
            document.querySelector('#g_perc').innerText = '';
            document.querySelector('#w_perc').innerText = '';
            document.querySelector('#x_perc').innerText = '';
        }
        else {
            const translatedDna = proteinTranslation(RNA);
            proteinPerc(translatedDna);
        }
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#sequence').value = '';
    document.querySelector('#f_count').innerText = '';
    document.querySelector('#l_count').innerText = '';
    document.querySelector('#i_count').innerText = '';
    document.querySelector('#v_count').innerText = '';
    document.querySelector('#m_count').innerText = '';
    document.querySelector('#s_count').innerText = '';
    document.querySelector('#p_count').innerText = '';
    document.querySelector('#t_count').innerText = '';
    document.querySelector('#a_count').innerText = '';
    document.querySelector('#y_count').innerText = '';
    document.querySelector('#h_count').innerText = '';
    document.querySelector('#n_count').innerText = '';
    document.querySelector('#d_count').innerText = '';
    document.querySelector('#end_count').innerText = '';
    document.querySelector('#q_count').innerText = '';
    document.querySelector('#k_count').innerText = '';
    document.querySelector('#e_count').innerText = '';
    document.querySelector('#c_count').innerText = '';
    document.querySelector('#r_count').innerText = '';
    document.querySelector('#g_count').innerText = '';
    document.querySelector('#w_count').innerText = '';
    document.querySelector('#x_count').innerText = '';
    document.querySelector('#f_perc').innerText = '';
    document.querySelector('#l_perc').innerText = '';
    document.querySelector('#i_perc').innerText = '';
    document.querySelector('#v_perc').innerText = '';
    document.querySelector('#m_perc').innerText = '';
    document.querySelector('#s_perc').innerText = '';
    document.querySelector('#p_perc').innerText = '';
    document.querySelector('#t_perc').innerText = '';
    document.querySelector('#a_perc').innerText = '';
    document.querySelector('#y_perc').innerText = '';
    document.querySelector('#h_perc').innerText = '';
    document.querySelector('#n_perc').innerText = '';
    document.querySelector('#d_perc').innerText = '';
    document.querySelector('#end_perc').innerText = '';
    document.querySelector('#q_perc').innerText = '';
    document.querySelector('#k_perc').innerText = '';
    document.querySelector('#e_perc').innerText = '';
    document.querySelector('#c_perc').innerText = '';
    document.querySelector('#r_perc').innerText = '';
    document.querySelector('#g_perc').innerText = '';
    document.querySelector('#w_perc').innerText = '';
    document.querySelector('#x_perc').innerText = '';
});
