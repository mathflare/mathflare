function speedConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputMPH = document.getElementById("inputMPH");
    var inputKPH = document.getElementById("inputKPH");
    var inputKnots = document.getElementById("inputKnots");
    var inputMach = document.getElementById("inputMach");
    if (source == "inputMPH") {
        inputKPH.value = (valNum * 1.609344).toFixed(2);
        inputKnots.value = (valNum / 1.150779).toFixed(2);
        inputMach.value = (valNum / 761.207).toFixed(4);
    }
    if (source == "inputKPH") {
        inputMPH.value = (valNum / 1.609344).toFixed(2);
        inputKnots.value = (valNum / 1.852).toFixed(2);
        inputMach.value = (valNum / 1225.044).toFixed(5);
    }
    if (source == "inputKnots") {
        inputMPH.value = (valNum * 1.150779).toFixed(2);
        inputKPH.value = (valNum * 1.852).toFixed(2);
        inputMach.value = (valNum / 661.4708).toFixed(4);
    }
    if (source == "inputMach") {
        inputMPH.value = (valNum * 761.207).toFixed();
        inputKPH.value = (valNum * 1225.044).toFixed();
        inputKnots.value = (valNum * 661.4708).toFixed();
    }
}