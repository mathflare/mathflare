"use strict";
const searcCalc = () => {
    const searchBox = document.querySelector("#search-box");
    const searchResult = document.querySelector("#search-result");
    const calculators = [
        ['area calculator', 'area'],
        ['average calculator', 'avg'],
        ['basic calculator', 'calculator'],
        ['complete carbon combustion calculator', 'carboncombustions'],
        ['math cheat sheet', 'cheatsheet'],
        ['lenght unit converter', 'clenght'],
        ['solution concentration calculator', 'concentration'],
        ['contact form', 'contact'],
        ['speed unit converter', 'cspeed'],
        ['temperature unit converter', 'ctemp'],
        ['weight unit converter', 'cweight'],
        ['diagonal calculator', 'diagpolyg'],
        ['displacement calculator', 'displacement'],
        ['1st degeree equation solver', 'equations'],
        ['factorial calculator', 'fact'],
        ['handshakes at party calculator', 'handshake'],
        ['incomplete carbon combustion calculator', 'imperfcarboncombust'],
        ['1st degree inequality solver', 'inequalities'],
        ['linear system of equations solver', 'linear-systems'],
        ['logarithm calculator', 'logar'],
        ['percentage calculator', 'percent'],
        ['perimeter calculator', 'perimeter'],
        ['hypotenuse pythagorean calculator', 'phypotenuses'],
        ['distance between two points calculator', 'pointsdistance'],
        ['exponent (power) calculator', 'pow'],
        ['right side pythagorean calculator', 'prightside'],
        ['punnett square calculator', 'punnettsquare'],
        ['quadratic equation solver', 'quadraticequations'],
        ['root calculator', 'roots'],
        ['square root calculator', 'roots'],
        ['cube root calculator', 'roots'],
        ['nth root calculator', 'roots'],
        ['round numbers', 'round'],
        ['slope calculator', 'slope'],
        ['trigonometric calculator (sine,cosine,tangent)', 'trigcalculator'],
        ['inorganic compound calculator', 'inorganiccomp'],
        ['neutralization reaction calculator', 'neutralization'],
        ['acid-metal reaction calculator', 'acidmetalreaction'],
        ['dna complement generator', 'complementarydna'],
        ['dna transcription generator', 'complementaryrna'],
        ['loan calculator', 'loan'],
        ['bmi calculator', 'bmi'],
        ['fraction addition calculator', 'fractionaddition'],
        ['unlike to like fraction converter', 'likefractions'],
        ['fraction reduction calculator', 'fractionreduction'],
        ['greatest common divisor calculator (GCD)', 'gcd'],
        ['least common multiple calculator (LCM)', 'lcm'],
        ['number of pairs calculator', 'numberpairs'],
        ['atomic/mass number to number of subatomic particles', 'subatomicparticles'],
        ['dna/rna to protein translator', 'proteintranslation'],
        ['dna/rna content calculator', 'dnarnacontent'],
        ['protein content calculator', 'proteincontent']
    ];
    searchBox.addEventListener("input", () => {
        const search = searchBox.value.toLowerCase();
        searchResult.innerHTML = '';
        if (search.length > 0) {
            for (let i = 0; i < calculators.length; i++) {
                if (calculators[i][0].toLowerCase().includes(search)) {
                    searchResult.innerHTML += `<a href="${calculators[i][1]}.html">${calculators[i][0]}</a><br/>`;
                }
            }
        }
        else {
            searchResult.innerHTML = 'no results found';
        }
    });
};
const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};
const GCD = (a, b) => {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    return absB === 0 ? absA : GCD(absB, absA % absB);
};
const LCM = (a, b) => {
    if (a < 0 && b < 0) {
        return -a * b / GCD(a, b);
    }
    else {
        return a * b / GCD(a, b);
    }
};
const reduceFraction = (x, y) => {
    let result = '';
    if (x / y === Math.floor(x / y)) {
        result = `${(x / y).toString()}`;
    }
    else if (x !== Math.floor(x) || y !== Math.floor(y)) {
        result = `&#8764; ${(x / y).toFixed(3).toString()}`;
    }
    else {
        for (let i = Math.max(Math.abs(x), Math.abs(y)); i > 1; i--) {
            if ((x % i === 0) && (y % i === 0)) {
                x /= i;
                y /= i;
            }
        }
        if (x > 0 && y < 0) {
            result = `<sup>${(-x).toString()}</sup>&frasl;<sub>${(-y).toString()}</sub>`;
        }
        else if (x < 0 && y < 0) {
            result = `<sup>${(-x).toString()}</sup>&frasl;<sub>${(-y).toString()}</sub>`;
        }
        else {
            result = `<sup>${x.toString()}</sup>&frasl;<sub>${y.toString()}</sub>`;
        }
    }
    return result;
};
const likeToUnlike = (x, y, a, b) => {
    const lcm = LCM(Math.abs(y), Math.abs(b));
    const temp1 = lcm / Math.abs(y);
    const temp2 = lcm / Math.abs(b);
    x *= temp1;
    y *= temp1;
    a *= temp2;
    b *= temp2;
    if (y < 0 && b < 0) {
        return `<span class="text-warning"><sup>${(-x).toString()}</sup>&frasl;<sub>${(Math.abs(y)).toString()}</sub></span>  <sup>${(-a).toString()}</sup>&frasl;<sub>${(Math.abs(b)).toString()}</sub>`;
    }
    else if (b < 0) {
        return `<span class="text-warning"><sup>${(x).toString()}</sup>&frasl;<sub>${(Math.abs(y)).toString()}</sub></span>  <sup>${(-a).toString()}</sup>&frasl;<sub>${(Math.abs(b)).toString()}</sub>`;
    }
    else if (y < 0) {
        return `<span class="text-warning"><sup>${(-x).toString()}</sup>&frasl;<sub>${(Math.abs(y)).toString()}</sub></span>  <sup>${(a).toString()}</sup>&frasl;<sub>${(Math.abs(b)).toString()}</sub>`;
    }
    else {
        return `<span class="text-warning"><sup>${(x).toString()}</sup>&frasl;<sub>${(Math.abs(y)).toString()}</sub></span>  <sup>${(a).toString()}</sup>&frasl;<sub>${(Math.abs(b)).toString()}</sub>`;
    }
};
const addFractions = (x, y, a, b) => {
    const lcm = LCM(Math.abs(y), Math.abs(b));
    const temp1 = lcm / Math.abs(y);
    const temp2 = lcm / Math.abs(b);
    let result = [
        []
    ];
    x *= temp1;
    y *= temp1;
    a *= temp2;
    b *= temp2;
    if (y < 0 && b < 0) {
        result[0][0] = -x - a;
        result[0][1] = Math.abs(y);
        return result;
    }
    else if (b < 0) {
        result[0][0] = x - a;
        result[0][1] = Math.abs(y);
        return result;
    }
    else if (y < 0) {
        result[0][0] = -x + a;
        result[0][1] = Math.abs(y);
        return result;
    }
    else {
        result[0][0] = x + a;
        result[0][1] = Math.abs(y);
        return result;
    }
};
const Dnatranscription = (strand) => {
    let result = '';
    for (let i = 0; i < strand.length; i++) {
        switch (strand[i]) {
            case 'A':
                result += 'U';
                break;
            case 'T':
                result += 'A';
                break;
            case 'G':
                result += 'C';
                break;
            case 'C':
                result += 'G';
                break;
            default:
                result += 'X';
                break;
        }
    }
    return result;
};
const openImage = (imgUri, imgAlt, imgWidth, imgHeight) => window.open(imgUri, `MathFlare.xyz - ${imgAlt}` || 'MathFlare.xyz', `width=${imgWidth / 2},height=${imgHeight / 2}`);
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Success: copied to clipboard');
    }, (err) => {
        console.error('Error: could not copy to clipboard: ', err);
    });
};
document.addEventListener('keydown', (e) => {
    const sidebar = document.querySelector('#menuSidebar');
    const offcanvas = new bootstrap.Offcanvas(sidebar);
    if (e.keyCode === 192) {
        e.stopPropagation();
        e.preventDefault();
        offcanvas.toggle(sidebar);
    }
});
document.oncontextmenu = (clickEvent) => {
    console.log(clickEvent);
};
