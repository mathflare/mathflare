$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        var lside = $("#lside").val();
        var sside = $("#sside").val();
        var height = $("#height").val();
        var result = ((parseFloat(lside) + parseFloat(sside)) * parseFloat(height)) / 2;
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