$(document).ready(function () {
    $("#signout").click(function (e) {
        e.preventDefault();
        //make the text of the navbar element to Not Signed In
        $("#display").text("Not Signed In");
        //change the profile picture to an svg from Bootstrap Icons
        $("#profile-photo").html(`<i class="bi bi-person-circle"></i>`);
    });
});