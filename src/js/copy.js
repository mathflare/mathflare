$(document).ready(() => {
    $("#copy").click((e) => { 
        e.preventDefault();
        $("#copy").removeClass("bi-clipboard");
        $("#copy").addClass("bi-clipboard-check");
    });
});