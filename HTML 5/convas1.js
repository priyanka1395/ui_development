var canvas=document.querySelector('canvas');
canvas.height=window.innerHeight;
canvas.width=window.innerwidth;
var c=canvas.getContext('2d');
c.fillStyle= "red";
c.fillRect(100,100,100,100);

c.fillStyle= "magenta";
c.strokeRect(100,100,100,100);
c.strokeRect(100,300,100,100);

//for drowing line
c.beginpath();
c.moveTo(50,300);//starting point left top or x,y,value
c.lineTo(50,300); 
c.strock();
