$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const fside = $("#fside").val();
        const result = fside * fside;
        if (fside <= 0 || fside == null) {
            $("#output").text("Please enter a valid value");
            $("#fside").val(1);
        }
        else {
            $("#output").text("The area of the square is " + result + " cm^2");
            $("#fside").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});