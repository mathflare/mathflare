"use strict";
document.querySelector('#dihpscalc').addEventListener('click', (event) => {
    event.preventDefault();
    const fatherGene = document.querySelector('#fatherselectA').value + document.querySelector('#fatherselectB').value;
    const motherGene = document.querySelector('#motherselectA').value + document.querySelector('#motherselectB').value;
    const GenotypeTable = (fatherGene, motherGene) => {
        const Fgamet1 = fatherGene[0] + fatherGene[2];
        const Fgamet2 = fatherGene[0] + fatherGene[3];
        const Fgamet3 = fatherGene[1] + fatherGene[2];
        const Fgamet4 = fatherGene[1] + fatherGene[3];
        const Mgamet1 = motherGene[0] + motherGene[2];
        const Mgamet2 = motherGene[0] + motherGene[3];
        const Mgamet3 = motherGene[1] + motherGene[2];
        const Mgamet4 = motherGene[1] + motherGene[3];
        document.querySelector('#Fgamet1').innerText = Fgamet1;
        document.querySelector('#Fgamet2').innerText = Fgamet2;
        document.querySelector('#Fgamet3').innerText = Fgamet3;
        document.querySelector('#Fgamet4').innerText = Fgamet4;
        document.querySelector('#Mgamet1').innerText = Mgamet1;
        document.querySelector('#Mgamet2').innerText = Mgamet2;
        document.querySelector('#Mgamet3').innerText = Mgamet3;
        document.querySelector('#Mgamet4').innerText = Mgamet4;
        document.querySelector('#Fline1').innerText = Mgamet1[0] + Fgamet1[0] + Mgamet1[1] + Fgamet1[1];
        document.querySelector('#Fline2').innerText = Mgamet1[0] + Fgamet2[0] + Mgamet1[1] + Fgamet2[1];
        document.querySelector('#Fline3').innerText = Mgamet1[0] + Fgamet3[0] + Mgamet1[1] + Fgamet3[1];
        document.querySelector('#Fline4').innerText = Mgamet1[0] + Fgamet4[0] + Mgamet1[1] + Fgamet4[1];
        document.querySelector('#Sline1').innerText = Mgamet2[0] + Fgamet1[0] + Mgamet2[1] + Fgamet1[1];
        document.querySelector('#Sline2').innerText = Mgamet2[0] + Fgamet2[0] + Mgamet2[1] + Fgamet2[1];
        document.querySelector('#Sline3').innerText = Mgamet2[0] + Fgamet3[0] + Mgamet2[1] + Fgamet3[1];
        document.querySelector('#Sline4').innerText = Mgamet2[0] + Fgamet4[0] + Mgamet2[1] + Fgamet4[1];
        document.querySelector('#Tline1').innerText = Mgamet3[0] + Fgamet1[0] + Mgamet3[1] + Fgamet1[1];
        document.querySelector('#Tline2').innerText = Mgamet3[0] + Fgamet2[0] + Mgamet3[1] + Fgamet2[1];
        document.querySelector('#Tline3').innerText = Mgamet3[0] + Fgamet3[0] + Mgamet3[1] + Fgamet3[1];
        document.querySelector('#Tline4').innerText = Mgamet3[0] + Fgamet4[0] + Mgamet3[1] + Fgamet4[1];
        document.querySelector('#Qline1').innerText = Mgamet4[0] + Fgamet1[0] + Mgamet4[1] + Fgamet1[1];
        document.querySelector('#Qline2').innerText = Mgamet4[0] + Fgamet2[0] + Mgamet4[1] + Fgamet2[1];
        document.querySelector('#Qline3').innerText = Mgamet4[0] + Fgamet3[0] + Mgamet4[1] + Fgamet3[1];
        document.querySelector('#Qline4').innerText = Mgamet4[0] + Fgamet4[0] + Mgamet4[1] + Fgamet4[1];
        ChancesTable(Fgamet1, Fgamet2, Fgamet3, Fgamet4, Mgamet1, Mgamet2, Mgamet3, Mgamet4);
    };
    const ChancesTable = (Fgamet1, Fgamet2, Fgamet3, Fgamet4, Mgamet1, Mgamet2, Mgamet3, Mgamet4) => {
        document.querySelector('#AABB').innerText = '';
        document.querySelector('#AABb').innerText = '';
        document.querySelector('#AAbb').innerText = '';
        document.querySelector('#AaBB').innerText = '';
        document.querySelector('#AaBb').innerText = '';
        document.querySelector('#Aabb').innerText = '';
        document.querySelector('#aaBB').innerText = '';
        document.querySelector('#aaBb').innerText = '';
        document.querySelector('#aabb').innerText = '';
        document.querySelector('#AB').innerText = '';
        document.querySelector('#Ab').innerText = '';
        document.querySelector('#aB').innerText = '';
        document.querySelector('#ab').innerText = '';
        let tableG = [
            Mgamet1[0] + Fgamet1[0] + Mgamet1[1] + Fgamet1[1],
            Mgamet1[0] + Fgamet2[0] + Mgamet1[1] + Fgamet2[1],
            Mgamet1[0] + Fgamet3[0] + Mgamet1[1] + Fgamet3[1],
            Mgamet1[0] + Fgamet4[0] + Mgamet1[1] + Fgamet4[1],
            Mgamet2[0] + Fgamet1[0] + Mgamet2[1] + Fgamet1[1],
            Mgamet2[0] + Fgamet2[0] + Mgamet2[1] + Fgamet2[1],
            Mgamet2[0] + Fgamet3[0] + Mgamet2[1] + Fgamet3[1],
            Mgamet2[0] + Fgamet4[0] + Mgamet2[1] + Fgamet4[1],
            Mgamet3[0] + Fgamet1[0] + Mgamet3[1] + Fgamet1[1],
            Mgamet3[0] + Fgamet2[0] + Mgamet3[1] + Fgamet2[1],
            Mgamet3[0] + Fgamet3[0] + Mgamet3[1] + Fgamet3[1],
            Mgamet3[0] + Fgamet4[0] + Mgamet3[1] + Fgamet4[1],
            Mgamet4[0] + Fgamet1[0] + Mgamet4[1] + Fgamet1[1],
            Mgamet4[0] + Fgamet2[0] + Mgamet4[1] + Fgamet2[1],
            Mgamet4[0] + Fgamet3[0] + Mgamet4[1] + Fgamet3[1],
            Mgamet4[0] + Fgamet4[0] + Mgamet4[1] + Fgamet4[1]
        ];
        const possibilities = {
            AABB: 0,
            AABb: 0,
            AAbb: 0,
            AaBB: 0,
            AaBb: 0,
            Aabb: 0,
            aaBB: 0,
            aaBb: 0,
            aabb: 0,
            AB: 0,
            Ab: 0,
            aB: 0,
            ab: 0
        };
        for (let i = 0; i < 16; i++) {
            if (tableG[i] === "AABB") {
                possibilities['AABB'] += 1 / 16 * 100;
                possibilities['AB'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "AABb" || tableG[i] === "AAbB") {
                possibilities['AABb'] += 1 / 16 * 100;
                possibilities['AB'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "AAbb") {
                possibilities['AAbb'] += 1 / 16 * 100;
                possibilities['Ab'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "AaBB" || tableG[i] === "aABB") {
                possibilities['AaBB'] += 1 / 16 * 100;
                possibilities['AB'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "AaBb" || tableG[i] === "aABb" || tableG[i] === "AabB" || tableG[i] === "aAbB") {
                possibilities['AaBb'] += 1 / 16 * 100;
                possibilities['AB'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "Aabb" || tableG[i] === "aAbb") {
                possibilities['Aabb'] += 1 / 16 * 100;
                possibilities['Ab'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "aaBB") {
                possibilities['aaBB'] += 1 / 16 * 100;
                possibilities['aB'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "aaBb" || tableG[i] === "aabB") {
                possibilities['aaBb'] += 1 / 16 * 100;
                possibilities['aB'] += 1 / 16 * 100;
            }
            else if (tableG[i] === "aabb") {
                possibilities['aabb'] += 1 / 16 * 100;
                possibilities['ab'] += 1 / 16 * 100;
            }
        }
        document.querySelector('#AABB').innerText = `${possibilities['AABB'].toFixed(2)}`;
        document.querySelector('#AABb').innerText = `${possibilities['AABb'].toFixed(2)}`;
        document.querySelector('#AAbb').innerText = `${possibilities['AAbb'].toFixed(2)}`;
        document.querySelector('#AaBB').innerText = `${possibilities['AaBB'].toFixed(2)}`;
        document.querySelector('#AaBb').innerText = `${possibilities['AaBb'].toFixed(2)}`;
        document.querySelector('#Aabb').innerText = `${possibilities['Aabb'].toFixed(2)}`;
        document.querySelector('#aaBB').innerText = `${possibilities['aaBB'].toFixed(2)}`;
        document.querySelector('#aaBb').innerText = `${possibilities['aaBb'].toFixed(2)}`;
        document.querySelector('#aabb').innerText = `${possibilities['aabb'].toFixed(2)}`;
        document.querySelector('#AB').innerText = `${possibilities['AB'].toFixed(2)}`;
        document.querySelector('#Ab').innerText = `${possibilities['Ab'].toFixed(2)}`;
        document.querySelector('#aB').innerText = `${possibilities['aB'].toFixed(2)}`;
        document.querySelector('#ab').innerText = `${possibilities['ab'].toFixed(2)}`;
    };
    GenotypeTable(fatherGene, motherGene);
});
