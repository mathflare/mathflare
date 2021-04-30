function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var current = new Date();
    var PhotoUrl = profile.getImageUrl();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('user signed in at ' + current);
    console.log('Name: ' + profile.getName());
    console.log('ID: ' + profile.getId());
    console.log('Image URL: ' + PhotoUrl);
    console.log('Email: ' + profile.getEmail()); 
    $("#display").text('Signed In As ' + profile.getName());
    $("#profile-photo").html(`<img src="${PhotoUrl}" style="border-radius: 50%; height: 1em; width: auto;"/>`);
}