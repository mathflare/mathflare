function temperatureConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputFahrenheit = document.getElementById("inputFahrenheit");
    var inputCelsius = document.getElementById("inputCelsius");
    var inputKelvin = document.getElementById("inputKelvin");
    if (source == "inputFahrenheit") {
        inputCelsius.value = ((valNum - 32) / 1.8).toFixed(2);
        inputKelvin.value = (((valNum - 32) / 1.8) + 273.15).toFixed(2);
    }
    if (source == "inputCelsius") {
        inputFahrenheit.value = ((valNum * 1.8) + 32).toFixed(2);
        inputKelvin.value = ((valNum) + 273.15).toFixed(2);
    }
    if (source == "inputKelvin") {
        inputFahrenheit.value = (((valNum - 273.15) * 1.8) + 32).toFixed(2);
        inputCelsius.value = ((valNum) - 273.15).toFixed(2);
    }
}