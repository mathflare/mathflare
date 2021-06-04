//first way of solving linear systems (proccess of elimination)
$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        const a1 = $("#a1").val();
        const b1 = $("#b1").val();
        const c1 = $("#c1").val();
        const a2 = $("#a2").val();
        const b2 = $("#b2").val();
        const c2 = $("#c2").val();
        const E1;
        if (
            a1 == "" ||
            a2 == "" ||
            b1 == "" ||
            b2 == "" ||
            c1 == "" ||
            c2 == ""
        ) {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else if (c1 == 0 && c2 == 0) {
            if (a1 / a2 == b1 / b2) {
                //unlimited solutions
                $("#output").html(
                    `<p class="text-warning">The system has unlimited solutions</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } else {
                $("#output").html(
                    `<p class="text-warning">The system has a single solution (x,y) = (0,0)</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            }
        } else if (a1 / a2 == b1 / b2 && b1 / b2 != c1 / c2 || a1 == 0 && a2 == 0 && b1 / b2 != c1 / c2 || b1 == 0 && b2 == 0 && a1 / a2 != c1 / c2) {
            $("#output").html(
                `<p class="text-warning">The system is a contradiction: it has no solutions</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else if (a1 / a2 == b1 / b2 && b1 / b2 == c1 / c2 || a1 == 0 && a2 == 0 && b1 / b2 == c1 / c2 || b1 == 0 && b2 == 0 && a1 / a2 == c1 / c2) {
            //unlimited solutions
            $("#output").html(
                `<p class="text-warning">The system has unlimited solutions</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else {
            if (a1 == 0 && b1 != 0) {
                y = c1 / b1;
                x = (c2 - b2 * y) / a2;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } else if (a1 != 0 && b1 == 0) {
                x = c1 / a1;
                y = (c2 - a2 * x) / b2;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } else if (a2 == 0 && b2 != 0) {
                y = c2 / b2;
                x = (c1 - b1 * y) / a1;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } 
            else if ( a2 != 0 && b2 == 0) {
                x = c2 / a2;
                y = (c1 - a1 * x) / b1;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            }
            else {
                E1 = b1 * -a2 + b2 * a1; //edit
                y = (c1 * -a2 + c2 * a1) / E1;
                x = (c1 - b1 * y) / a1;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            }
        }
    });
});
