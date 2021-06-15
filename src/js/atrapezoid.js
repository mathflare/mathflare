$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const lside = $("#lside").val();
        const sside = $("#sside").val();
        const height = $("#height").val();
        const result =
            ((parseFloat(lside) + parseFloat(sside)) * parseFloat(height)) / 2;
        if (lside <= 0 || sside <= 0 || height <= 0) {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#lside").val(null);
            $("#sside").val(null);
            $("#height").val(null);
        } else if (sside >= lside) {
            $("#output").html(
                `<p class="text-warning">The small side cannot be longer that or equal to the large side</p>`
            );
            $("#lside").val(null);
            $("#sside").val(null);
            $("#height").val(null);
        } else {
            $("#output").html(
                `The area of the trapezoid is ${result}cm<sup>2</sup>`
            );
            $("#lside").val(null);
            $("#sside").val(null);
            $("#height").val(null);
        }
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});
