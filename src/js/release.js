$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/repos/mathflare/mathflare/releases/latest",
        dataType: "json",
        success: function (response) {
            const latest = response.tag_name;
            console.log('the latest release is ' + latest)
            //$("#latest").text('v' +latest); removed it on version 3.1 maybe we should add it again? who knows....
        }
    }); 
});