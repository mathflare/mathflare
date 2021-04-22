$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        var fside = $("#fside").val();
        var height = $("#height").val();
        var result = (fside * height) / 2;
        if (fside <= 0 || height <= 0 || fside == null || height == null) {
            $("#output").text("Please enter a valid value");
            $("#fside").val(1);
            $("#height").val(1);
        }
        else {
            $("#output").text("The area of the triangle is " + result + " cm^2");
            $("#fside").val(1);
            $("#height").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").toggle(500);
    });
});