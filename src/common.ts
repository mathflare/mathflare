const searcCalc: () => void = () => {
    const searchBox: any = <HTMLInputElement>document.querySelector("#search-box");
    const searchResult: any = <HTMLParagraphElement>document.querySelector("#search-result");
    const calculators: string[][] = [
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
        ['trigonometric calculator (sine,cosine,tangent)', 'trigcalculator']
    ];
    searchBox.addEventListener("input", () => {
        const search: string = searchBox.value.toLowerCase();
        searchResult.innerHTML = '';
        if (search.length > 0) {
            for (let i = 0; i < calculators.length; i++) {
                if (calculators[i][0].toLowerCase().includes(search)) {
                    searchResult.innerHTML += `<a href="${calculators[i][1]}.html">${calculators[i][0]}</a><br/>`;
                }
            }
        } else {
            searchResult.innerHTML = 'no results found';
        }
    });
};

const degreesToRadians: (degrees: number) => number = (degrees: number) => {
    return degrees * (Math.PI / 180);
};

const countDecimalpart: (x: number, y: number) => number = (x: number, y: number) => {
    const num: string = (Math.abs(x)).toString();
    let numDecimalLenght: number = 0;
    const den: string = (Math.abs(x)).toString();
    let denDecimalLenght: number = 0;
    for (let i: number = 0; i < num.length; i++) {
        if (num[i] === '.')
            numDecimalLenght = num.length - i - 1;
    }
    for (let j: number = 0; j < den.length; j++) {
        if (den[j] === '.')
            denDecimalLenght = den.length - j - 1;
    }
    if (numDecimalLenght >= denDecimalLenght) {
        return numDecimalLenght;
    } else {
        return denDecimalLenght;
    }
};

const reduceFraction: (x: number, y: number) => string = (x: number, y: number) => {
    let result = '';
    if (x / y === Math.floor(x / y)) {
        result = `${(x / y).toString()}`;
    } else if (x !== Math.floor(x) || y !== Math.floor(y)) {
        for (let i: number = 0; i <= countDecimalpart(x, y); i++) {
            x *= 10;
            y *= 10;
        }
        for (let j: number = Math.max(Math.abs(x), Math.abs(y)); j > 1; j--) {
            if ((x % j === 0) && (y % j === 0)) {
                x /= j;
                y /= j;
            }
        }
        if (x > 0 && y < 0) {
            result = `<sup>${(-x).toString()}</sup>&frasl;<sub>${(-y).toString()}</sub>`;
        } else if (x < 0 && y < 0) {
            result = `<sup>${(-x).toString()}</sup>&frasl;<sub>${(-y).toString()}</sub>`;
        } else {
            result = `<sup>${x.toString()}</sup>&frasl;<sub>${y.toString()}</sub>`;
        }
    } else {
        for (let k: number = Math.max(Math.abs(x), Math.abs(y)); k > 1; k--) {
            if ((x % k === 0) && (y % k === 0)) {
                x /= k;
                y /= k;
            }
        }
        if (x > 0 && y < 0) {
            result = `<sup>${(-x).toString()}</sup>&frasl;<sub>${(-y).toString()}</sub>`;
        } else if (x < 0 && y < 0) {
            result = `<sup>${(-x).toString()}</sup>&frasl;<sub>${(-y).toString()}</sub>`;
        } else {
            result = `<sup>${x.toString()}</sup>&frasl;<sub>${y.toString()}</sub>`;
        }
    }
    return result;
};

const openImage: (imgUri: string, imgAlt: string, imgWidth: number, imgHeight: number) => void = (imgUri: string, imgAlt: string, imgWidth: number, imgHeight: number) => window.open(imgUri, `MathFlare.xyz - ${imgAlt}` || 'MathFlare.xyz', `width=${imgWidth / 2},height=${imgHeight / 2}`);

document.addEventListener('keydown', (e: any) => {
    const sidebar = <HTMLDivElement>document.querySelector('#menuSidebar');
    const offcanvas = new bootstrap.Offcanvas(sidebar);
    if (e.keyCode === 192) {
        e.stopPropagation();
        e.preventDefault();
        offcanvas.toggle(sidebar);
    }
});

document.oncontextmenu = (clickEvent: Event) => {
    console.log(clickEvent);
};