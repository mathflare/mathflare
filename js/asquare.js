$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const fside = $("#fside").val();
        const result = fside * fside;
        if (fside <= 0 || fside == null) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#fside").val(null);
        }
        else {
            $("#output").text("The area of the square is " + result + " cm^2");
            $("#fside").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});