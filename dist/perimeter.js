$(document).ready(() => {
    $("#square").click((e) => {
        e.preventDefault();
        const n = $("#squaren").val();
        if (n == "") {
            $("#output1").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#squaren").val(null);
        } else if (n <= 0) {
            $("#output1").html(
                `<p class=" text-warning">The side must be a positive number</p>`
            );
            $("#squaren").val(null);
        } else {
            $("#output1").html(`<p class=" text-success">C = ${4 * n}cm</p>`);
            $("#squaren").val(null);
        }
    });
    $("#para").click((e) => {
        e.preventDefault();
        const w = $("#paraw").val();
        const h = $("#parah").val();
        if (w == "" || h == "") {
            $("#output2").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#paraw").val(null);
            $("#parah").val(null);
        } else if (w <= 0 || h <= 0) {
            $("#output2").html(
                `<p class=" text-warning">Both the width and the height must be a positive number</p>`
            );
            $("#paraw").val(null);
            $("#parah").val(null);
        } else {
            $("#output2").html(
                `<p class=" text-success">C = ${2 * w + 2 * h}cm</p>`
            );
            $("#paraw").val(null);
            $("#parah").val(null);
        }
    });
    $("#tri").click((e) => {
        e.preventDefault();
        const a = $("#tria").val();
        const b = $("#trib").val();
        const c = $("#tric").val();
        if (a == "" || b == "" || c == "") {
            $("#output3").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#tria").val(null);
            $("#trib").val(null);
            $("#tric").val(null);
        } else if (a <= 0 || b <= 0 || c <= 0) {
            $("#output3").html(
                `<p class=" text-warning">All of the segments must be a positive number</p>`
            );
            $("#tria").val(null);
            $("#trib").val(null);
            $("#tric").val(null);
        } else {
            $("#output3").html(
                `<p class=" text-success">C = ${
                    parseFloat(a) + parseFloat(b) + parseFloat(c)
                }cm</p>`
            );
            $("#tria").val(null);
            $("#trib").val(null);
            $("#tric").val(null);
        }
    });
    $("#eqtri").click((e) => {
        e.preventDefault();
        const n = $("#trin").val();
        if (n == "") {
            $("#output4").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#trin").val(null);
        } else if (n <= 0) {
            $("#output4").html(
                `<p class=" text-warning">The side must be a positive number</p>`
            );
            $("#trin").val(null);
        } else {
            $("#output4").html(`<p class=" text-success">C = ${3 * n}cm</p>`);
            $("#trin").val(null);
        }
    });
    $("#circle").click((e) => {
        e.preventDefault();
        const r = $("#circler").val();
        if (r == "") {
            $("#output5").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#circler").val(null);
        } else if (r <= 0) {
            $("#output5").html(
                `<p class=" text-warning">The radius must be a positive number</p>`
            );
            $("#circler").val(null);
        } else {
            $("#output5").html(
                `<p class=" text-success">C &#8776;${
                    2 * r * 3.14
                }cm (&#8719; = 3.14)</p>`
            );
            $("#circler").val(null);
        }
    });
});
