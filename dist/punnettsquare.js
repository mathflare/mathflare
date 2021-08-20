"use strict";
document.getElementById('pscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const fatherGene = document.getElementById('fatherselect').value;
    const motherGene = document.getElementById('motherselect').value;
    const fetchTable = (fg, mg) => {
        const F1 = fg[0];
        const F2 = fg[1];
        const M1 = mg[0];
        const M2 = mg[1];
        document.getElementById('f1').innerText = F1;
        document.getElementById('f2').innerText = F2;
        document.getElementById('m1').innerText = M1;
        document.getElementById('m2').innerText = M2;
        document.getElementById('f1m1').innerText = `${F1}${M1}`;
        document.getElementById('f1m2').innerText = `${F1}${M2}`;
        document.getElementById('f2m1').innerText = `${F2}${M1}`;
        document.getElementById('f2m2').innerText = `${F2}${M2}`;
        if (F1 === M1 && F2 === M2 && F1 === F2) {
            if (F1 === 'A') {
                document.getElementById('output').innerText = 'Genotype: 100% for AA';
                document.getElementById('phenotypeout').innerText = 'Phenotype: 100% for A';
            }
            else if (F1 === 'a') {
                document.getElementById('output').innerText = 'Genotype: 100% for aa';
                document.getElementById('phenotypeout').innerText = 'Phenotype: 100% for a';
            }
        }
        else if (F1 == M1 && F2 == M2) {
            document.getElementById('output').innerText = 'Genotype: 50% for Aa, 25% for AA, 25% for aa';
            document.getElementById('phenotypeout').innerText = 'Phenotype: 75% for A, 25% for a';
        }
        else if (F1 == M1 && F2 != M2) {
            document.getElementById('output').innerText = 'Genotype: 50% for AA, 50% for Aa';
            document.getElementById('phenotypeout').innerText = 'Phenotype: 100% for Α';
        }
        else if (F1 != M1 && F2 == M2) {
            document.getElementById('output').innerText = 'Genotype: 50% for Aa, 50% for aa';
            document.getElementById('phenotypeout').innerText = 'Phenotype: 50% for A, 50% for a';
        }
        else if (F1 != M1 && F2 != M2) {
            document.getElementById('output').innerText = 'Genotype: 100% for Αa';
            document.getElementById('phenotypeout').innerText = 'Phenotype: 100% for Α';
        }
    };
    fetchTable(fatherGene, motherGene);
});
