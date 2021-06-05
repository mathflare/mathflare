$(document).ready(function () {
    $("#button").click(
        (calculation = (e) => {
            e.preventDefault();
            const hypo = $("#hypo").val();
            const side = $("#side").val();
            const result = Math.sqrt((hypo * hypo) - (side * side));
            if (hypo == "" || side == "") {
                $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
                $("#hypo").val(null);
                $("#side").val(null);
            }
            else if (side < hypo || side == hypo) {
                $("#output").html(`<p class="text-warning">The leg cannot be larger than or equal to the hypotenuse</p>`);
                $("#hypo").val(null);
                $("#side").val(null);
            }
            else if (hypo <= 0 || side <= 0) {
                $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
                $("#hypo").val(null);
                $("#side").val(null);
            }
            else {
                $("#output").html(`<p class="text-success">The other leg is ${result} cm&#178;</p>`);
                $("#hypo").val(null);
                $("#side").val(null);
            }
        })
    );
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});
