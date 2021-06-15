//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(() => {
        $("#button").click((e) => {
            e.preventDefault();
            const num = $("#num1").val();
            const den = $("#den1").val();
            if (num == "" || den == "") {
                $("#output").html(
                    `<p class="text-warning">Please enter a valid value</p>`
                );
                $("#num1").val(null);
                $("#den1").val(null);
            } else if (den == 0) {
                $("#output").html(
                    `<p class="text-warning">The denominator cannot be 0</p>`
                );
                $("#num1").val(null);
                $("#den1").val(null);
            } else {
                $("#output").html(
                    `<p class="text-success"><sup>${num}</sup>&frasl;<sub>${den}</sub> = ${
                        (num / den) * 100
                    }&#37;</p>`
                );
                $("#num1").val(null);
                $("#den1").val(null);
            }
        });
        $("#button2").click((e) => {
            e.preventDefault();
            const per = $("#per2").val();
            const num2 = $("#num2").val();
            if (per == "" || num2 == "" || num2 == 0) {
                $("#output2").html(
                    `<p class="text-warning">Please enter a valid value</p>`
                );
                $("#per2").val(null);
                $("#num2").val(null);
            } else {
                $("#output2").html(
                    `<p class="text-success">${per}&#37; of ${num2} = ${
                        (per / 100) * num2
                    }</p>`
                );
                $("#per2").val(null);
                $("#num2").val(null);
            }
        });
        $("#button3").click((e) => {
            e.preventDefault();
            const init = $("#init3").val();
            const fin = $("#fin3").val();
            if (init == "" || fin == "" || init == 0) {
                $("#output3").html(
                    `<p class="text-warning">Please enter a valid value</p>`
                );
                $("#init3").val(null);
                $("#fin3").val(null);
            } else {
                $("#output3").html(
                    `<p class="text-success">The percentage of the increase/decrease from ${init} to ${fin} is ${
                        ((fin - init) / init) * 100
                    }&#37;</p>`
                );
                $("#init3").val(null);
                $("#fin3").val(null);
            }
        });
    });
//copyright (c) 2021 MathFlare LLC. - All rights reserved.