"use strict";
window.addEventListener('load', () => {
    const pathname = window.location.pathname.replace('/', '');
    if (pathname == '404.html') {
        document.getElementById('user-error-explanation').innerText = 'this is the 404 page layout';
    }
    else {
        console.error(`HTTP Error 404: the page ${pathname} does not exists. It may have been moved, edited or deleted(permanently or temporarily).`);
        document.getElementById('pathname').innerText = pathname;
    }
});
