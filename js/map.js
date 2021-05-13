$("#3d-building").text('');
mapboxgl.accessToken = "pk.eyJ1IjoiZGstcmF3IiwiYSI6ImNrbmhweHUyMzNocDUyeHA5dGRsdnhpemUifQ.ZQJdc-bs9w2OwPDI5aRdHA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/dk-raw/cknupgrut122z17p6uviwsbg2",
});
$("#flexSwitchCheckDefault").on("change", function () {
  if ($(this).is(":checked")) {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/dk-raw/ckon75s9b21kt17ozcgkbr689",
    });
    $("#3d-building").text('3d buildings are enabled');
  } else {
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/dk-raw/cknupgrut122z17p6uviwsbg2",
      });
      $("#3d-building").text('');
  }
});
