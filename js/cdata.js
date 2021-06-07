    const dataConverter = (source, valNum) => {
        valNum = parseFloat(valNum);
        const inputBits = document.getElementById("inputBits");
        const inputBytes = document.getElementById("inputBytes");
        const inputKilobits = document.getElementById("inputKilobits");
        const inputKilobytes = document.getElementById("inputKilobytes");
        const inputMegabits = document.getElementById("inputMegabits");
        const inputMegabytes = document.getElementById("inputMegabytes");
        const inputGigabits = document.getElementById("inputGigabits");
        const inputGigabytes = document.getElementById("inputGigabytes");
        const inputTerabits = document.getElementById("inputTerabits");
        const inputTerabytes = document.getElementById("inputTerabytes");
        if (source == "inputBits") {
            inputBytes.value = (valNum / 8).toFixed(); 
            inputKilobits.value = (valNum / 1000).toFixed();
            inputKilobytes.value = (valNum / 8000).toFixed();
            inputMegabits.value = (valNum / 1000000).toFixed();
            inputMegabytes.value = (valNum / 8000000).toFixed();
            inputGigabits.value = (valNum / 1000000000).toFixed();
            inputGigabytes.value = (valNum / 8000000000).toFixed();
            inputTerabits.value = (valNum / 1000000000000).toFixed();
            inputTerabytes.value = (valNum * 8000000000000).toFixed();
        }
        if (source == "inputBytes") {
            inputBits.value = (valNum * 3.2808).toFixed(2);
            inputKilobits.value = (valNum * 39.370).toFixed(2);
            inputKilobytes.value = (valNum / 0.01).toFixed();
            inputMegabits.value = (valNum * 1.0936).toFixed(2);
            inputMegabytes.value = (valNum / 1000).toFixed(5);
            inputGigabits.value = (valNum * 0.00062137).toFixed(5);
        }
        if (source == "inputKilobits") {
            inputBits.value = (valNum * 0.083333).toFixed(3);
            inputBytes.value = (valNum / 39.370).toFixed(3);
            inputKilobytes.value = (valNum / 0.39370).toFixed(2);
            inputMegabits.value = (valNum * 0.027778).toFixed(3);
            inputMegabytes.value = (valNum / 39370).toFixed(6);
            inputGigabits.value = (valNum * 0.000015783).toFixed(6);
        }
        if (source == "inputKilobytes") {
            inputBits.value = (valNum * 0.032808).toFixed(3);
            inputBytes.value = (valNum / 100).toFixed(3);
            inputKilobits.value = (valNum * 0.39370).toFixed(2);
            inputMegabits.value = (valNum * 0.010936).toFixed(3);
            inputMegabytes.value = (valNum / 100000).toFixed(6);
            inputGigabits.value = (valNum * 0.0000062137).toFixed(6);
        }
        if (source == "inputMegabits") {
            inputBits.value = (valNum * 3).toFixed();
            inputBytes.value = (valNum / 1.0936).toFixed(2);
            inputKilobits.value = (valNum * 36).toFixed();
            inputKilobytes.value = (valNum / 0.010936).toFixed();
            inputMegabytes.value = (valNum / 1093.6).toFixed(5);
            inputGigabits.value = (valNum * 0.00056818).toFixed(5);
        }
        if (source == "inputMegabytes") {
            inputBits.value = (valNum * 3280.8).toFixed();
            inputBytes.value = (valNum * 1000).toFixed();
            inputKilobits.value = (valNum * 39370).toFixed();
            inputKilobytes.value = (valNum * 100000).toFixed();
            inputMegabits.value = (valNum * 1093.6).toFixed();
            inputGigabits.value = (valNum * 0.62137).toFixed(2);
        }
        if (source == "inputGigabits") {
            inputBits.value = (valNum * 5280).toFixed();
            inputBytes.value = (valNum / 0.00062137).toFixed();
            inputKilobits.value = (valNum * 63360).toFixed();
            inputKilobytes.value = (valNum / 0.0000062137).toFixed();
            inputMegabits.value = (valNum * 1760).toFixed();
            inputMegabytes.value = (valNum / 0.62137).toFixed(2);
        }
    }