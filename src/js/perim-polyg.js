//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(() => {
    $("#polyg").click((e) => {
        e.preventDefault();
        var input = $("#sides").val();
        if (
            input == "" ||
            input.charAt(0) == "," ||
            input.charAt(input.length - 1) == ","
        ) {
            $("#output6").html(
                `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`
            );
            $("#sides").val(null);
        } else {
            var array = JSON.parse("[" + input + "]");
            var hasNegative = false;
            for (let i = 0; i < array.length; i++) {
                if (array[i] <= 0) {
                    hasNegative = true;
                    break;
                }
            }
            if (hasNegative) {
                $("#output6").html(
                    `<p class="text-warning">All of the segments must be a positive number</p>`
                );
                $("#sides").val(null);
            } else if (array.length < 3) {
                $("#output6").html(
                    `<p class="text-warning">There is no polygon with less than 3 segments</p>`
                );
                $("#sides").val(null);
            } else {
                $("#output6").html(
                    `<p class="text-success">C = ${array.reduce(
                        (a, b) => a + b,
                        0
                    )}cm</p>`
                );
                $("#sides").val(null);
            }
        }
    });
});
//copyright (c) 2021 MathFlare LLC. - All rights reserved.