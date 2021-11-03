"use strict";
document.querySelector('#subparticalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.querySelector('#x').value);
    const y = parseFloat(document.querySelector('#y').value);
    const a = parseFloat(document.querySelector('#a').value);
    const b = parseFloat(document.querySelector('#b').value);
    const v = (document.querySelector('#v').value);
    const w = (document.querySelector('#w').value);
    if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b) || v === '' || w === '') {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    }
    else if (a <= 0 || b <= 0 || x <= 0 || y <= 0) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">All values must be positive</p>`;
    }
    else if (Math.floor(a) !== a || Math.floor(b) !== b || Math.floor(x) !== x || Math.floor(y) !== y) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">All values must be integers</p>`;
    }
    else if (y === b && w !== v || y !== b && w === v) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">same elements must have the same atomic number and different elements must have a different atomic mumber</p>`;
    }
    else if (x < 2 * y || a < 2 * b) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
    }
    else if (w === v) {
        if (x !== a) {
            document.querySelector('#proton1').innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
            document.querySelector('#proton2').innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
            document.querySelector('#electron1').innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
            document.querySelector('#electron2').innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
            document.querySelector('#neutron1').innerHTML = `<p class="text-success">${x - y}n</p>`;
            document.querySelector('#neutron2').innerHTML = `<p class="text-success">${a - b}n</p>`;
            document.querySelector('#subparticout').innerHTML = `<p class="text-success"><span class="text-warning">Isotopes</span><br/>same chemical element, same chemical properties, different mass</p>`;
        }
        else {
            document.querySelector('#proton1').innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
            document.querySelector('#proton2').innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
            document.querySelector('#electron1').innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
            document.querySelector('#electron2').innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
            document.querySelector('#neutron1').innerHTML = `<p class="text-success">${x - y}n</p>`;
            document.querySelector('#neutron2').innerHTML = `<p class="text-success">${a - b}n</p>`;
            document.querySelector('#subparticout').innerHTML = `<p class="text-success">same chemical element, same chemical properties, same mass</p>`;
        }
    }
    else if (x === a) {
        document.querySelector('#proton1').innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
        document.querySelector('#proton2').innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
        document.querySelector('#electron1').innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
        document.querySelector('#electron2').innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
        document.querySelector('#neutron1').innerHTML = `<p class="text-success">${x - y}n</p>`;
        document.querySelector('#neutron2').innerHTML = `<p class="text-success">${a - b}n</p>`;
        document.querySelector('#subparticout').innerHTML = `<p class="text-success"><span class="text-warning">Isobars</span><br/>different chemical element, different chemical properties, same mass</p>`;
    }
    else {
        document.querySelector('#proton1').innerHTML = `<p class="text-success">${y}p<sup>+</sup></p>`;
        document.querySelector('#proton2').innerHTML = `<p class="text-success">${b}p<sup>+</sup></p>`;
        document.querySelector('#electron1').innerHTML = `<p class="text-success">${y}e<sup>-</sup></p>`;
        document.querySelector('#electron2').innerHTML = `<p class="text-success">${b}e<sup>-</sup></p>`;
        document.querySelector('#neutron1').innerHTML = `<p class="text-success">${x - y}n</p>`;
        document.querySelector('#neutron2').innerHTML = `<p class="text-success">${a - b}n</p>`;
        document.querySelector('#subparticout').innerHTML = `<p class="text-success">different chemical element, different chemical properties, different mass</p>`;
    }
});
document.querySelector('#clearbtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#x').value = '';
    document.querySelector('#y').value = '';
    document.querySelector('#a').value = '';
    document.querySelector('#b').value = '';
    document.querySelector('#w').value = '';
    document.querySelector('#v').value = '';
    document.querySelector('#proton1').innerHTML = 'p<sup>+</sup>';
    document.querySelector('#proton2').innerHTML = 'p<sup>+</sup>';
    document.querySelector('#electron1').innerHTML = 'e<sup>-</sup>';
    document.querySelector('#electron2').innerHTML = 'e<sup>-</sup>';
    document.querySelector('#neutron1').innerHTML = 'n';
    document.querySelector('#neutron2').innerHTML = 'n';
    document.querySelector('#subparticout').innerText = '';
});
