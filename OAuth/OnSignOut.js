﻿$(document).ready(function () {
    $("#signout").click(function (e) {
        e.preventDefault();
        $("#display").text("Not Signed In");
        $("#user-image").attr("src", "Assets/profile.jpg"); 
    });
});