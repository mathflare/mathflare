//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(() => {
    $("#squarecalc").click((e) => { 
        e.preventDefault();
        const side = $("#squareside").val();
        if (side == "") {
            $("#squareout").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#squareside").val(null);
        } else if (side <= 0) {
            $("#squareout").html(`<p class="text-warning">The side must be a positive number</p>`);
            $("#squareside").val(null);
        } else {
            $("#squareout").html(`<p class="text-success">The area of the square is A = ${side * side}cm<sup>2</sup></p>`);
            $("#squareside").val(null);
        }
    });
    $("#paracalc").click((e) => { 
        e.preventDefault();
        const width = $("#paraw").val();
        const height = $("#parah").val();
        if (width == "" || height == "") {
            $("#paraout").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#paraw").val(null);
            $("#parah").val(null);
        } else if (width <= 0 || height <= 0) {
            $("#paraout").html(`<p class="text-warning">Both the width and the height must be a positive number</p>`);
            $("#paraw").val(null);
            $("#parah").val(null);
        } else {
            $("#paraout").html(`<p class="text-success">The area of the parallelogram is A = ${width * height}cm<sup>2</sup></p>`);
            $("#paraw").val(null);
            $("#parah").val(null);
        }
    });
    $("#tricalc").click((e) => { 
        e.preventDefault();
        const a = $("#tria").val();
        const b = $("#trib").val();
        if (a == "" || b == "") {
            $("#triout").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#tria").val(null);
            $("#trib").val(null);
        } else if (a <= 0 || b <= 0) {
            $("#triout").html(`<p class="text-warning">Both the segment and the height must be a positive number</p>`);
            $("#tria").val(null);
            $("#trib").val(null);
        } else {
            $("#triout").html(`<p class="text-success">The area of the triangle is A = ${(a * b) /2}cm<sup>2</sup></p>`);
            $("#tria").val(null);
            $("#trib").val(null);
        }
    });
    $("#etricalc").click((e) => { 
        e.preventDefault();
        const side = $("#etris").val();
        if (side == "") {
            $("#etriout").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#etris").val(null);
        } else if (side <= 0) {
            $("#etriout").html(`<p class="text-warning">The side must be a positive number</p>`);
            $("#etris").val(null);
        } else {
            $("#etriout").html(`<p class="text-success">The area of the equilateral triangle is A = ${(side * side * Math.sqrt(3)) / 4}cm<sup>2</sup> &#8730;3/4*${side}<sup>2</sup> = &#8730;3/4*${side * side}</p>`);
            $("#etris").val(null);
        }
    });
    $("#circlecalc").click((e) => { 
        e.preventDefault();
        const r = $("#circler").val();
        const p = 3.14;
        if (r == "") {
            $("#circleout").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#circler").val(null);
        } else if (r <= 0) {
            $("#circleout").html(`<p class="text-warning">The radius must be a positive number</p>`);
            $("#circler").val(null);
        } else {
            $("#circleout").html(`<p class="text-success">The area of the circle is A &#8776; ${r * r * p}cm<sup>2</sup> (π = ${p})</p>`);
            $("#circler").val(null);
        }
    });
    $("#trapcalc").click((e) => { 
        e.preventDefault();
        const a = $("#trapa").val();
        const b = $("#trapb").val();
        const c = $("#trapc").val();
        if (a == "" || b == "" || c == "") {
            $("#trapout").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#trapa").val(null);
            $("#trapb").val(null);
            $("#trapc").val(null);
        } else if (a <= 0 || b <= 0) {
            $("#trapout").html(`<p class="text-warning">Both the small/large segment and the height must be a positive number</p>`);
            $("#trapa").val(null);
            $("#trapb").val(null);
            $("#trapc").val(null);
        } else {
            $("#trapout").html(`<p class="text-success">The area of the trapezoid is A = ${((parseFloat(a) + parseFloat(b)) * parseFloat(c)) / 2}cm<sup>2</sup></p>`);
            $("#trapa").val(null);
            $("#trapb").val(null);
            $("#trapc").val(null);
        }
    });
});
//copyright (c) 2021 MathFlare LLC. - All rights reserved.