//copyright (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.getElementById('pscalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const fatherGene: string = (<HTMLSelectElement>document.getElementById('fatherselect')).value!;
    const motherGene: string = (<HTMLSelectElement>document.getElementById('motherselect')).value!;
    const fetchTable = (fg: string, mg: string) => {
        const F1: string = fg[0];
        const F2: string = fg[1];
        const M1: string = mg[0];
        const M2: string = mg[1];
        (<HTMLParagraphElement>document.getElementById('f1')).innerText = F1;
        (<HTMLParagraphElement>document.getElementById('f2')).innerText = F2;
        (<HTMLParagraphElement>document.getElementById('m1')).innerText = M1;
        (<HTMLParagraphElement>document.getElementById('m2')).innerText = M2;
        (<HTMLParagraphElement>document.getElementById('f1m1')).innerText = `${F1}${M1}`;
        (<HTMLParagraphElement>document.getElementById('f1m2')).innerText = `${F1}${M2}`;
        (<HTMLParagraphElement>document.getElementById('f2m1')).innerText = `${F2}${M1}`;
        (<HTMLParagraphElement>document.getElementById('f2m2')).innerText = `${F2}${M2}`;
        if (F1 === M1 && F2 === M2 && F1 === F2) {
            if (F1 === 'A') {
                (<HTMLParagraphElement>document.getElementById('output')).innerText = 'Genotype: 100% for AA';
                (<HTMLParagraphElement>document.getElementById('phenotypeout')).innerText = 'Phenotype: 100% for A';
            }
            else if (F1 === 'a') {
                (<HTMLParagraphElement>document.getElementById('output')).innerText = 'Genotype: 100% for aa';
                (<HTMLParagraphElement>document.getElementById('phenotypeout')).innerText = 'Phenotype: 100% for a';
            }
        }
        else if (F1 == M1 && F2 == M2) {
            (<HTMLParagraphElement>document.getElementById('output')).innerText = 'Genotype: 50% for Aa, 25% for AA, 25% for aa';
            (<HTMLParagraphElement>document.getElementById('phenotypeout')).innerText = 'Phenotype: 75% for A, 25% for a';
        }
        else if (F1 == M1 && F2 != M2) {
            (<HTMLParagraphElement>document.getElementById('output')).innerText = 'Genotype: 50% for AA, 50% for Aa';
            (<HTMLParagraphElement>document.getElementById('phenotypeout')).innerText = 'Phenotype: 100% for Α';
        }
        else if (F1 != M1 && F2 == M2) {
            (<HTMLParagraphElement>document.getElementById('output')).innerText = 'Genotype: 50% for Aa, 50% for aa';
            (<HTMLParagraphElement>document.getElementById('phenotypeout')).innerText = 'Phenotype: 50% for A, 50% for a';
        }
        else if (F1 != M1 && F2 != M2) {
            (<HTMLParagraphElement>document.getElementById('output')).innerText = 'Genotype: 100% for Αa';
            (<HTMLParagraphElement>document.getElementById('phenotypeout')).innerText = 'Phenotype: 100% for Α';
        }
    }
    fetchTable(fatherGene, motherGene);
});
//copyright (c) 2021 MathFlare.xyz
