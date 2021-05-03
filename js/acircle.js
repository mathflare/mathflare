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
            $("#output").html("The area of the circle is &#8764;" + result + " cm^2 (&#8719; = 3.14)");
            $("#radius").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});