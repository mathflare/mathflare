//copyrights (c) 2021 MathFlare LLC. All rights reserved.
(document.getElementById('button') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.getElementById('vertex')).value)!;
    if (isNaN(n) || !(Math.floor(n) == n)) {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('vertex')).value = "";
    } else if (n <= 2) {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">There is no polygon with less than 3 segments</p>`;
        (<HTMLInputElement>document.getElementById('vertex')).value = "";
    } else if (n == 3) {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this triangle is ${(n * (n - 3)) / 2}</p>`;
        (<HTMLInputElement>document.getElementById('vertex')).value = "";
    } else if (n == 4) {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this parallelogram is ${(n * (n - 3)) / 2}</p>`;
        (<HTMLInputElement>document.getElementById('vertex')).value = "";
    } else {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-success">The number of diagonals in this convex ${n}-gon is ${(n * (n - 3)) / 2}</p>`;
        (<HTMLInputElement>document.getElementById('vertex')).value = "";
    }
});

(document.getElementById('button2') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const n: number = parseFloat((<HTMLInputElement>document.getElementById('sside')).value)!;
    if (isNaN(n)) {
        (document.getElementById('output2') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('sside')).value = "";
    } else if (n <= 0) {
        (document.getElementById('output2') as HTMLElement).innerHTML = `<p class="text-warning">The side must be a positive number</p>`;
        (<HTMLInputElement>document.getElementById('sside')).value = "";
    } else {
        (document.getElementById('output2') as HTMLElement).innerHTML = `<p class="text-success">The lenght of the diagonal is D = ${n * Math.sqrt(2)}cm (&#8764; ${(n * Math.sqrt(2)).toFixed(3)})</p>`;
        (<HTMLInputElement>document.getElementById('sside')).value = "";
    }
});

(document.getElementById('paracalc') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const cd: number = parseFloat((<HTMLInputElement>document.getElementById('pcd')).value)!;
    const ad: number = parseFloat((<HTMLInputElement>document.getElementById('pad')).value)!;
    const d: number = parseFloat((<HTMLInputElement>document.getElementById('pd')).value)!;
    const degreesToRadians = (degrees: number) => {
        return degrees * (Math.PI / 180);
    }
    if (isNaN(cd) || isNaN(ad) || isNaN(d)) {
        (document.getElementById('paraout') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (<HTMLInputElement>document.getElementById('pcd')).value = '';
        (<HTMLInputElement>document.getElementById('pad')).value = '';
        (<HTMLInputElement>document.getElementById('pd')).value = '';
    } else if (cd <= 0 || ad <= 0 || d <= 0) {
        (document.getElementById('paraout') as HTMLElement).innerHTML = `<p class="text-warning">All the values must be positive</p>`;
        (<HTMLInputElement>document.getElementById('pcd')).value = '';
        (<HTMLInputElement>document.getElementById('pad')).value = '';
        (<HTMLInputElement>document.getElementById('pd')).value = '';
    } else if (d >= 180) {
        (document.getElementById('paraout') as HTMLElement).innerHTML = `<p class="text-warning">The angle must be smaller than 180&deg;</p>`;
        (<HTMLInputElement>document.getElementById('pcd')).value = '';
        (<HTMLInputElement>document.getElementById('pad')).value = '';
        (<HTMLInputElement>document.getElementById('pd')).value = '';
    } else {
        (document.getElementById('paraout') as HTMLElement).innerHTML = `<p class="text-success">The lenght of the diagonal is D = ${Math.sqrt(cd * cd + ad * ad - 2 * cd * ad * Math.cos(degreesToRadians(d)))} (&#8764; ${(Math.sqrt(cd * cd + ad * ad - 2 * cd * ad * Math.cos(degreesToRadians(d)))).toFixed(4)})</p>`;
        (<HTMLInputElement>document.getElementById('pcd')).value = '';
        (<HTMLInputElement>document.getElementById('pad')).value = '';
        (<HTMLInputElement>document.getElementById('pd')).value = '';
    }
});
//copyrights (c) 2021 MathFlare LLC. All rights reserved.