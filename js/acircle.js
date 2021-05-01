$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const radius = $("#radius").val();
        const result = (radius * radius) * 3.14;
        if (radius <= 0) {
            $("#output").text("Please enter a valid value");
            $("#radius").val(null);
        }
        else {
            $("#output").text("The area of the circle is ~" + result + " cm^2 (π = 3.14)");
            $("#radius").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});