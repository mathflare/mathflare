function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        var current = new Date();
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('User signed out at ' + current);
    });
}