$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const hypo = $("#hypo").val();
        const side = $("#side").val();
        var result = Math.sqrt((hypo * hypo) - (side * side));
        if (hypo <= 0 || side <= 0) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#hypo").val(null);
            $("#side").val(null);
        }
        else if (side >= hypo) {
            $("#output").text("The hypotenuse cannot be smaller than or equal to the right side");
            $("#hypo").val(null);
            $("#side").val(null);
        }
        else {
            $("#output").text("The other side of the right triangle is " + result + " cm");
            $("#hypo").val(null);
            $("#side").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});