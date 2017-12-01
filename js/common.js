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

/*圆形进度条 myCanvas*/
var c=document.getElementById('myCanvas');
var ctx=c.getContext('2d');
var x=30;
//灰色的圆
//开始一条路径
ctx.beginPath();
//设置当前线条的宽度
ctx.lineWidth = 6; //10px
//设置线条的颜色
ctx.strokeStyle = '#e5e5e5';
ctx.arc(27, 27, 23, 0, 2 * Math.PI);
//绘制已定义的路径
ctx.stroke();
//百分比所占的粉色的圆
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#fb0065';
//-90度为起点 弧度为-0.5*Math.PI
//百分比如26% 所占的弧度为 26/100*Math.PI*2
ctx.arc(27, 27, 23, -0.5*Math.PI,x/100*Math.PI*2-0.5*Math.PI);
ctx.stroke();
//圆里面的文字
ctx.font = '.24rem Arial';
ctx.fillStyle = '#000';
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.fillText(x+'%', 27, 27);

/*圆形进度条 myCanvas*/
var c=document.getElementById('myCanvas01');
var ctx=c.getContext('2d');
var x=40;
//灰色的圆
//开始一条路径
ctx.beginPath();
//设置当前线条的宽度
ctx.lineWidth = 6; //10px
//设置线条的颜色
ctx.strokeStyle = '#e5e5e5';
ctx.arc(27, 27, 23, 0, 2 * Math.PI);
//绘制已定义的路径
ctx.stroke();
//百分比所占的粉色的圆
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#fb0065';
//-90度为起点 弧度为-0.5*Math.PI
//百分比如26% 所占的弧度为 26/100*Math.PI*2
ctx.arc(27, 27, 23, -0.5*Math.PI,x/100*Math.PI*2-0.5*Math.PI);
ctx.stroke();
//圆里面的文字
ctx.font = '.24rem Arial';
ctx.fillStyle = '#000';
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.fillText(x+'%', 27, 27);

/*圆形进度条 myCanvas*/
var c=document.getElementById('myCanvas02');
var ctx=c.getContext('2d');
var x=10;
//灰色的圆
//开始一条路径
ctx.beginPath();
//设置当前线条的宽度
ctx.lineWidth = 6; //10px
//设置线条的颜色
ctx.strokeStyle = '#e5e5e5';
ctx.arc(27, 27, 23, 0, 2 * Math.PI);
//绘制已定义的路径
ctx.stroke();
//百分比所占的粉色的圆
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#fb0065';
//-90度为起点 弧度为-0.5*Math.PI
//百分比如26% 所占的弧度为 26/100*Math.PI*2
ctx.arc(27, 27, 23, -0.5*Math.PI,x/100*Math.PI*2-0.5*Math.PI);
ctx.stroke();
//圆里面的文字
ctx.font = '.24rem';
ctx.fillStyle = '#000';
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.fillText(x+'%', 27, 27);
