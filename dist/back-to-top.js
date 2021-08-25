"use strict";
const backToTopBtn = document.querySelector('#btn-back-to-top');
window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
        backToTopBtn.style.display = 'block';
    else
        backToTopBtn.style.display = 'none';
};
backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
