$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const hypo = $("#hypo").val();
        const side = $("#side").val();
        if (side === "" && hypo === "") {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
        } else if (side <= 0 && hypo <= 0) {
            $("#output").html(
                `<p class="text-warning">Both the leg and the hypotenuse must be a positive number/p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (side <= 0) {
            $("#output").html(
                `<p class="text-warning">The leg must be a positive number</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (hypo <= 0) {
            $("#output").html(
                `<p class="text-warning">The hypotenuse must be a positive number</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (side > hypo) {
            $("#output").html(
                `<p class="text-warning">The leg cannot be larger than or equal to the hypotenuse</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else {
            $("#output").html(
                `<p class="text-success">The other leg is ${Math.sqrt(
                    hypo ** 2 - side ** 2
                )}cm</p>`
            );
        }
        $("#hypo").val(null);
        $("#side").val(null);
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});
