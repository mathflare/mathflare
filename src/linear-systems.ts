// utilizing determinants (D, Dx, Dy)
// copyright (c) 2021 MathFlare LLC. - All rights reserved.
(document.querySelector('#button') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    const clearValues: () => void = () => {
        (<HTMLInputElement>document.querySelector('#a1')).value = "";
        (<HTMLInputElement>document.querySelector('#a2')).value = "";
        (<HTMLInputElement>document.querySelector('#b1')).value = "";
        (<HTMLInputElement>document.querySelector('#b2')).value = "";
        (<HTMLInputElement>document.querySelector('#c1')).value = "";
        (<HTMLInputElement>document.querySelector('#c2')).value = "";
    };
    const drawLines: (a1: number, b1: number, c1: number, a2: number, b2: number, c2: number) => void = (a1: number, b1: number, c1: number, a2: number, b2: number, c2: number) => {
        const canvas: any = <HTMLCanvasElement>document.querySelector('#canvas');
        const ctx: any = canvas.getContext('2d');
        ctx.font = "30px Monospace";
        ctx.fillStyle = "white";
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.setLineDash([5, 5]);

        ctx.beginPath();
        ctx.moveTo(0, 300);
        ctx.lineTo(0, -300);
        ctx.strokeStyle = "hsl(152, 69%, 31%)";
        ctx.lineWidth = 3.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(300, 0);
        ctx.lineTo(-300, 0);
        ctx.strokeStyle = "hsl(152, 69%, 31%)";
        ctx.lineWidth = 3.5;
        ctx.stroke();
        ctx.fillText('y', 50, 250);
        ctx.lineCap = 'round';
        ctx.setLineDash([0, 0]);

        //first line
        if (b1 === 0) {
            ctx.beginPath();
            ctx.moveTo(c1 / a1, -200);
            ctx.lineTo(c1 / a1, 200);
            ctx.strokeStyle = 'hsl(354, 70%, 54%)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(200, (c1 - 200 * a1) / b1);
            ctx.lineTo((c1 - 200 * b1) / a1, 200);
            ctx.strokeStyle = 'hsl(45, 100%, 51%)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        //second line
        if (b2 === 0) {
            ctx.beginPath();
            ctx.moveTo(c2 / a2, -200);
            ctx.lineTo(c2 / a2, 200);
            ctx.strokeStyle = 'hsl(354, 70%, 54%)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(200, (c2 - 200 * a2) / b2);
            ctx.lineTo((c2 - 200 * b2) / a2, 200);
            ctx.strokeStyle = 'hsl(354, 70%, 54%)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    };
    const a1: number = parseFloat((<HTMLInputElement>document.querySelector('#a1')).value)!;
    const b1: number = parseFloat((<HTMLInputElement>document.querySelector('#b1')).value)!;
    const c1: number = parseFloat((<HTMLInputElement>document.querySelector('#c1')).value)!;
    const a2: number = parseFloat((<HTMLInputElement>document.querySelector('#a2')).value)!;
    const b2: number = parseFloat((<HTMLInputElement>document.querySelector('#b2')).value)!;
    const c2: number = parseFloat((<HTMLInputElement>document.querySelector('#c2')).value)!;
    const D: number = a1 * b2 - a2 * b1!;
    const Dx: number = c1 * b2 - c2 * b1!;
    const Dy: number = a1 * c2 - a2 * c1!;
    if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2) || isNaN(D) || isNaN(Dx) || isNaN(Dy)) {
        (<HTMLElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        clearValues();
    } else if (a1 == 0 && b1 == 0 && c1 == 0 && a2 == 0 && b2 == 0 && c2 == 0) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system is indefinite: x &#8714; R , y &#8714; R</p>`;
        clearValues();
        drawLines(a1, b1, c1, a2, b2, c2);
    } else if (a1 == 0 && b1 == 0 && c1 != 0 || a2 == 0 && b2 == 0 && c2 != 0) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system is a contradiction: it has no solutions</p>`;
        clearValues();
        drawLines(a1, b1, c1, a2, b2, c2);
    } else if (D == 0 && Dx != 0 || D == 0 && Dy != 0) {
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system is a contradiction: it has no solutions</p>`;
        clearValues();
        drawLines(a1, b1, c1, a2, b2, c2);
    } else if (D == 0 && Dx == 0 && Dy == 0) {
        if (a1 == 0 && b1 == 0 && c1 == 0) {
            if (a2 != 0 && b2 == 0) {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (${c2 / a2
                    } , k) k &#8714; R</p>`;
                clearValues();
                drawLines(a1, b1, c1, a2, b2, c2);
            } else if (a2 == 0 && b2 != 0) {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${c2 / b2
                    }) k &#8714; R</p>`;
                clearValues();
                drawLines(a1, b1, c1, a2, b2, c2);
            } else if (a2 != 0 && b2 != 0) {
                if (c2 == 0) {
                    (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${- b2 / a2
                        }k) k &#8714; R</p>`;
                    clearValues();
                    drawLines(a1, b1, c1, a2, b2, c2);
                } else {
                    (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${c2 / a2
                        }${- b2 / a2
                        }k) k &#8714; R</p>`;
                    clearValues();
                    drawLines(a1, b1, c1, a2, b2, c2);
                }
            }
        } else if (a2 == 0 && b2 == 0 && c2 == 0) {
            if (a1 != 0 && b1 == 0) {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (${c1 / a1
                    } , k) k &#8714; R</p>`;
                clearValues();
                drawLines(a1, b1, c1, a2, b2, c2);
            } else if (a1 == 0 && b1 != 0) {
                (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${c1 / b1
                    }) k &#8714; R</p>`;
                clearValues();
                drawLines(a1, b1, c1, a2, b2, c2);
            } else if (a1 != 0 && b1 != 0) {
                if (c1 == 0) {
                    (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${- b1 / a1
                        }k) k &#8714; R</p>`;
                    clearValues();
                    drawLines(a1, b1, c1, a2, b2, c2);
                } else {
                    (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${c1 / a1
                        }${- b1 / a1
                        }k) k &#8714; R</p>`;
                    clearValues();
                    drawLines(a1, b1, c1, a2, b2, c2);
                }
            }
        } else if (a1 == 0 && b1 != 0 && a2 == 0 && b2 != 0) {
            (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${c1 / b1
                }) k &#8714; R</p>`;
            clearValues();
            drawLines(a1, b1, c1, a2, b2, c2);
        } else if (a1 != 0 && b1 == 0 && a2 != 0 && b2 == 0) {
            (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (${c1 / a1
                } , k) k &#8714; R</p>`;
            clearValues();
            drawLines(a1, b1, c1, a2, b2, c2);
        } else if (a1 != 0 && b1 != 0 && c1 == 0 /*&& a2 != 0 && b2 != 0 && c2 == 0*/
        ) {
            (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${- b1 / a1
                }k) k &#8714; R</p>`;
            clearValues();
            drawLines(a1, b1, c1, a2, b2, c2);
        } else {
            (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-warning">The system has unlimited solutions: (x,y) = (k , ${c1 / a1
                }${- b1 / a1
                }k) k &#8714; R</p>`;
            clearValues();
            drawLines(a1, b1, c1, a2, b2, c2);
        }
    } else if (D != 0) {
        const x: number = Dx / D;
        const y: number = Dy / D;
        (document.querySelector('#output') as HTMLElement).innerHTML = `<p class="text-success">The system has a single solution (x , y) = (${x} , ${y})</p>`;
        drawLines(a1, b1, c1, a2, b2, c2);
        clearValues();
    }
});
