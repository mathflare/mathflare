$("#nav-container").load("../public/components/navbar.html", () => {
  let aList = document.querySelectorAll("a");
  for (let i = 0; i < aList.length; i++) {
    let a = aList[i];
    if (a.href.indexOf(window.location.pathname.replace('.html', '')) !== -1) {
      a.classList.add("aactive");
    }
  }
});
