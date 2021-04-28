function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var current = new Date();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('user signed in at ' + current);
    console.log('Name: ' + profile.getName());
    console.log('ID: ' + profile.getId());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 
    $("#display").text('Signed In As ' + profile.getName());
    $("#user-image").attr("src", profile.getImageUrl); 
}