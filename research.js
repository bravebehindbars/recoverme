const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;
ctx.font = ' bold 18pt serif'

ctx.fillText('Year',5,390)
ctx.strokeText('Year',5,390)
ctx.rotate((-90 * Math.PI) / 180);
ctx.translate(-100,0)

ctx.fillText('Deaths',25,5)
ctx.strokeText('Deaths',25,5)
ctx.translate(100,0)
ctx.rotate((90 * Math.PI) / 180);

ctx.transform(1, 0, 0, -1, 0, canvas.height)

const xArray = [1,20,40,50,60,70,80,100,90,120,140,140];
const yArray = [1,2,4,5,6,7,7,10,8,10,12];

ctx.fillStyle = "navy";
ctx.beginPath();
for (let i = 0; i < xArray.length-1; i++) {
  let x = xArray[i]*400/150;
  let y = yArray[i]*400/15;
  ctx.lineTo(x,y)
 // ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
 // ctx.fill();
}
ctx.stroke()
