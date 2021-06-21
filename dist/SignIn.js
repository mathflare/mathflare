const onSignIn = (googleUser) => {
  var profile = googleUser.getBasicProfile();
  var current = new Date();
  var PhotoUrl = profile.getImageUrl();
  var UserAgent = navigator.userAgent;
  const Http = new XMLHttpRequest();
  const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=e3bc23053c584ae2bbf332d89bc66f8d";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = () => {
    const response = Http.responseText;
    console.log("ISP: " + response.connection.isp_name);
    console.log("City: " + response.city + "," + response.country)
    console.log("Is VPN: " + response.security.is_vpn);
  };
  $("#display").text("Signed In As " + profile.getName());
  console.log("=================================================");
  console.log("User signed in at " + current);
  console.log("Name: " + profile.getName());
  console.log("ID: " + profile.getId());
  console.log("Image URL: " + PhotoUrl);
  console.log("Email: " + profile.getEmail());
  console.log("User Agent: " + UserAgent);
};