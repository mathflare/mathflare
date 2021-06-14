//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(() => {
        var input = "-2,-3,-4,-5,-6";
        var array = JSON.parse("[" + input + "]");
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i];
        }
        var avg = total / array.length;
        console.log(avg);
});
//copyright (c) 2021 MathFlare LLC. - All rights reserved.