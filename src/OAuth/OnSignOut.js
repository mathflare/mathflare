$(document).ready(function () {
    $("#signout").click(function (e) {
        e.preventDefault();
        $("#display").text("Not Signed In");
        //(not yet implimented)
        //$("#profile-photo").html(`<i class="bi bi-person-circle"></i>`);
    });
});