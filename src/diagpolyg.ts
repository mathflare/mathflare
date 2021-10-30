//copyrights (c) 2021 MathFlare LLC. All rights reserved.
(document.querySelector('#button') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.querySelector('#vertex')).value)!;
    if (isNaN(n) || !(Math.floor(n) == n)) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#vertex')).value = "";
    } else if (n <= 2) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">There is no polygon with less than 3 segments</p>`;
        (<HTMLInputElement>document.querySelector('#vertex')).value = "";
    } else if (n == 3) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this triangle is ${(n * (n - 3)) / 2}</p>`;
        (<HTMLInputElement>document.querySelector('#vertex')).value = "";
    } else if (n == 4) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this parallelogram is ${(n * (n - 3)) / 2}</p>`;
        (<HTMLInputElement>document.querySelector('#vertex')).value = "";
    } else {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this convex ${n}-gon is ${(n * (n - 3)) / 2}</p>`;
        (<HTMLInputElement>document.querySelector('#vertex')).value = "";
    }
});

(document.querySelector('#button2') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.querySelector('#sside')).value)!;
    if (isNaN(n)) {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#sside')).value = "";
    } else if (n <= 0) {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (<HTMLInputElement>document.querySelector('#sside')).value = "";
    } else {
        (document.querySelector('#output2') as HTMLElement).innerHTML = `<p class="text-success">The lenght of the diagonal is D = ${n * Math.sqrt(2)}cm (&#8764; ${(n * Math.sqrt(2)).toFixed(3)})</p>`;
        (<HTMLInputElement>document.querySelector('#sside')).value = "";
    }
});

(document.querySelector('#paracalc') as HTMLButtonElement).addEventListener('click', (event: Event) => {
    event.preventDefault();
    const cd: number = parseFloat((<HTMLInputElement>document.querySelector('#pcd')).value)!;
    const ad: number = parseFloat((<HTMLInputElement>document.querySelector('#pad')).value)!;
    const d: number = parseFloat((<HTMLInputElement>document.querySelector('#pd')).value)!;
    if (isNaN(cd) || isNaN(ad) || isNaN(d)) {
        (document.querySelector('#paraout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.querySelector('#pcd')).value = '';
        (<HTMLInputElement>document.querySelector('#pad')).value = '';
        (<HTMLInputElement>document.querySelector('#pd')).value = '';
    } else if (cd <= 0 || ad <= 0 || d <= 0) {
        (document.querySelector('#paraout') as HTMLElement).innerHTML = `<p class="text-warning">All the values must be positive</p>`;
        (<HTMLInputElement>document.querySelector('#pcd')).value = '';
        (<HTMLInputElement>document.querySelector('#pad')).value = '';
        (<HTMLInputElement>document.querySelector('#pd')).value = '';
    } else if (d >= 180) {
        (document.querySelector('#paraout') as HTMLElement).innerHTML = `<p class="text-warning">The angle must be smaller than 180&deg;</p>`;
        (<HTMLInputElement>document.querySelector('#pcd')).value = '';
        (<HTMLInputElement>document.querySelector('#pad')).value = '';
        (<HTMLInputElement>document.querySelector('#pd')).value = '';
    } else {
        (document.querySelector('#paraout') as HTMLElement).innerHTML = `<p class="text-success">The lenght of the diagonal is D = ${Math.sqrt(cd * cd + ad * ad - 2 * cd * ad * Math.cos(degreesToRadians(d)))} (&#8764; ${(Math.sqrt(cd * cd + ad * ad - 2 * cd * ad * Math.cos(degreesToRadians(d)))).toFixed(4)})</p>`;
        (<HTMLInputElement>document.querySelector('#pcd')).value = '';
        (<HTMLInputElement>document.querySelector('#pad')).value = '';
        (<HTMLInputElement>document.querySelector('#pd')).value = '';
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.