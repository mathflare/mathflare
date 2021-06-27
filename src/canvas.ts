const canvas: any = <HTMLCanvasElement> document.getElementById('canvas')!;
const ctx: any = canvas.getContext("2d")!;
ctx.translate(canvas.width/2,canvas.height/2);
ctx.strokeStyle = '#FFFFFF';

//Vertical Reference Line
ctx.beginPath(); 
ctx.strokeStyle = '#DC3545';
ctx.lineWidth = 5;
ctx.moveTo(0, 300);
ctx.lineTo(0, -300);
ctx.stroke();

//Horizontal Reference Line
ctx.beginPath(); 
ctx.strokeStyle = '#DC3545';
ctx.lineWidth = 5;
ctx.moveTo(300, 0);
ctx.lineTo(-300, 0);
ctx.stroke();

//First Graph Line
ctx.beginPath();   
ctx.strokeStyle = '#FFC107';
ctx.lineWidth = 7;
ctx.lineCap = "round";
ctx.moveTo(0, 0);
ctx.lineTo(-245, -365);
ctx.stroke();

//Second Graph Line
ctx.beginPath();   
ctx.strokeStyle = '#0D6EFD';
ctx.lineWidth = 7;
ctx.lineCap = "round";
ctx.moveTo(0, 0);
ctx.lineTo(76, 256);
ctx.stroke();