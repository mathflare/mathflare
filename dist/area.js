"use strict";
document.getElementById('squarecalc').addEventListener('click', (event) => {
    event.preventDefault();
    const side = parseFloat(document.getElementById('squareside').value);
    if (isNaN(side)) {
        document.getElementById('squareout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('squareside').value = "";
    }
    else if (side <= 0) {
        document.getElementById('squareout').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.getElementById('squareside').value = "";
    }
    else {
        document.getElementById('squareout').innerHTML = `<p class="text-success">The area of the square is A = ${side * side}cm<sup>2</sup></p>`;
        document.getElementById('squareside').value = "";
    }
});
document.getElementById('paracalc').addEventListener('click', (event) => {
    event.preventDefault();
    const width = parseFloat(document.getElementById('paraw').value);
    const height = parseFloat(document.getElementById('parah').value);
    if (isNaN(width) || isNaN(height)) {
        document.getElementById('paraout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('paraw').value = "";
        document.getElementById('parah').value = "";
    }
    else if (width <= 0 || height <= 0) {
        document.getElementById('paraout').innerHTML = `<p class="text-warning">Both the width and the height must be a positive number</p>`;
        document.getElementById('paraw').value = "";
        document.getElementById('parah').value = "";
    }
    else {
        document.getElementById('paraout').innerHTML = `<p class="text-success">The area of the parallelogram is A = ${width * height}cm<sup>2</sup></p>`;
        document.getElementById('paraw').value = "";
        document.getElementById('parah').value = "";
    }
});
document.getElementById('tricalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('tria').value);
    const b = parseFloat(document.getElementById('trib').value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('triout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('tria').value = "";
        document.getElementById('trib').value = "";
    }
    else if (a <= 0 || b <= 0) {
        document.getElementById('triout').innerHTML = `<p class="text-warning">Both the segment and the height must be a positive number</p>`;
        document.getElementById('tria').value = "";
        document.getElementById('trib').value = "";
    }
    else {
        document.getElementById('triout').innerHTML = `<p class="text-success">The area of the triangle is A = ${(a * b) / 2}cm<sup>2</sup></p>`;
        document.getElementById('tria').value = "";
        document.getElementById('trib').value = "";
    }
});
document.getElementById('etricalc').addEventListener('click', (event) => {
    event.preventDefault();
    const side = parseFloat(document.getElementById('etris').value);
    if (isNaN(side)) {
        document.getElementById('etriout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('etris').value = "";
    }
    else if (side <= 0) {
        document.getElementById('etriout').innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        document.getElementById('etris').value = "";
    }
    else {
        document.getElementById('etriout').innerHTML = `<p class="text-success">The area of the equilateral triangle is A = ${(side * side * Math.sqrt(3)) / 4}cm<sup>2</sup> (&#8764; ${((side * side * Math.sqrt(3)) / 4).toFixed(3)})</p>`;
        document.getElementById('etris').value = "";
    }
});
document.getElementById('circlecalc').addEventListener('click', (event) => {
    event.preventDefault();
    const r = parseFloat(document.getElementById('circler').value);
    const p = 3.14;
    const pperc = 3.14159265;
    if (isNaN(r)) {
        document.getElementById('circleout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('circler').value = "";
    }
    else if (r <= 0) {
        document.getElementById('circleout').innerHTML = `<p class="text-warning">The radius must be a positive number</p>`;
        document.getElementById('circler').value = "";
    }
    else {
        document.getElementById('circleout').innerHTML = `<p class="text-success">The area of the circle is A &#8776; ${r * r * p}cm<sup>2</sup> (A &#8776; ${r * r * pperc})</p>`;
        document.getElementById('circler').value = "";
    }
});
document.getElementById('trapcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('trapa').value);
    const b = parseFloat(document.getElementById('trapb').value);
    const c = parseFloat(document.getElementById('trapc').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('trapout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('trapa').value = "";
        document.getElementById('trapb').value = "";
        document.getElementById('trapc').value = "";
    }
    else if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById('trapout').innerHTML = `<p class="text-warning">Both the small/large segment and the height must be a positive number</p>`;
        document.getElementById('trapa').value = "";
        document.getElementById('trapb').value = "";
        document.getElementById('trapc').value = "";
    }
    else {
        document.getElementById('trapout').innerHTML = `<p class="text-success">The area of the trapezoid is A = ${((a + b) * c) / 2}cm<sup>2</sup></p>`;
        document.getElementById('trapa').value = "";
        document.getElementById('trapb').value = "";
        document.getElementById('trapc').value = "";
    }
});
