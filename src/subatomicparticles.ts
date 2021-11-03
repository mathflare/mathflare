//copyrights (c) 2021 MathFlare.xyz
(<HTMLButtonElement>document.querySelector('#subparticalc')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const x: number = parseFloat((<HTMLInputElement>document.querySelector('#x')).value)!;
    const y: number = parseFloat((<HTMLInputElement>document.querySelector('#y')).value)!;
    const a: number = parseFloat((<HTMLInputElement>document.querySelector('#a')).value)!;
    const b: number = parseFloat((<HTMLInputElement>document.querySelector('#b')).value)!;
    const v: string = ((<HTMLInputElement>document.querySelector('#v')).value)!;
    const w: string = ((<HTMLInputElement>document.querySelector('#w')).value)!;
    if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b) || v === '' || w === '') {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    } else if (a <= 0 || b <= 0 || x <= 0 || y <= 0) {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">All values must be positive</p>`;
    } else if (Math.floor(a) !== a || Math.floor(b) !== b || Math.floor(x) !== x || Math.floor(y) !== y) {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">All values must be integers</p>`;
    } else if (y === b && w !== v || y !== b && w === v) {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">same elements must have the same atomic number and different elements must have a different atomic mumber</p>`;
    } else if (x < 2 * y || a < 2 * b) {
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
    } else if (w === v) {
        if (x !== a) {
            //${y}p<sup>+</sup> &#61; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#61; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>
            (<HTMLParagraphElement>document.querySelector('#proton1')).innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#proton2')).innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#electron1')).innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#electron2')).innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#neutron1')).innerHTML = `<p class="text-success">${x - y}n</p>`;
            (<HTMLParagraphElement>document.querySelector('#neutron2')).innerHTML = `<p class="text-success">${a - b}n</p>`;
            (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success"><span class="text-warning">Isotopes</span><br/>same chemical element, same chemical properties, different mass</p>`;
        } else {
            //${y}p<sup>+</sup> &#61; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#61; ${b}e<sup>-</sup><br/>${x - y}n  &#61; ${a - b}n<br/>
            (<HTMLParagraphElement>document.querySelector('#proton1')).innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#proton2')).innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#electron1')).innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#electron2')).innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
            (<HTMLParagraphElement>document.querySelector('#neutron1')).innerHTML = `<p class="text-success">${x - y}n</p>`;
            (<HTMLParagraphElement>document.querySelector('#neutron2')).innerHTML = `<p class="text-success">${a - b}n</p>`;
            (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success">same chemical element, same chemical properties, same mass</p>`;
        }
    } else if (x === a) {
        //${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>
        (<HTMLParagraphElement>document.querySelector('#proton1')).innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#proton2')).innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#electron1')).innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#electron2')).innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#neutron1')).innerHTML = `<p class="text-success">${x - y}n</p>`;
        (<HTMLParagraphElement>document.querySelector('#neutron2')).innerHTML = `<p class="text-success">${a - b}n</p>`;
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success"><span class="text-warning">Isobars</span><br/>different chemical element, different chemical properties, same mass</p>`;
    } else {
        //${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>
        (<HTMLParagraphElement>document.querySelector('#proton1')).innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#proton2')).innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#electron1')).innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#electron2')).innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
        (<HTMLParagraphElement>document.querySelector('#neutron1')).innerHTML = `<p class="text-success">${x - y}n</p>`;
        (<HTMLParagraphElement>document.querySelector('#neutron2')).innerHTML = `<p class="text-success">${a - b}n</p>`;
        (<HTMLParagraphElement>document.querySelector('#subparticout')).innerHTML = `<p class="text-success">different chemical element, different chemical properties, different mass</p>`;
    }
});
(<HTMLButtonElement>document.querySelector('#clearbtn')).addEventListener('click', (event: Event) => {
    event.preventDefault();
    (<HTMLInputElement>document.querySelector('#x')).value = '';
    (<HTMLInputElement>document.querySelector('#y')).value = '';
    (<HTMLInputElement>document.querySelector('#a')).value = '';
    (<HTMLInputElement>document.querySelector('#b')).value = '';
    (<HTMLInputElement>document.querySelector('#w')).value = '';
    (<HTMLInputElement>document.querySelector('#v')).value = '';
    (<HTMLParagraphElement>document.querySelector('#proton1')).innerHTML = 'p<sup>+</sup>';
    (<HTMLParagraphElement>document.querySelector('#proton2')).innerHTML = 'p<sup>+</sup>';
    (<HTMLParagraphElement>document.querySelector('#electron1')).innerHTML = 'e<sup>-</sup>';
    (<HTMLParagraphElement>document.querySelector('#electron2')).innerHTML = 'e<sup>-</sup>';
    (<HTMLParagraphElement>document.querySelector('#neutron1')).innerHTML = 'n';
    (<HTMLParagraphElement>document.querySelector('#neutron2')).innerHTML = 'n';
    (<HTMLParagraphElement>document.querySelector('#subparticout')).innerText = '';
});
//copyrights (c) 2021 MathFlare.xyz