/**
 * Created by Administrator on 2017/12/1.
 */
/*rem 动态计算html的字体 大小*/
function refreshRem(){
    var desW = 750 ;
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW *100 +'px';
}
refreshRem();
window.addEventListener('resize',refreshRem);


drawCircle =  function(canvas,number){
    var  clientWidth = document.documentElement.clientWidth;
    var canvasWidth = Math.floor(clientWidth*121/750);
    var innerR = canvasWidth * 0.75*0.5;
    var ctx = canvas.getContext('2d');
    canvas.setAttribute('width',canvasWidth+'px');
    canvas.setAttribute('height',canvasWidth+'px');
    ctx.translate(canvasWidth/2,canvasWidth/2);
    //绘制灰色的圆
    ctx.beginPath();
    ctx.arc(0, 0, innerR, 0, Math.PI*2,false);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#e5e5e5";
    ctx.stroke();
    //绘制粉色的圆
    ctx.beginPath();
    ctx.arc(0, 0, innerR, -0.5*Math.PI,number/100*Math.PI*2-0.5*Math.PI,false);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#fb0065";
    ctx.stroke();
    // 设置字体
    ctx.font = "24px";
    // 设置对齐方式
    ctx.textAlign = "center";
    // 设置填充颜色
    ctx.fillStyle = "#333";
    // 设置字体内容，以及在画布上的位置
    ctx.fillText(number+'%', 0, 2);
};
drawCircle(document.getElementById('myCanvas'),30);
drawCircle(document.getElementById('myCanvas01'),50);
drawCircle(document.getElementById('myCanvas02'),80);




