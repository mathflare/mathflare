$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const a = $("#side").val();
        if (a == "" || a <= 0) {
            $("#output").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#side").val(null);
        } else {
            $("#output").html(
                `<p class=" text-success">The are of the equilateral triangle is &#8776;${Math.floor(
                    (a * a * Math.sqrt(3)) / 4
                )}cm<sup>2</sup> (${a}<sup>2</sup> * &#8730;3) &#247; 4</p>`
            );
            $("#side").val(null);
        }
    });
});
