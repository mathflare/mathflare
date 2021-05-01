function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var current = new Date();
    var PhotoUrl = profile.getImageUrl();
    var UserAgent = navigator.userAgent;
    $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=e3bc23053c584ae2bbf332d89bc66f8d", function (data) {
            var city = data.city;
            var ip = data.ip_address
            var isp = data.connection.isp_name;
        })
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('User signed in at ' + current);
    console.log('Name: ' + profile.getName());
    console.log('ID: ' + profile.getId());
    console.log('Image URL: ' + PhotoUrl);
    console.log('Email: ' + profile.getEmail()); 
    console.log('User Agent: ' + UserAgent);
    console.log('IP: ' + ip);
    console.log('City: ' + city);
    console.log('ISP: ' + isp);
    //change the text of the navbar element
    $("#display").text('Signed In As ' + profile.getName());
    //display the profile picture
    $("#profile-photo").html(`<img src="${PhotoUrl}" class="profile-pic"/>`);
}