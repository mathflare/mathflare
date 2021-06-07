$(document).ready(() => {
    $("#button").click((event) => { 
        event.preventDefault();
        const number = $("#number").val();
        const base = $("#base").val();
        if (number == "" || base == "" || number <= 0 || base <= 0) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
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