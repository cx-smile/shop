window.onload=function(){
	var a=document.getElementById('login-a');
	var b=document.getElementById('login-b');
	var aBox=document.getElementById('login-a-box');
	var bBox=document.getElementById('login-b-box');
	
	a.onclick=function(){
		aBox.className='show';
		bBox.className='hide';
		a.className='active';
		b.className='';
	}
	
	b.onclick=function(){
		bBox.className='show';
		aBox.className='hide';
		b.className='active';
		a.className='';
	}
}