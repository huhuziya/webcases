	window.onload=function ()
	{
		var oDiv=document.getElementById('container');
		var aDiv=document.getElementById('content');
		var aLi=aDiv.getElementsByTagName('li');
		
		for(var i=0;i<aLi.length;i++)
		{
			//每个物体加一个透明度属性
			aLi[i].alpha=30;
			
			aLi[i].onmouseover=function ()
			{
				startMove(this, 100);
			};
			aLi[i].onmouseout=function ()
			{
				startMove(this, 30);
			};
		}
	};
	
	
	function startMove(obj, iTarget)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			var speed=(iTarget-obj.alpha)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(obj.alpha==iTarget)
			{
				clearInterval(obj.timer);
			}
			else
			{
				obj.alpha+=speed;
				
				obj.style.filter='alpha(opacity:'+obj.alpha+')';
				obj.style.opacity=obj.alpha/100;
			}
		}, 30);
	}