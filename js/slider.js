window.onload=function(){
	var img=document.getElementById('img');
	var ili=img.getElementsByTagName('li');
	var dotBtn=document.getElementById('dotBtn');
	var dli=dotBtn.getElementsByTagName('li');
	var timer=window.setInterval(autoChange,3000);
	var back=document.getElementById('back');
	var forward=document.getElementById('forward');
	
	/*小白点切换图片*/
	for(var i = 0; i < dli.length; i++){
		dli[i].index=i;
		/*鼠标滑入小圆点*/
		dli[i].onmouseover=function(){
			clearInterval(timer);
			for(var j = 0; j < ili.length; j++) {
                    ili[j].id = "hide";
                    dli[j].className = "";
                }
            ili[this.index].id = "show";
            dli[this.index].className = "on";
            
		}
		/*鼠标滑出小圆点*/
		dli[i].onmouseout=function(){
			timer=setInterval(autoChange,3000);
		}
	}
	/*自动切换轮播图函数*/
	var show_index=0;
	function autoChange(){
		++show_index;
		if(show_index==dli.length){
			show_index=0;
		}
		for(var j = 0; j < ili.length; j++) {
            ili[j].id = "hide";
            dli[j].className = "";
        }
        ili[show_index].id = "show";
        dli[show_index].className = "on";
	}
	 /*左右箭头切换*/
	function animate(value){
		img.style.left=parseInt(img.style.left)+value+"px";
	}
	back.onmouseover=function(){
		clearInterval(timer);
	}
	back.onmouseout=function(){
		timer=setInterval(autoChange,3000);
	}
	back.onclick=function(){
		show_index--;
		if(show_index==-1){
			show_index=ili.length-1;
		}
		for(var j = 0; j < ili.length; j++) {
            ili[j].id = "hide";
            dli[j].className = "";
        }
        ili[show_index].id = "show";
        dli[show_index].className = "on";
	}
	forward.onmouseover=function(){
		clearInterval(timer);
	}
	forward.onmouseout=function(){
		timer=setInterval(autoChange,3000);
	}
	forward.onclick=function(){
		show_index++;
		if(show_index==ili.length){
			show_index=0;
		}
		for(var j = 0; j < ili.length; j++) {
            ili[j].id = "hide";
            dli[j].className = "";
        }
        ili[show_index].id = "show";
        dli[show_index].className = "on";
	}
	/*倒计时*/
	function fresh(){
		var endTime=new Date("2020/6/28,10:00");
		var nowTime=new Date();
		var leftSecond=parseInt((endTime.getTime()-nowTime.getTime())/1000);
		h=parseInt(leftSecond/3600);
		m=parseInt((leftSecond/60)%60);
		s=parseInt(leftSecond%60);
		if(h<0) h="0"+h;
		if(m<10&&m>=0) m="0"+m; else if(m<0) m="00";
		if(s<10&&s>=0) s="0"+s; else if(s<0) s="00";
		document.getElementById("hour").innerHTML=h;
		document.getElementById("munite").innerHTML=m;
		document.getElementById("second").innerHTML=s;
	}
	var sh=setInterval(fresh,1000);
}
