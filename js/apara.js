$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        var width = $("#width").val();
        var height = $("#height").val();
        var result = width * height;
        if (width <= 0 || height <= 0) {
            $("#output").text("Please enter a valid value");
            $("#width").val(1);
            $("#height").val(1);
        }
        else {
            $("#output").text("The area of the triangle is " + result + " cm^2");
            $("#width").val(1);
            $("#height").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").toggle(500);
    });
});