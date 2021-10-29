//copyright (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#pscalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const fatherGene: string = (<HTMLSelectElement>document.querySelector('#fatherselect')).value!;
    const motherGene: string = (<HTMLSelectElement>document.querySelector('#motherselect')).value!;
    const fetchGenotypeTable: (fg: string, mg: string) => void = (fg: string, mg: string) => {
        const F1: string = fg[0];
        const F2: string = fg[1];
        const M1: string = mg[0];
        const M2: string = mg[1];
        (<HTMLParagraphElement>document.querySelector('#f1')).innerText = F1;
        (<HTMLParagraphElement>document.querySelector('#f2')).innerText = F2;
        (<HTMLParagraphElement>document.querySelector('#m1')).innerText = M1;
        (<HTMLParagraphElement>document.querySelector('#m2')).innerText = M2;
        (<HTMLParagraphElement>document.querySelector('#f1m1')).innerText = `${F1}${M1}`;
        (<HTMLParagraphElement>document.querySelector('#f1m2')).innerText = `${F1}${M2}`;
        (<HTMLParagraphElement>document.querySelector('#f2m1')).innerText = `${F2}${M1}`;
        (<HTMLParagraphElement>document.querySelector('#f2m2')).innerText = `${F2}${M2}`;
        if (F1 === M1 && F2 === M2 && F1 === F2) {
            if (F1 === 'A') {
                (<HTMLParagraphElement>document.querySelector('#output')).innerText = 'Genotype: 100% for AA';
                (<HTMLParagraphElement>document.querySelector('#phenotypeout')).innerText = 'Phenotype: 100% for A';
            }
            else if (F1 === 'a') {
                (<HTMLParagraphElement>document.querySelector('#output')).innerText = 'Genotype: 100% for aa';
                (<HTMLParagraphElement>document.querySelector('#phenotypeout')).innerText = 'Phenotype: 100% for a';
            }
        }
        else if (F1 == M1 && F2 == M2) {
            (<HTMLParagraphElement>document.querySelector('#output')).innerText = 'Genotype: 50% for Aa, 25% for AA, 25% for aa';
            (<HTMLParagraphElement>document.querySelector('#phenotypeout')).innerText = 'Phenotype: 75% for A, 25% for a';
        }
        else if (F1 == M1 && F2 != M2) {
            (<HTMLParagraphElement>document.querySelector('#output')).innerText = 'Genotype: 50% for AA, 50% for Aa';
            (<HTMLParagraphElement>document.querySelector('#phenotypeout')).innerText = 'Phenotype: 100% for Α';
        }
        else if (F1 != M1 && F2 == M2) {
            (<HTMLParagraphElement>document.querySelector('#output')).innerText = 'Genotype: 50% for Aa, 50% for aa';
            (<HTMLParagraphElement>document.querySelector('#phenotypeout')).innerText = 'Phenotype: 50% for A, 50% for a';
        }
        else if (F1 != M1 && F2 != M2) {
            (<HTMLParagraphElement>document.querySelector('#output')).innerText = 'Genotype: 100% for Αa';
            (<HTMLParagraphElement>document.querySelector('#phenotypeout')).innerText = 'Phenotype: 100% for Α';
        }
    }
    fetchGenotypeTable(fatherGene, motherGene);
});
//copyright (c) 2021 MathFlare.xyz
