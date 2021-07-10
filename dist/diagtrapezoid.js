"use strict";
const radiansToDegrees = (radians) => {
    return radians * (180 / Math.PI);
};
const lside = 1;
const leg = 1;
const b = 1;
if (isNaN(lside) || isNaN(leg) || isNaN(b)) {
    document.getElementById('trapout1').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    clearValues();
}
else if (lside <= 0 || leg <= 0 || b <= 0) {
    if (lside <= 0) {
    }
    else if (leg <= 0) {
    }
    else if (b <= 0) {
    }
}
else if (b >= 180) {
}
else {
    console.log(Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * radiansToDegrees(Math.cos(b))));
    console.log(Math.cos(b));
}
