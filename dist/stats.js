"use strict";
var storage = window.localStorage;
window.addEventListener('load', () => {
    loadStats();
});
const loadStats = () => {
    const pageviews = storage.getItem("pageCount");
    const equations = storage.getItem("equation");
    const formulas = storage.getItem("formulas");
    const ineq = storage.getItem("ineq");
    document.getElementById('page-views').innerText = pageviews;
    document.getElementById('equations-solved').innerText = equations;
    document.getElementById('formulas-views').innerText = formulas;
    document.getElementById('ineq').innerText = ineq;
    if (!storage.getItem("statCount")) {
        storage.setItem("statCount", 1);
    }
    else {
        let statCount = storage.getItem("statCount");
        statCount = parseFloat(statCount) + 1;
        storage.setItem("statCount", statCount);
    }
};
const clearStats = () => {
    storage.clear();
    reload();
};
const reload = () => {
    location.reload();
};
