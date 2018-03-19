var dom=document.getElementById("clock");
var ctx=dom.getContext("2d");
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;
var rem=width/200;
function drawbackground() {
	ctx.save();
	ctx.translate(r,r);
	ctx.beginPath();
    ctx.lineWidth=10*rem;
	ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
	ctx.stroke();

	var hournumbers=[3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font=18*rem+"px Arial";
	ctx.textAlign="center";
    ctx.textBaseline="middle";
	hournumbers.forEach(function(number,i){
          var rad=2*Math.PI/12*i;
          var x=(r-30*rem)*Math.cos(rad);
          var y=(r-30*rem)*Math.sin(rad);//小时数小于外圆半径
          ctx.fillText(number ,x,y);
	});
	for (var i=0;i<60;i++){
		var rad=2*Math.PI/60*i;
		var x=(r-18*rem)*Math.cos(rad);
		var y=(r-18*rem)*Math.sin(rad);//点在小时数与外圆之间
		ctx.beginPath();
		if(i % 5==0){              //区分小时点
            ctx.fillStyle="#000";
			ctx.arc(x,y,2*rem,0,2*Math.PI,false);
		}
		else{
			ctx.fillStyle="#ccc";
			ctx.arc(x,y,2*rem,0,2*Math.PI,false);
		}
		ctx.fill();
	}
}
function drawhour(hour,minute){
	ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/12*hour;
    var mrad=2*Math.PI/12/60*minute;
    ctx.rotate(rad+mrad);
    ctx.lineWidth=6*rem;
    ctx.lineCap="round";
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();
}
function drawminute(minute){
	ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/60*minute;
    ctx.rotate(rad);
    ctx.lineWidth=3*rem;
    ctx.lineCap="round";
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0,-r + 30*rem);
    ctx.stroke();
    ctx.restore();
}
function drawsecond(second){
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle="red";
    var rad =2*Math.PI/60* second;
    ctx.rotate(rad);
    ctx.moveTo(-2*rem,20*rem);
    ctx.lineTo(2*rem,20*rem);
    ctx.lineTo(1*rem,-r+18*rem);
    ctx.lineTo(-1*rem,-r+18*rem);
    ctx.fill();
    ctx.restore();
}
function drawdot(){
	ctx.beginPath();
	ctx.fillStyle="#fff";
	ctx.arc(0,0,3*rem,0,2*Math.PI,false);
	ctx.fill();
}

	




function draw(){
	ctx.clearRect(0,0,width,height);
	var now=new Date();
	var hour=now.getHours();
	var minute=now.getMinutes();
	var second=now.getSeconds();
	drawbackground();
	drawhour(hour,minute);
    drawminute(minute);
   drawsecond(second);
   drawdot();
   ctx.restore();
}

draw();

setInterval(draw,1000);