//copyright (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#dihpscalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const fatherGene: string = (<HTMLSelectElement>document.querySelector('#fatherselectA')).value! + (<HTMLSelectElement>document.querySelector('#fatherselectB')).value!;
    const motherGene: string = (<HTMLSelectElement>document.querySelector('#motherselectA')).value! + (<HTMLSelectElement>document.querySelector('#motherselectB')).value!;
    const GenotypeTable: (fatherGene: string, motherGene: string) => void = (fatherGene: string, motherGene: string) => {
        const Fgamet1: string = fatherGene[0] + fatherGene[2];
        const Fgamet2: string = fatherGene[0] + fatherGene[3];
        const Fgamet3: string = fatherGene[1] + fatherGene[2];
        const Fgamet4: string = fatherGene[1] + fatherGene[3];
        const Mgamet1: string = motherGene[0] + motherGene[2];
        const Mgamet2: string = motherGene[0] + motherGene[3];
        const Mgamet3: string = motherGene[1] + motherGene[2];
        const Mgamet4: string = motherGene[1] + motherGene[3];
        //GAMETES
        (<HTMLParagraphElement>document.querySelector('#Fgamet1')).innerText = Fgamet1;
        (<HTMLParagraphElement>document.querySelector('#Fgamet2')).innerText = Fgamet2;
        (<HTMLParagraphElement>document.querySelector('#Fgamet3')).innerText = Fgamet3;
        (<HTMLParagraphElement>document.querySelector('#Fgamet4')).innerText = Fgamet4;
        (<HTMLParagraphElement>document.querySelector('#Mgamet1')).innerText = Mgamet1;
        (<HTMLParagraphElement>document.querySelector('#Mgamet2')).innerText = Mgamet2;
        (<HTMLParagraphElement>document.querySelector('#Mgamet3')).innerText = Mgamet3;
        (<HTMLParagraphElement>document.querySelector('#Mgamet4')).innerText = Mgamet4;
        //FIRST LINE
        (<HTMLParagraphElement>document.querySelector('#Fline1')).innerText = Mgamet1[0] + Fgamet1[0] + Mgamet1[1] + Fgamet1[1];
        (<HTMLParagraphElement>document.querySelector('#Fline2')).innerText = Mgamet1[0] + Fgamet2[0] + Mgamet1[1] + Fgamet2[1];
        (<HTMLParagraphElement>document.querySelector('#Fline3')).innerText = Mgamet1[0] + Fgamet3[0] + Mgamet1[1] + Fgamet3[1];
        (<HTMLParagraphElement>document.querySelector('#Fline4')).innerText = Mgamet1[0] + Fgamet4[0] + Mgamet1[1] + Fgamet4[1];
        //SECOND LINE
        (<HTMLParagraphElement>document.querySelector('#Sline1')).innerText = Mgamet2[0] + Fgamet1[0] + Mgamet2[1] + Fgamet1[1];
        (<HTMLParagraphElement>document.querySelector('#Sline2')).innerText = Mgamet2[0] + Fgamet2[0] + Mgamet2[1] + Fgamet2[1];
        (<HTMLParagraphElement>document.querySelector('#Sline3')).innerText = Mgamet2[0] + Fgamet3[0] + Mgamet2[1] + Fgamet3[1];
        (<HTMLParagraphElement>document.querySelector('#Sline4')).innerText = Mgamet2[0] + Fgamet4[0] + Mgamet2[1] + Fgamet4[1];
        //THIRD LINE
        (<HTMLParagraphElement>document.querySelector('#Tline1')).innerText = Mgamet3[0] + Fgamet1[0] + Mgamet3[1] + Fgamet1[1];
        (<HTMLParagraphElement>document.querySelector('#Tline2')).innerText = Mgamet3[0] + Fgamet2[0] + Mgamet3[1] + Fgamet2[1];
        (<HTMLParagraphElement>document.querySelector('#Tline3')).innerText = Mgamet3[0] + Fgamet3[0] + Mgamet3[1] + Fgamet3[1];
        (<HTMLParagraphElement>document.querySelector('#Tline4')).innerText = Mgamet3[0] + Fgamet4[0] + Mgamet3[1] + Fgamet4[1];
        //FOURTH LINE
        (<HTMLParagraphElement>document.querySelector('#Qline1')).innerText = Mgamet4[0] + Fgamet1[0] + Mgamet4[1] + Fgamet1[1];
        (<HTMLParagraphElement>document.querySelector('#Qline2')).innerText = Mgamet4[0] + Fgamet2[0] + Mgamet4[1] + Fgamet2[1];
        (<HTMLParagraphElement>document.querySelector('#Qline3')).innerText = Mgamet4[0] + Fgamet3[0] + Mgamet4[1] + Fgamet3[1];
        (<HTMLParagraphElement>document.querySelector('#Qline4')).innerText = Mgamet4[0] + Fgamet4[0] + Mgamet4[1] + Fgamet4[1];
        //ChancesTable(Fgamet1, Fgamet2, Fgamet3, Fgamet4, Mgamet1, Mgamet2, Mgamet3, Mgamet4);
    }
    /* const ChancesTable: (Fgamet1: string, Fgamet2: string, Fgamet3: string, Fgamet4: string, Mgamet1: string, Mgamet2: string, Mgamet3: string, Mgamet4: string) => void = (Fgamet1: string, Fgamet2: string, Fgamet3: string, Fgamet4: string, Mgamet1: string, Mgamet2: string, Mgamet3: string, Mgamet4: string) => {
          const Genotype: { [key: string]: number }{
      Mgamet1[0] + Fgamet1[0] + Mgamet1[1] + Fgamet1[1]: 0,
      Mgamet1[0] + Fgamet2[0] + Mgamet1[1] + Fgamet2[1]: 0,
      Mgamet1[0] + Fgamet3[0] + Mgamet1[1] + Fgamet3[1]: 0,
      Mgamet1[0] + Fgamet4[0] + Mgamet1[1] + Fgamet4[1]: 0
  }
     }*/
    GenotypeTable(fatherGene, motherGene);

});
//copyright (c) 2021 MathFlare.xyz
