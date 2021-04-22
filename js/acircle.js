$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        var radius = $("#radius").val();
        var result = (radius * radius) * 3.14;
        if (radius <= 0) {
            $("#output").text("Please enter a valid value");
            $("#radius").val(1);
        }
        else {
            $("#output").text("The area of the circle is ~" + result + " cm^2");
            $("#radius").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").toggle(500);
    });
});