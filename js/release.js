$.ajax({
    type: "GET",
    url: "https://api.github.com/repos/liquid-geometry/liquidgeometry/releases/latest",
    dataType: "json",
    success: function (response) {
        const latest = response.tag_name;
        console.warn('the latest release is ' + latest)
        $("#latest").text('v' +latest);
    }
});