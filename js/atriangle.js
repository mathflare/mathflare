﻿$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const fside = $("#fside").val();
        const height = $("#height").val();
        const result = (fside * height) / 2;
        if (fside <= 0 || height <= 0 || fside == null || height == null) {
            $("#output").text("Please enter a valid value");
            $("#fside").val(null);
            $("#height").val(null);
        }
        else {
            $("#output").text("The area of the triangle is " + result + " cm^2");
            $("#fside").val(null);
            $("#height").val(null);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});