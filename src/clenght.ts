const lengthConverter: (source: string, valNum: any) => void = (source: string, valNum: any) => {
    valNum = parseFloat(valNum)!;
    const inputFeet: any = <HTMLInputElement>document.getElementById('inputFeet')!;
    const inputMeters: any = <HTMLInputElement>document.getElementById('inputMeters')!;
    const inputInches: any = <HTMLInputElement>document.getElementById('inputInches')!;
    const inputcm: any = <HTMLInputElement>document.getElementById('inputcm')!;
    const inputYards: any = <HTMLInputElement>document.getElementById('inputYards')!;
    const inputKilometers: any = <HTMLInputElement>document.getElementById('inputKilometers')!;
    const inputMiles: any = <HTMLInputElement>document.getElementById('inputMiles')!;
    if (source === 'inputFeet') {
        inputMeters.value = (valNum / 3.2808).toFixed(2);
        inputInches.value = (valNum * 12).toFixed(2);
        inputcm.value = (valNum / 0.032808).toFixed();
        inputYards.value = (valNum * 0.33333).toFixed(2);
        inputKilometers.value = (valNum / 3280.8).toFixed(5);
        inputMiles.value = (valNum * 0.00018939).toFixed(5);
    } if (source === 'inputMeters') {
        inputFeet.value = (valNum * 3.2808).toFixed(2);
        inputInches.value = (valNum * 39.370).toFixed(2);
        inputcm.value = (valNum / 0.01).toFixed();
        inputYards.value = (valNum * 1.0936).toFixed(2);
        inputKilometers.value = (valNum / 1000).toFixed(5);
        inputMiles.value = (valNum * 0.00062137).toFixed(5);
    } if (source === 'inputInches') {
        inputFeet.value = (valNum * 0.083333).toFixed(3);
        inputMeters.value = (valNum / 39.370).toFixed(3);
        inputcm.value = (valNum / 0.39370).toFixed(2);
        inputYards.value = (valNum * 0.027778).toFixed(3);
        inputKilometers.value = (valNum / 39370).toFixed(6);
        inputMiles.value = (valNum * 0.000015783).toFixed(6);
    } if (source === 'inputcm') {
        inputFeet.value = (valNum * 0.032808).toFixed(3);
        inputMeters.value = (valNum / 100).toFixed(3);
        inputInches.value = (valNum * 0.39370).toFixed(2);
        inputYards.value = (valNum * 0.010936).toFixed(3);
        inputKilometers.value = (valNum / 100000).toFixed(6);
        inputMiles.value = (valNum * 0.0000062137).toFixed(6);
    } if (source === 'inputYards') {
        inputFeet.value = (valNum * 3).toFixed();
        inputMeters.value = (valNum / 1.0936).toFixed(2);
        inputInches.value = (valNum * 36).toFixed();
        inputcm.value = (valNum / 0.010936).toFixed();
        inputKilometers.value = (valNum / 1093.6).toFixed(5);
        inputMiles.value = (valNum * 0.00056818).toFixed(5);
    } if (source === 'inputKilometers') {
        inputFeet.value = (valNum * 3280.8).toFixed();
        inputMeters.value = (valNum * 1000).toFixed();
        inputInches.value = (valNum * 39370).toFixed();
        inputcm.value = (valNum * 100000).toFixed();
        inputYards.value = (valNum * 1093.6).toFixed();
        inputMiles.value = (valNum * 0.62137).toFixed(2);
    } if (source === 'inputMiles') {
        inputFeet.value = (valNum * 5280).toFixed();
        inputMeters.value = (valNum / 0.00062137).toFixed();
        inputInches.value = (valNum * 63360).toFixed();
        inputcm.value = (valNum / 0.0000062137).toFixed();
        inputYards.value = (valNum * 1760).toFixed();
        inputKilometers.value = (valNum / 0.62137).toFixed(2);
    }
}