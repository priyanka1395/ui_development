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
c.lineTo(500,300); 
c.lineTo(500,300); 
c.strock();
//  for drowing arc

c.beginpath();
c.arc(300,300,40,0,math.PI*2,false);
c.strockstyle="green";
c.strocke();
//drowing many arcs
  for(var i=0;i<30;i++)
  {
     var y=math.random()*window.innerHeight;
	 var y=math.random()*window.innerwidth;
	 c.beginpath();
	 c.arc(x,y,40,0,math.PI*2,false);
	 c.strockestyle="green";
	 c.strocke();
	 }
	 c.font="30px aircle"
	 strocketext("hell world",30,50);
