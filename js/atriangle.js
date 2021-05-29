$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const fside = $("#fside").val();
        const height = $("#height").val();
        const result = (fside * height) / 2;
        if (fside <= 0 || height <= 0 || fside == null || height == null) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#shape").attr({
                "style": `border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid white; display: none`
            });
            $("#fside").val(null);
            $("#height").val(null);
        }
        else {
            $("#output").text("The area of the triangle is " + result + " cm^2");
            $("#shape").attr({
                "style": `border-left: ${fside}px solid transparent; border-right: ${fside}px solid transparent; border-bottom: ${height}px solid white; display: flex`
            });
            $("#fside").val(null);
            $("#height").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});