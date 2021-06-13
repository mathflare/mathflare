var myStorage = window.localStorage,
  pageCount;
$(document).ready(
  (loadStats = () => {
    const pageviews = myStorage.getItem("pageCount");
    const equations = myStorage.getItem("equation");
    const formulas = myStorage.getItem("formulas");
    $("#page-views").text(pageviews);
    $("#equations-solved").text(equations);
    $("#formulas-views").text(formulas);
    if (!myStorage.getItem("statCount")) {
      myStorage.setItem("statCount", 1);
    } else {
      statCount = myStorage.getItem("statCount");
      statCount = parseFloat(statCount) + parseFloat(1);
      myStorage.setItem("statCount", statCount);
    }
    $("#stat-views").text(myStorage.getItem("statCount"));
  })
);
clearStats = () => {
  myStorage.clear();
  reload();
};
reload = () => {
  location.reload();
};
