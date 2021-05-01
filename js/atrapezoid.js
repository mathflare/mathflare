$(document).ready(function () {
  $("#button").click(
    (calculation = (e) => {
      e.preventDefault();
      const lside = $("#lside").val();
      const sside = $("#sside").val();
      const height = $("#height").val();
      const result =
        ((parseFloat(lside) + parseFloat(sside)) * parseFloat(height)) / 2;
      if (lside <= 0 || sside <= 0 || height <= 0) {
        $("#output").text("Please enter a valid value");
        $("#lside").val(null);
        $("#sside").val(null);
        $("#height").val(null);
      } else {
        $("#output").text("The area of the trapezoid is " + result + " cm^2");
        $("#lside").val(null);
        $("#sside").val(null);
        $("#height").val(null);
      }
    })
  );
  $(".show-formula").click(function () {
    $("#formula").fadeToggle(500);
  });
});
