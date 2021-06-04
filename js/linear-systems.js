//utilizing determinants (D, Dx, Dy - det(a))
$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        const a1 = $("#a1").val();
        const b1 = $("#b1").val();
        const c1 = $("#c1").val();
        const a2 = $("#a2").val();
        const b2 = $("#b2").val();
        const c2 = $("#c2").val();
        D = a1 * b2 - a2 * b1;
        Dx = c1 * b2 - c2 * b1;
        Dy = a1 * c2 - a2 * c1;
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
        } 
        else if (a1 == 0 && b1 == 0 && c1 == 0 && a2 == 0 && b2 == 0 && c2 == 0) {
            //aristi
            $("#output").html(
                `<p class="text-warning">aoristi</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        }
        else if (
            (a1 == 0 && b1 == 0 && c1 == 0 && a2 == 0 && b2 == 0 && c2 != 0) ||
            (a1 == 0 && b1 == 0 && c1 != 0 && a2 == 0 && b2 == 0 && c2 == 0)
        ) {
            //contradiction
            $("#output").html(
                `<p class="text-warning">The system is a contradiction: it has no solutions</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else if ((D == 0 && Dx != 0) || (D == 0 && Dy != 0)) {
            //contradiction
            $("#output").html(
                `<p class="text-warning">The system is a contradiction: it has no solutions</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else if (D == 0 && Dx == 0 && Dy == 0) {
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
        } else if (D != 0) {
            //single solution
            x = Dx / D;
            y = Dy / D;
            $("#output").html(
                `<p class="text-success">The system has a single solution (x , y) = (${x} , ${y})</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        }
    });
});