$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const fside = $("#fside").val();
        const sside = $("#sside").val();
        const result = Math.sqrt((fside * fside) + (sside * sside));
        if (fside <= 0 || sside <= 0) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#fside").val(null);
            $("#sside").val(null);
        }
        else {
            $("#output").text("The hypotenuse of the right triangle is " + result + " cm");
            $("#fside").val(null);
            $("#sside").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});