"use strict";
const weightConverter = (source, valNum) => {
    valNum = parseFloat(valNum);
    const inputPounds = document.getElementById('inputPounds');
    const inputKilograms = document.getElementById('inputKilograms');
    const inputOunces = document.getElementById('inputOunces');
    const inputGrams = document.getElementById('inputGrams');
    const inputStones = document.getElementById('inputStones');
    if (source === 'inputPounds') {
        inputKilograms.value = (valNum / 2.2046).toFixed(2);
        inputOunces.value = (valNum * 16).toFixed(2);
        inputGrams.value = (valNum / 0.0022046).toFixed();
        inputStones.value = (valNum * 0.071429).toFixed(3);
    }
    if (source === 'inputKilograms') {
        inputPounds.value = (valNum * 2.2046).toFixed(2);
        inputOunces.value = (valNum * 35.274).toFixed(2);
        inputGrams.value = (valNum * 1000).toFixed();
        inputStones.value = (valNum * 0.1574).toFixed(3);
    }
    if (source === 'inputOunces') {
        inputPounds.value = (valNum * 0.062500).toFixed(4);
        inputKilograms.value = (valNum / 35.274).toFixed(4);
        inputGrams.value = (valNum / 0.035274).toFixed(1);
        inputStones.value = (valNum * 0.0044643).toFixed(4);
    }
    if (source === 'inputGrams') {
        inputPounds.value = (valNum * 0.0022046).toFixed(4);
        inputKilograms.value = (valNum / 1000).toFixed(4);
        inputOunces.value = (valNum * 0.035274).toFixed(3);
        inputStones.value = (valNum * 0.00015747).toFixed(5);
    }
    if (source === 'inputStones') {
        inputPounds.value = (valNum * 14).toFixed(1);
        inputKilograms.value = (valNum / 0.15747).toFixed(1);
        inputOunces.value = (valNum * 224).toFixed();
        inputGrams.value = (valNum / 0.00015747).toFixed();
    }
};
