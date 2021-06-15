$(document).ready(() => {
  $("#button").click(
    ((e) => {
      e.preventDefault();
      const lside = $("#lside").val();
      const sside = $("#sside").val();
      const height = $("#height").val();
      const result =
        ((parseFloat(lside) + parseFloat(sside)) * parseFloat(height)) / 2;
      if (lside <= 0 || sside <= 0 || height <= 0) {
        $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
        $("#shape").attr({
            "style": `width: 0; border-bottom: 0 solid white; display: none`
        });
        $("#lside").val(null);
        $("#sside").val(null);
        $("#height").val(null);
      } else {
        $("#output").text("The area of the trapezoid is " + result + " cm^2");
        $("#shape").attr({
            "style": `width: ${lside}px; border-bottom: ${height}px solid white; display: flex`
        });
        $("#lside").val(null);
        $("#sside").val(null);
        $("#height").val(null);
      }
    })
  );
  $(".show-formula").click(() => {
    $("#formula").fadeToggle(500);
  });
});
