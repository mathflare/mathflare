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
    //change the text of the navbar element
    $("#display").text('Signed In As ' + profile.getName());
    //display the profile picture
    $("#profile-photo").html(`<img src="${PhotoUrl}" class="profile-pic"/>`);
}