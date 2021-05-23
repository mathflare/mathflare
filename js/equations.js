$(document).ready(function () {
    $("#button").click(calculation = (e) => { 
        e.preventDefault();
        const y = $("#y").val();
        const z = $("#z").val();
        const result = parseFloat(z) - parseFloat(y);
        if (isNaN(result)) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#y").val(null);
            $("#z").val(null);
        }
        else {
            $("#output").text("x = " + result );
            $("#y").val(null);
            $("#z").val(null);
        }
    });
    $("#button2").click(calculation = (e) => { 
        e.preventDefault();
        const y = $("#y2").val();
        const z = $("#z2").val();
        const result = parseFloat(z) + parseFloat(y);
        if (isNaN(result)) {
            $("#output2").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#y2").val(null);
            $("#z2").val(null);
        }
        else {
            $("#output2").text("x = " + result );
            $("#y2").val(null);
            $("#z2").val(null);
        }
    });
    $("#button3").click(calculation = (e) => { 
        e.preventDefault();
        const y = $("#y3").val();
        const z = $("#z3").val();
        const result = parseFloat(z) / parseFloat(y);
        if (isNaN(result)) {
            $("#output3").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#y3").val(null);
            $("#z3").val(null);
        }
        else if (result == Number.POSITIVE_INFINITY || result == Number.NEGATIVE_INFINITY) {
            $("#output3").text("x = Infinity");
            $("#y3").val(null);
            $("#z3").val(null);
        }
        else {
            $("#output3").text("x = " + result );
            $("#y3").val(null);
            $("#z3").val(null);
        }
    });
});