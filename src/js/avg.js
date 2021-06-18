//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        var input = $("#input").val();
        if (
            input == "" ||
            input.charAt(0) == "," ||
            input.charAt(input.length - 1) == ","
        ) {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`
            );
            $("#input").val(null);
        } else {
            var array = JSON.parse("[" + input + "]");
            var total = 0;
            for (var i = 0; i < array.length; i++) {
                total += array[i];
            }
            $("#output").html(
                `<p class="text-success">The average of all these numbers is ${
                    total / array.length
                }</p>`
            );
            $("#input").val(null);
        }
    });
});
//copyright (c) 2021 MathFlare LLC. - All rights reserved.
