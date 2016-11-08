//创建cookie
function createCookie(name,value,expires,path,domain,secure){
	var cookieText=e
	ncodeURIComponent(name)+"="+encodeURIComponent(value);
	//检测expires是否为Data的一个实例s对象
	if(expires instanceof Date){
		cookieText+=';expires='+expires;
	}
	if(path){
		cookieText+=';path='+path;
	}
	if(domain){
		cookieText+=';domain'+domain;
	}
	if(secure){
		cookieText+=';secure';
	}
	document.cookie=cookieText;
}
//设置失效时间
function setCookieTime(day){
	var date=null;
	if(typeof day=="number"&&day>0){
		date=new Date();
		date.setDate(date.getDate()+day);
	}
	return date;
}
//获取cookie
function getCookie(name){
	var cookieName=encodeURIComponent(name)+"=";
	var cookieStart=document.cookie.indexOf(cookieName);
	var cookieValue=null;
	if(cookieStart>-1){
		var cookieEnd=document.cookie.indexOf(";",cookieStart);
		if(cookieEnd==-1){
			cookieEnd=document.cookie.length;
		}
		cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
	}else{
		return;
	}
	return cookieValue;
}
function removeCookie(name){
	document.cookie=encodeURIComponent(name)+'=expires='+new Date(0);
}
