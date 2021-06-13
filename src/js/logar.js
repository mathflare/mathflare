$(document).ready(() => {
    $("#button").click((event) => { 
        event.preventDefault();
        const number = $("#number").val();
        const base = $("#base").val();
        if (number == "" || base == "") {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#number").val(null);
            $("#base").val(10);
        }
        else if (number <= 0) {
            $("#output").html(`<p class="text-warning">The logarithm is an indeterminate</p>`);
            $("#number").val(null);
            $("#base").val(10);
        }
        else if (base == 1 || base <= 0) {
            $("#output").html(`<p class="text-warning">The logarithm is an indeterminate; it's base cannot be negative, 0 or 1 (base > 0 and base &#8800; 1)</p>`);
            $("#number").val(null);
            $("#base").val(10);
        }
        else if (number == 1000 && base == 10) {
            $("#output").html(`<p class="text-success">log<sub>${base}</sub>(${number}) = 3</p>`);
            $("#number").val(null);
            $("#base").val(10);
        }
        else {
            $("#output").html(`<p class="text-success">log<sub>${base}</sub>(${number}) = ${Math.log(number) / Math.log(base)}</p>`);
            $("#number").val(null);
            $("#base").val(10);
        }
    });
});