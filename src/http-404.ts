window.addEventListener('load', () => {
    const pathname: string = window.location.pathname.replace('/', '');
    if (pathname == '404.html') {
        (<HTMLParagraphElement>document.getElementById('user-error-explanation')!).innerText = 'this is the 404 page layout';
    } else {
        console.error(`HTTP Error 404: the page ${pathname} does not exists. It may have been moved, edited or deleted(permanently or temporarily).`);
        (<HTMLParagraphElement>document.getElementById('pathname')!).innerText = pathname;
    }
});