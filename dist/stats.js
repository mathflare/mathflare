"use strict";
var storage = window.localStorage;
window.addEventListener('load', () => {
    loadStats();
    getClientInfo();
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
const getClientInfo = () => {
    const get_browser = () => {
        let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: (tem[1] || '') };
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR|Edge\/(\d+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    };
    let browser = get_browser();
    let CPUCores = navigator.hardwareConcurrency || 1;
    let historyLength = window.history.length;
    let osVersion = navigator.appVersion;
    let osName = navigator.platform;
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    let browserCodename = navigator.appCodeName;
    let browserName = navigator.appName;
    let browserVersion = navigator.appVersion;
    let areCookiesEnabled = navigator.cookieEnabled;
    let lang = navigator.language;
    let isOnline = navigator.onLine;
    let engineName = navigator.product;
    let userAgent = navigator.userAgent;
    let isJavaEnabled = navigator.javaEnabled();
    let fullHeight = screen.availHeight;
    let fullWidth = screen.availWidth;
    let totalHeight = screen.height;
    let totalWidth = screen.width;
    let colorDepth = screen.colorDepth;
    let colorRes = screen.pixelDepth;
    let devicePixelRatio = window.devicePixelRatio;
    let timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let time = new Date().toLocaleString();
    let date = new Date();
    document.getElementById('browser-proper-name').innerText = "Browser Name: " + browser.name;
    document.getElementById('browser-proper-version').innerText = "Browser Version: " + browser.version;
    document.getElementById('browser-codename').innerText = "Browser Codename: " + browserCodename;
    document.getElementById('browser-name').innerText = "Navigator Name: " + browserName;
    document.getElementById('browser-version').innerText = "Navigator Version: " + browserVersion;
    document.getElementById('are-cookies-enabled').innerText = "Are cookies enabled? " + areCookiesEnabled.toString();
    document.getElementById('lang').innerText = "Language: " + lang;
    document.getElementById('is-online').innerText = "Are you online? " + isOnline.toString();
    document.getElementById('engine-name').innerText = "Browser Engine Name: " + engineName;
    document.getElementById('user-agent').innerText = "User Agent: " + userAgent;
    document.getElementById('is-java-enabled').innerText = "Is Java Enabled? " + isJavaEnabled.toString();
    document.getElementById('full-height').innerText = "Browser Height: " + fullHeight.toString();
    document.getElementById('full-width').innerText = "Browser Width: " + fullWidth.toString();
    document.getElementById('total-height').innerText = "Screen Height: " + totalHeight.toString();
    document.getElementById('total-width').innerText = "Screen Width: " + totalWidth.toString();
    document.getElementById('color-depth').innerText = "Screen Color Depth: " + colorDepth.toString();
    document.getElementById('color-res').innerText = "Screen Color Resolution: " + colorRes.toString();
    document.getElementById('device-pixel-ratio').innerText = "Screen Pixel Ration: " + devicePixelRatio.toString();
    document.getElementById('time-zone-name').innerText = "Local Time Zone Name: " + timeZoneName;
    document.getElementById('time').innerText = "Local Time: " + time;
    document.getElementById('date').innerText = "Local Date: " + date.toISOString();
    document.getElementById('history-length').innerText = "History Length: " + historyLength.toString();
    document.getElementById('num-cpu-cores').innerText = "Number of CPU cores: " + CPUCores;
    document.getElementById('os-version').innerText = "OS Verion: " + osVersion;
    document.getElementById('os-name').innerText = "OS Name: " + osName;
    document.getElementById('inner-width').innerText = "Window Width: " + innerWidth.toString();
    document.getElementById('inner-height').innerText = "Window Height: " + innerHeight.toString();
};
