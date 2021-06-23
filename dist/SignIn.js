const onSignIn = (googleUser) => {
  var profile = googleUser.getBasicProfile();
  var current = new Date();
  var PhotoUrl = profile.getImageUrl();
  var UserAgent = navigator.userAgent;
  $("#display").text("Signed In As " + profile.getName());
  console.log("=================================================");
  console.log("User signed in at " + current);
  console.log("Name: " + profile.getName());
  console.log("ID: " + profile.getId());
  console.log("Image URL: " + PhotoUrl);
  console.log("Email: " + profile.getEmail());
  console.log("User Agent: " + UserAgent);
};