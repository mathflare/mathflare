$(document).ready(function () {
    $("#copy").click(function (e) { 
        e.preventDefault();
        $("#copy").removeClass("bi-clipboard");
        $("#copy").addClass("bi-clipboard-check");
    });
});