"use strict";
document.querySelector('#subparticalc').addEventListener('click', (event) => {
    event.preventDefault();
    const x = parseFloat(document.querySelector('#x').value);
    const y = parseFloat(document.querySelector('#y').value);
    const a = parseFloat(document.querySelector('#a').value);
    const b = parseFloat(document.querySelector('#b').value);
    const v = (document.querySelector('#v').value);
    const w = (document.querySelector('#w').value);
    const clearValues = () => {
        document.querySelector('#x').value = '';
        document.querySelector('#y').value = '';
        document.querySelector('#a').value = '';
        document.querySelector('#b').value = '';
        document.querySelector('#v').value = '';
        document.querySelector('#w').value = '';
    };
    if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b) || v === '' || w === '') {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (a <= 0 || b <= 0 || x <= 0 || y <= 0) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    }
    else if (y === b && w !== v || y !== b && w === v) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">same elements must have the same atomic number and different elements must have a different atomic mumber</p>`;
        clearValues();
    }
    else if (!(x >= 2 * y || a >= 2 * b)) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-warning">The mass number must be greater than or equal to the atomic number times 2</p>`;
        clearValues();
    }
    else if (w === v) {
        if (x !== a) {
            document.querySelector('#subparticout').innerHTML = `<p class="text-success"><span class="text-warning">Isotopes</span><br/>${y}p<sup>+</sup> &#61; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#61; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>same chemical element, same chemical properties, different mass</p><br />`;
            clearValues();
        }
        else {
            document.querySelector('#subparticout').innerHTML = `<p class="text-success">${y}p<sup>+</sup> &#61; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#61; ${b}e<sup>-</sup><br/>${x - y}n  &#61; ${a - b}n<br/>same chemical element, same chemical properties, same mass</p><br />`;
            clearValues();
        }
    }
    else if (x === a) {
        document.querySelector('#subparticout').innerHTML = `<p class="text-success"><span class="text-warning">Isobars</span><br/>${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>different chemical element, different chemical properties, same mass</p><br />`;
        clearValues();
    }
    else {
        if (x - y === a - b) {
            document.querySelector('#subparticout').innerHTML = `<p class="text-success">${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#61; ${a - b}n<br/>different chemical element, different chemical properties, different mass</p><br />`;
            clearValues();
        }
        else {
            document.querySelector('#subparticout').innerHTML = `<p class="text-success">${y}p<sup>+</sup> &#8800; ${b}p<sup>+</sup><br/>${y}e<sup>-</sup> &#8800; ${b}e<sup>-</sup><br/>${x - y}n  &#8800; ${a - b}n<br/>different chemical element, different chemical properties, different mass</p><br />`;
            clearValues();
        }
    }
});
