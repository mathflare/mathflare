$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const hypo = $("#hypo").val();
        const side = $("#side").val();
        var result = Math.sqrt((hypo * hypo) - (side * side));
        if (hypo <= 0 || side <= 0) {
            $("#output").text("Please enter a valid value");
            $("#hypo").val(1);
            $("#side").val(1);
        }
        else if (side >= hypo) {
            $("#output").text("The hypotenuse cannot be smaller than or equal to the right side");
            $("#hypo").val(1);
            $("#side").val(1);
        }
        else {
            $("#output").text("The other side of the right triangle is " + result + " cm");
            $("#hypo").val(1);
            $("#side").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").toggle(500);
    });
});