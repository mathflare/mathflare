$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const radius = $("#radius").val();
        const result = radius * radius * 3.14;
        if (radius <= 0) {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#radius").val(null);
        } else {
            $("#output").html(
                `The area of the circle is &#8764; ${result}cm<sup>2</sup> (&#8719; = 3.14)`
            );
            $("#radius").val(null);
        }
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});
