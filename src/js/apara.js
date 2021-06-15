$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const width = $("#width").val();
        const height = $("#height").val();
        const result = width * height;
        if (width <= 0 || height <= 0) {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#width").val(null);
            $("#height").val(null);
        } else {
            $("#output").html(
                `The area of the triangle is ${result}cm<sup>2</sup>`
            );
            $("#width").val(null);
            $("#height").val(null);
        }
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});
