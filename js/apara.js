$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const width = $("#width").val();
        const height = $("#height").val();
        const result = width * height;
        if (width <= 0 || height <= 0) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#shape").attr({
                "style": `width: 0px; height: 0px; display: none`
            });
            $("#width").val(null);
            $("#height").val(null);
        }
        else {
            $("#output").text("The area of the triangle is " + result + " cm^2");
            $("#shape").attr({
                "style": `width: ${width}px; height: ${height}px; display: flex`
            });
            $("#width").val(null);
            $("#height").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});