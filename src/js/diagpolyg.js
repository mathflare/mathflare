//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const n = $("#vertex").val();
        if (n == "" || n <= 2 || !(Math.floor(n) == n)) {
            $("#output").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#vertex").val(null);
        } else {
            $("#output").html(
                `<p class=" text-success">The number of diagonals in this convex ${n}-gon is ${(n * (n - 3)) / 2}</p>`
            );
            $("#vertex").val(null);
            console.log(Number.isSafeInteger(n))
        }
    });
    $("#button2").click((e) => { 
        e.preventDefault();
        const n = $("#sside").val();
        if (n == "" || n <= 0) {
            $("#output2").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#sside").val(null);
        } else {
            $("#output2").html(
                `<p class=" text-success">The lenght of the diagonal is &#8764;${n * Math.sqrt(2)}cm (${n} * &#8730;2)</p>`
            );
            $("#sside").val(null);
        }
    });
});
//copyright (c) 2021 MathFlare LLC. - All rights reserved.