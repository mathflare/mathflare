$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const lside = $("#lside").val();
        const sside = $("#sside").val();
        const height = $("#height").val();
        const result = ((parseFloat(lside) + parseFloat(sside)) * parseFloat(height)) / 2;
        if (lside <= 0 || sside <= 0 || height <= 0) {
            $("#output").text("Please enter a valid value");
            $("#lside").val(1);
            $("#sside").val(1);
            $("#height").val(1);
        }
        else {
            $("#output").text("The area of the trapezoid is " + result + " cm^2");
            $("#lside").val(1);
            $("#sside").val(1);
            $("#height").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").toggle(500);
    });
});