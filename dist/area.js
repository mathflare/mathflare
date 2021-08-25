"use strict";
document.querySelector('#squarecalc').addEventListener('click', (event) => {
    event.preventDefault();
    const side = parseFloat(document.querySelector('#squareside').value);
    if (isNaN(side)) {
        document.querySelector('#squareout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#squareside').value = "";
    }
    else if (side <= 0) {
        document.querySelector('#squareout').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.querySelector('#squareside').value = "";
    }
    else {
        document.querySelector('#squareout').innerHTML = `<p class="text-success">The area of the square is A = ${side * side}cm<sup>2</sup></p>`;
        document.querySelector('#squareside').value = "";
    }
});
document.querySelector('#paracalc').addEventListener('click', (event) => {
    event.preventDefault();
    const width = parseFloat(document.querySelector('#paraw').value);
    const height = parseFloat(document.querySelector('#parah').value);
    if (isNaN(width) || isNaN(height)) {
        document.querySelector('#paraout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#paraw').value = "";
        document.querySelector('#parah').value = "";
    }
    else if (width <= 0 || height <= 0) {
        document.querySelector('#paraout').innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        document.querySelector('#paraw').value = "";
        document.querySelector('#parah').value = "";
    }
    else {
        document.querySelector('#paraout').innerHTML = `<p class="text-success">The area of the parallelogram is A = ${width * height}cm<sup>2</sup></p>`;
        document.querySelector('#paraw').value = "";
        document.querySelector('#parah').value = "";
    }
});
document.querySelector('#tricalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#tria').value);
    const b = parseFloat(document.querySelector('#trib').value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector('#triout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#tria').value = "";
        document.querySelector('#trib').value = "";
    }
    else if (a <= 0 || b <= 0) {
        document.querySelector('#triout').innerHTML = `<p class="text-warning">Both the segment and the height must be a positive number</p>`;
        document.querySelector('#tria').value = "";
        document.querySelector('#trib').value = "";
    }
    else {
        document.querySelector('#triout').innerHTML = `<p class="text-success">The area of the triangle is A = ${(a * b) / 2}cm<sup>2</sup></p>`;
        document.querySelector('#tria').value = "";
        document.querySelector('#trib').value = "";
    }
});
document.querySelector('#etricalc').addEventListener('click', (event) => {
    event.preventDefault();
    const side = parseFloat(document.querySelector('#etris').value);
    if (isNaN(side)) {
        document.querySelector('#etriout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#etris').value = "";
    }
    else if (side <= 0) {
        document.querySelector('#etriout').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.querySelector('#etris').value = "";
    }
    else {
        document.querySelector('#etriout').innerHTML = `<p class="text-success">The area of the equilateral triangle is A = ${(side * side * Math.sqrt(3)) / 4}cm<sup>2</sup> (&#8764; ${((side * side * Math.sqrt(3)) / 4).toFixed(3)})</p>`;
        document.querySelector('#etris').value = "";
    }
});
document.querySelector('#circlecalc').addEventListener('click', (event) => {
    event.preventDefault();
    const r = parseFloat(document.querySelector('#circler').value);
    const p = 3.14;
    const pperc = 3.14159265;
    if (isNaN(r)) {
        document.querySelector('#circleout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#circler').value = "";
    }
    else if (r <= 0) {
        document.querySelector('#circleout').innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        document.querySelector('#circler').value = "";
    }
    else {
        document.querySelector('#circleout').innerHTML = `<p class="text-success">The area of the circle is A &#8776; ${r * r * p}cm<sup>2</sup> (A &#8776; ${r * r * pperc})</p>`;
        document.querySelector('#circler').value = "";
    }
});
document.querySelector('#trapcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#trapa').value);
    const b = parseFloat(document.querySelector('#trapb').value);
    const c = parseFloat(document.querySelector('#trapc').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.querySelector('#trapout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#trapa').value = "";
        document.querySelector('#trapb').value = "";
        document.querySelector('#trapc').value = "";
    }
    else if (a <= 0 || b <= 0 || c <= 0) {
        document.querySelector('#trapout').innerHTML = `<p class="text-warning">Both the small/large segment and the height must be a positive number</p>`;
        document.querySelector('#trapa').value = "";
        document.querySelector('#trapb').value = "";
        document.querySelector('#trapc').value = "";
    }
    else {
        document.querySelector('#trapout').innerHTML = `<p class="text-success">The area of the trapezoid is A = ${((a + b) * c) / 2}cm<sup>2</sup></p>`;
        document.querySelector('#trapa').value = "";
        document.querySelector('#trapb').value = "";
        document.querySelector('#trapc').value = "";
    }
});
