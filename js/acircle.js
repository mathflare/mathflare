$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const radius = $("#radius").val();
        const result = (radius * radius) * 3.14;
        if (radius <= 0) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#shape").attr({
                "style": `height: 0; width: 0; display: none`
            });
            $("#radius").val(null);
        }
        else {
            $("#output").html("The area of the circle is &#8764;" + result + " cm^2 (&#8719; = 3.14)");
            $("#shape").attr({
                "style": `height: ${radius}px; width: ${radius}px; display: flex`
            });
            $("#radius").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});