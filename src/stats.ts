var storage: any = window.localStorage;
window.addEventListener('load', () => {
    loadStats();
});
const loadStats: () => void = () => {
    const pageviews = storage.getItem("pageCount");
    const equations = storage.getItem("equation");
    const formulas = storage.getItem("formulas");
    const ineq = storage.getItem("ineq");
    (<HTMLParagraphElement>document.querySelector('#page-views')).innerText = pageviews!;
    (<HTMLParagraphElement>document.querySelector('#equations-solved')).innerText = equations!;
    (<HTMLParagraphElement>document.querySelector('#formulas-views')).innerText = formulas!;
    (<HTMLParagraphElement>document.querySelector('#ineq')).innerText = ineq!;
    if (!storage.getItem("statCount")) {
        storage.setItem("statCount", 1);
    } else {
        let statCount: any = storage.getItem("statCount");
        statCount = parseFloat(statCount) + 1;
        storage.setItem("statCount", statCount);
    }
}
const clearStats: () => void = () => {
    storage.clear();
    reload();
};
const reload: () => void = () => {
    location.reload();
};