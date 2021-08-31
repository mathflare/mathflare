"use strict";
document.querySelector('#pscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const fatherGene = document.querySelector('#fatherselect').value;
    const motherGene = document.querySelector('#motherselect').value;
    const fetchGenotypeTable = (fg, mg) => {
        const F1 = fg[0];
        const F2 = fg[1];
        const M1 = mg[0];
        const M2 = mg[1];
        document.querySelector('#f1').innerText = F1;
        document.querySelector('#f2').innerText = F2;
        document.querySelector('#m1').innerText = M1;
        document.querySelector('#m2').innerText = M2;
        document.querySelector('#f1m1').innerText = `${F1}${M1}`;
        document.querySelector('#f1m2').innerText = `${F1}${M2}`;
        document.querySelector('#f2m1').innerText = `${F2}${M1}`;
        document.querySelector('#f2m2').innerText = `${F2}${M2}`;
        if (F1 === M1 && F2 === M2 && F1 === F2) {
            if (F1 === 'A') {
                document.querySelector('#output').innerText = 'Genotype: 100% for AA';
                document.querySelector('#phenotypeout').innerText = 'Phenotype: 100% for A';
            }
            else if (F1 === 'a') {
                document.querySelector('#output').innerText = 'Genotype: 100% for aa';
                document.querySelector('#phenotypeout').innerText = 'Phenotype: 100% for a';
            }
        }
        else if (F1 == M1 && F2 == M2) {
            document.querySelector('#output').innerText = 'Genotype: 50% for Aa, 25% for AA, 25% for aa';
            document.querySelector('#phenotypeout').innerText = 'Phenotype: 75% for A, 25% for a';
        }
        else if (F1 == M1 && F2 != M2) {
            document.querySelector('#output').innerText = 'Genotype: 50% for AA, 50% for Aa';
            document.querySelector('#phenotypeout').innerText = 'Phenotype: 100% for Α';
        }
        else if (F1 != M1 && F2 == M2) {
            document.querySelector('#output').innerText = 'Genotype: 50% for Aa, 50% for aa';
            document.querySelector('#phenotypeout').innerText = 'Phenotype: 50% for A, 50% for a';
        }
        else if (F1 != M1 && F2 != M2) {
            document.querySelector('#output').innerText = 'Genotype: 100% for Αa';
            document.querySelector('#phenotypeout').innerText = 'Phenotype: 100% for Α';
        }
    };
    fetchGenotypeTable(fatherGene, motherGene);
});
