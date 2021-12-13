"use strict";
document.querySelector('#electroncalc').addEventListener('click', (event) => {
    event.preventDefault();
    const z = parseFloat(document.querySelector('#atomicnum').value);
    const atomStructure = (atomicnum) => {
        const Shells = {
            1: "H: K(1)",
            2: "He: K(2)",
            3: "Li: K(2) L(1)",
            4: "Be: K(2) L(2)",
            5: "B: K(2) L(3)",
            6: "C: K(2) L(4)",
            7: "N: K(2) L(5)",
            8: "O: K(2) L(6)",
            9: "F: K(2) L(7)",
            10: "Ne: K(2) L(8)",
            11: "Na: K(2) L(8) M(1)",
            12: "Mg: K(2) L(8) M(2)",
            13: "Al: K(2) L(8) M(3)",
            14: "Si: K(2) L(8) M(4)",
            15: "P: K(2) L(8) M(5)",
            16: "S: K(2) L(8) M(6)",
            17: "Cl: K(2) L(8) M(7)",
            18: "Ar: K(2) L(8) M(8)",
            19: "K: K(2) L(8) M(8) N(1)",
            20: "Ca: K(2) L(8) M(8) N(2)",
            21: "Sc: K(2) L(8) M(9) N(2)",
            22: "Ti: K(2) L(8) M(10) N(2)",
            23: "V: K(2) L(8) M(11) N(2)",
            24: "Cr: K(2) L(8) M(13) N(1)",
            25: "Mn: K(2) L(8) M(13) N(2)",
            26: "Fe: K(2) L(8) M(14) N(2)",
            27: "Co: K(2) L(8) M(15) N(2)",
            28: "Ni: K(2) L(8) M(16) N(2)",
            29: "Cu: K(2) L(8) M(18) N(1)",
            30: "Zn: K(2) L(8) M(18) N(2)",
            31: "Ga: K(2) L(8) M(18) N(3)",
            32: "Ge: K(2) L(8) M(18) N(4)",
            33: "As: K(2) L(8) M(18) N(5)",
            34: "Se: K(2) L(8) M(18) N(6)",
            35: "Br: K(2) L(8) M(18) N(7)",
            36: "Kr: K(2) L(8) M(18) N(8)",
            37: "Rb: K(2) L(8) M(18) N(8) O(1)",
            38: "Sr: K(2) L(8) M(18) N(8) O(2)",
            39: "Y: K(2) L(8) M(18) N(9) O(2)",
            40: "Zr: K(2) L(8) M(18) N(10) O(2)",
            41: "Nb: K(2) L(8) M(18) N(12) O(1)",
            42: "Mo: K(2) L(8) M(18) N(13) O(1)",
            43: "Tc: K(2) L(8) M(18) N(13) O(2)",
            44: "Ru: K(2) L(8) M(18) N(15) O(1)",
            45: "Rh: K(2) L(8) M(18) N(16) O(1)",
            46: "Pd: K(2) L(8) M(18) N(18)",
            47: "Ag: K(2) L(8) M(18) N(18) O(1)",
            48: "Cd: K(2) L(8) M(18) N(18) O(2)",
            49: "In: K(2) L(8) M(18) N(18) O(3)",
            50: "Sn: K(2) L(8) M(18) N(18) O(4)",
            51: "Sb: K(2) L(8) M(18) N(18) O(5)",
            52: "Te: K(2) L(8) M(18) N(18) O(6)",
            53: "I: K(2) L(8) M(18) N(18) O(7)",
            54: "Xe: K(2) L(8) M(18) N(18) O(8)",
            55: "Cs: K(2) L(8) M(18) N(18) O(8) P(1)",
            56: "Ba: K(2) L(8) M(18) N(18) O(8) P(2)",
            57: "La: K(2) L(8) M(18) N(18) O(9) P(2)",
            58: "Ce: K(2) L(8) M(18) N(19) O(9) P(2)",
            59: "Pr: K(2) L(8) M(18) N(21) O(8) P(2)",
            60: "Nd: K(2) L(8) M(18) N(22) O(8) P(2)",
            61: "Pm: K(2) L(8) M(18) N(23) O(8) P(2)",
            62: "Sm: K(2) L(8) M(18) N(24) O(8) P(2)",
            63: "Eu: K(2) L(8) M(18) N(25) O(8) P(2)",
            64: "Gd: K(2) L(8) M(18) N(25) O(9) P(2)",
            65: "Tb: K(2) L(8) M(18) N(27) O(8) P(2)",
            66: "Dy: K(2) L(8) M(18) N(28) O(8) P(2)",
            67: "Ho: K(2) L(8) M(18) N(29) O(8) P(2)",
            68: "Er: K(2) L(8) M(18) N(30) O(8) P(2)",
            69: "Tm: K(2) L(8) M(18) N(31) O(8) P(2)",
            70: "Yb: K(2) L(8) M(18) N(32) O(8) P(2)",
            71: "Lu: K(2) L(8) M(18) N(32) O(9) P(2)",
            72: "Hf: K(2) L(8) M(18) N(32) O(10) P(2)",
            73: "Ta: K(2) L(8) M(18) N(32) O(11) P(2)",
            74: "W: K(2) L(8) M(18) N(32) O(12) P(2)",
            75: "Re: K(2) L(8) M(18) N(32) O(13) P(2)",
            76: "Os: K(2) L(8) M(18) N(32) O(14) P(2)",
            77: "Ir: K(2) L(8) M(18) N(32) O(15) P(2)",
            78: "Pt: K(2) L(8) M(18) N(32) O(17) P(1)",
            79: "Au: K(2) L(8) M(18) N(32) O(18) P(1)",
            80: "Hg: K(2) L(8) M(18) N(32) O(18) P(2)",
            81: "Tl: K(2) L(8) M(18) N(32) O(18) P(3)",
            82: "Pb: K(2) L(8) M(18) N(32) O(18) P(4)",
            83: "Bi: K(2) L(8) M(18) N(32) O(18) P(5)",
            84: "Po: K(2) L(8) M(18) N(32) O(18) P(6)",
            85: "At: K(2) L(8) M(18) N(32) O(18) P(7)",
            86: "Rn: K(2) L(8) M(18) N(32) O(18) P(8)",
            87: "Fr: K(2) L(8) M(18) N(32) O(18) P(8) Q(1)",
            88: "Ra: K(2) L(8) M(18) N(32) O(18) P(8) Q(2)",
            89: "Ac: K(2) L(8) M(18) N(32) O(18) P(9) Q(2)",
            90: "Th: K(2) L(8) M(18) N(32) O(18) P(10) Q(2)",
            91: "Pa: K(2) L(8) M(18) N(32) O(20) P(9) Q(2)",
            92: "U: K(2) L(8) M(18) N(32) O(21) P(9) Q(2)",
            93: "Np: K(2) L(8) M(18) N(32) O(22) P(9) Q(2)",
            94: "Pu: K(2) L(8) M(18) N(32) O(24) P(8) Q(2)",
            95: "Am: K(2) L(8) M(18) N(32) O(25) P(8) Q(2)",
            96: "Cm: K(2) L(8) M(18) N(32) O(25) P(9) Q(2)",
            97: "Bk: K(2) L(8) M(18) N(32) O(27) P(8) Q(2)",
            98: "Cf: K(2) L(8) M(18) N(32) O(28) P(8) Q(2)",
            99: "Es: K(2) L(8) M(18) N(32) O(29) P(8) Q(2)",
            100: "Fm: K(2) L(8) M(18) N(32) O(30) P(8) Q(2)",
            101: "Md: K(2) L(8) M(18) N(32) O(31) P(8) Q(2)",
            102: "No: K(2) L(8) M(18) N(32) O(32) P(8) Q(2)",
            103: "Lr: K(2) L(8) M(18) N(32) O(32) P(8) Q(3)",
            104: "Rf: K(2) L(8) M(18) N(32) O(32) P(10) Q(2)",
            105: "Db: K(2) L(8) M(18) N(32) O(32) P(11) Q(2)",
            106: "Sg: K(2) L(8) M(18) N(32) O(32) P(12) Q(2)",
            107: "Bh: K(2) L(8) M(18) N(32) O(32) P(13) Q(2)",
            108: "Hs: K(2) L(8) M(18) N(32) O(32) P(14) Q(2)",
            109: "Mt: K(2) L(8) M(18) N(32) O(32) P(15) Q(2)",
            110: "Ds: K(2) L(8) M(18) N(32) O(32) P(17) Q(1)",
            111: "Rg: K(2) L(8) M(18) N(32) O(32) P(18) Q(1)",
            112: "Cn: K(2) L(8) M(18) N(32) O(32) P(18) Q(2)",
            113: "Nh: K(2) L(8) M(18) N(32) O(32) P(18) Q(3)",
            114: "Fl: K(2) L(8) M(18) N(32) O(32) P(18) Q(4)",
            115: "Mc: K(2) L(8) M(18) N(32) O(32) P(18) Q(5)",
            116: "Lv: K(2) L(8) M(18) N(32) O(32) P(18) Q(6)",
            117: "Ts: K(2) L(8) M(18) N(32) O(32) P(18) Q(7)",
            118: "Og: K(2) L(8) M(18) N(32) O(32) P(18) Q(8)"
        };
        document.querySelector('#electronout').innerHTML = `<p class="text-success">${Shells[atomicnum]}</p>`;
    };
    if (isNaN(z)) {
        document.querySelector('#electronout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (z <= 0) {
        document.querySelector('#electronout').innerHTML = `<p class="text-warning">The atomic number must be greater than 0</p>`;
    }
    else if (Math.floor(z) !== z) {
        document.querySelector('#electronout').innerHTML = `<p class="text-warning">The atomic number must be an integer</p>`;
    }
    else if (z > 118) {
        document.querySelector('#electronout').innerHTML = `<p class="text-warning">There is no element with an atomiv number of ${z}</p>`;
    }
    else {
        atomStructure(z);
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    document.querySelector('#atomicnum').value = '';
    document.querySelector('#electronout').innerText = '';
});
