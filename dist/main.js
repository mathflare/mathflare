"use strict";
document.addEventListener("DOMContentLoaded", () => {
    console.log("%cMathFlare", "color: DodgerBlue; font-weight: 600; font-family:consolas; font-size: 40px");
    console.log("%cby the way, the curiosity killed the cat you know...", "color: PaleGreen; font-weight: 600; font-family:consolas; font-size: 20px");
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./serviceworker.js')
                .then((reg) => console.log('Success: ', reg.scope))
                .catch((err) => console.log('Error: ', err));
        });
    }
    else {
        console.log('Service worker is not supported in your browser');
    }
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
