$(document).ready(() => {
    $("#button").click((event) => { 
        event.preventDefault();
        const number = $("#number").val();
        if (number == "" || number <= 0) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#number").val(null);
        }
        else {
            $("#output").html(`<p class="text-success">&#8731;${number} = ${Math.cbrt(number)}</p>`);
            $("#number").val(null);
        }
    });
});