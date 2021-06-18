$(document).ready(() => {
    $("#button").click((e) => { 
        e.preventDefault();
        const base = $("#base").val();
        const exponent = $("#exp").val();
        if (base == "" || exponent == "") {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#base").val(null);
            $("#exp").val(null);
        } else {
            $("#output").html(`<p class="text-success">${base}<sup>${exponent}</sup> = ${Math.pow(base, exponent)}</p>`);
            $("#base").val(null);
            $("#exp").val(null);
        }   
    });
});