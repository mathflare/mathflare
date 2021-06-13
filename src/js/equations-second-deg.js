//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const a = $("#a").val();
        const c = $("#c").val();
        if (a == "" || c == "") {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#a").val(null);
            $("#c").val(null);
        } else if (-c < 0 && a > 0) {
            $("#output").html(
                `<p class="text-warning">The equation is a contradiction in R: it has no solutions </p>`
            );
            $("#a").val(null);
            $("#c").val(null);
        } else if (a == 0 && -c != 0) {
            $("#output").html(
                `<p class="text-warning">The equation is a contradiction in R: it has no solutions </p>`
            );
            $("#a").val(null);
            $("#c").val(null);
        } else if (a == 0 && -c == 0) {
            $("#output").html(
                `<p class="text-warning">The equation is an identity: it is true for all values</p>`
            );
            $("#a").val(null);
            $("#c").val(null);
        } else {
            x = Math.sqrt(-c / a);
            if (x == 0) {
                $("#output").html(`<p class="text-success">X = ${x}</p>`);
                $("#a").val(null);
                $("#c").val(null);
            } else {
                $("#output").html(`<p class="text-success">X = &#177;${x}</p>`);
                $("#a").val(null);
                $("#c").val(null);
            }
        }
    });
    $("#button2").click((e) => {
        e.preventDefault();
        const a = $("#a2").val();
        const b = $("#b2").val();
        if (a == "" || b == "") {
            $("#output2").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#a2").val(null);
            $("#b2").val(null);
        } else if (a == 0 && b == 0) {
            $("#output2").html(
                `<p class="text-warning">The equation is an identity: it is true for all values</p>`
            );
            $("#a2").val(null);
            $("#b2").val(null);
        } else if ((a != 0 && b == 0) || (a == 0 && b != 0)) {
            $("#output2").html(`<p class="text-success">X = 0</p>`);
            $("#a2").val(null);
            $("#b2").val(null);
        } else {
            x1 = 0;
            x2 = -b / a;
            $("#output2").html(
                `<p class="text-success">X = ${x1} or X = ${x2}</p>`
            );
            $("#a2").val(null);
            $("#b2").val(null);
        }
    });
    $("#button3").click(function (e) {
        e.preventDefault();
        const a = $("#a3").val();
        const b = $("#b3").val();
        const c = $("#c3").val();
        //utilizing the discriminant
        D = b * b - 4 * a * c;
        if (a == "" || b == "" || c == "") {
            $("#output3").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        } else if (a == 0 && b == 0 && c == 0) {
            $("#output3").html(
                `<p class="text-warning">The equation is an identity: it is true for all values</p>`
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        } else if (a == 0 && (b == 0) & (c != 0)) {
            $("#output3").html(
                `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        } else if (
            (a == 0 && b != 0 && c == 0) ||
            (a == 0 && b != 0 && c != 0)
        ) {
            x = c / b;
            $("#output3").html(
                `<p class="text-success">X = ${x}</p>`
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        } 
        else if (a != 0 && b == 0) {
            x = Math.sqrt(c / a);
            $("#output3").html(
                `<p class="text-success">X = &#177;${x}</p>`
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        }
        else if (D < 0) {
            x1 = (-b - Math.sqrt(-D)) / (2 * a);
            x2 = (-b + Math.sqrt(-D)) / (2 * a);
            $("#output3").html(
                `<p class="text-warning">The Discriminant = ${D} < 0, The equation is a contradiction in R: it has no solutions</p>
                <p class="text-warning" style="margin-bottom: 10px !important">X = ${x1} or X = ${x2} in C</p>
                `
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        } else if (D == 0) {
            x1 = (-b - Math.sqrt(D)) / (2 * a);
            x2 = (-b + Math.sqrt(D)) / (2 * a);
            $("#output3").html(
                `<p class="text-success">The Discriminant = 0,  X = ${x1} (double solution)</p>`
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        } else {
            x1 = (-b - Math.sqrt(D)) / (2 * a);
            x2 = (-b + Math.sqrt(D)) / (2 * a);
            $("#output3").html(
                `<p class="text-success">The Discriminant = ${D} > 0,  X = ${x1} or X = ${x2}</p>`
            );
            $("#a3").val(null);
            $("#b3").val(null);
            $("#c3").val(null);
        }
    });
});
//copyright (c) 2021 MathFlare LLC. - All rights reserved.
