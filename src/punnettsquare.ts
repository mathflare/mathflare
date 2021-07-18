(<HTMLButtonElement>document.getElementById('pscalc')).addEventListener('click', (event) => {
    event.preventDefault();
    const fatherGene: string = (<HTMLSelectElement>document.getElementById('fatherselect')).value!;
    const motherGene: string = (<HTMLSelectElement>document.getElementById('motherselect')).value!;
    const fetchTable = (fg: string, mg:string ) => {
        const F1: string = fg[0];
        const F2: string = fg[1];
        const M1: string = mg[0];
        const M2: string = mg[1];
        (<HTMLParagraphElement> document.getElementById('f1')).innerText = F1;
        (<HTMLParagraphElement> document.getElementById('f2')).innerText = F2;
        (<HTMLParagraphElement> document.getElementById('m1')).innerText = M1;
        (<HTMLParagraphElement> document.getElementById('m2')).innerText = M2;
        (<HTMLParagraphElement> document.getElementById('f1m1')).innerText = `${F1}${M1}`;
        (<HTMLParagraphElement> document.getElementById('f1m2')).innerText = `${F1}${M2}`;
        (<HTMLParagraphElement> document.getElementById('f2m1')).innerText = `${F2}${M1}`;
        (<HTMLParagraphElement> document.getElementById('f2m2')).innerText = `${F2}${M2}`;
    }
    fetchTable(fatherGene, motherGene);
});