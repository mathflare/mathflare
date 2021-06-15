$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const fside = $("#fside").val();
        const result = fside * fside;
        if (fside <= 0 || fside == null) {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#fside").val(null);
        } else {
            $("#output").html(
                `The area of the square is ${result}cm<sup>2</sup>`
            );
            $("#fside").val(null);
        }
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});
