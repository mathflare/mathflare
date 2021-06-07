$(document).ready(() => {
    $("#button").click((event) => { 
        event.preventDefault();
        const number = $("#number").val();
        if (number == "") {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#number").val(null);
        }
        else {
            $("#output").html(`<p class="text-success">&#8730;${number} = ${Math.sqrt(number)}</p>`);
            $("#number").val(null);
        }
    });
});