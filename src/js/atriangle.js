$(document).ready(function () {
    $("#button").click((e) => {
        e.preventDefault();
        const fside = $("#fside").val();
        const height = $("#height").val();
        const result = (fside * height) / 2;
        if (fside <= 0 || height <= 0 || fside == null || height == null) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#fside").val(null);
            $("#height").val(null);
        }
        else {
            $("#output").html(`The area of the triangle is " ${result}cm<sup>2</sup>`);
            $("#fside").val(null);
            $("#height").val(null);
        }
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});