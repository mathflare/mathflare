//(<HTMLButtonElement>document.getElementById('trapcalc')).addEventListener('click', (event) => {
//event.preventDefault();
//const clearValues = () => {
    //(<HTMLInputElement>document.getElementById('trapl1')).value = "";
    //(<HTMLInputElement>document.getElementById('trapleg1')).value = "";
    //(<HTMLInputElement>document.getElementById('trapβ1')).value = "";
//}
const radiansToDegrees = (radians: number) => { 
    return radians * (180 / Math.PI);
}
//const lside: number = parseFloat((<HTMLInputElement>document.getElementById('trapl1')).value)!;
//const leg: number = parseFloat((<HTMLInputElement>document.getElementById('trapleg1')).value)!;
//const b: number = parseFloat((<HTMLInputElement>document.getElementById('trapβ1')).value)!;
const lside: number = 1;
const leg: number = 1;
const b: number = 1;
if (isNaN(lside) || isNaN(leg) || isNaN(b)) {
    (<HTMLParagraphElement>document.getElementById('trapout1')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
    clearValues();
}
else if (lside <= 0 || leg <= 0 || b <= 0) {
    if (lside <= 0) {
        //(<HTMLParagraphElement>document.getElementById('trapout1')).innerHTML = `<p class="text-warning">The large segment must be a positive number</p>`;
        //clearValues();
    } else if (leg <= 0) {
        //(<HTMLParagraphElement>document.getElementById('trapout1')).innerHTML = `<p class="text-warning">The leg must be a positive number</p>`;
        //clearValues();
    } else if (b <= 0) {
        //(<HTMLParagraphElement>document.getElementById('trapout1')).innerHTML = `<p class="text-warning">The vertex must be a positive number</p>`;
        //clearValues();
    }
}
else if (b >= 180) {
    //(<HTMLParagraphElement>document.getElementById('trapout1')).innerHTML = `<p class="text-warning">The vertex must not surpass 180&#176;</p>`;
    //clearValues();
} else {
    //(<HTMLParagraphElement>document.getElementById('trapout1')).innerHTML = `<p class="text-success">The lenght of the diagonals is D<sub>1</sub>=${Math.sqrt((lside ** 2)+(leg ** 2)-2*lside*leg*Math.cos(b))}</p>`;
    //clearValues();
    console.log(Math.sqrt(lside * lside + leg * leg - 2 * lside * leg * radiansToDegrees(Math.cos(b))));
    console.log(Math.cos(b))
}
//});