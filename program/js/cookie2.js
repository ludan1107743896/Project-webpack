function CookieOperate(){
	this.cookie=document.cookie;
	this.readCookie=function(key){
		var _tmp=this.cookie.split(/;\s+/g);
		var temp=null;
		for(var i=0;i<_tmp.length;i++){
			temp=_tmp[i].split("=");
			if(temp[0]==key){
				return window.decodeURIComponent(temp[1]);
			}
		}
	}
	
	this.dealCookie=function(key,path){
		document.cookie=key+"=; path="+path+"; expires="+new Date(1970-01-01)+";";
	}
	
	this.editCookie=function(key,value,path,expires){
		document.cookie=key+"="+window.encodeURIComponent(value)+"; path="+path+"; expires="+expires+";";
	}
}













/*
function DealCookie(){
	this.cookie=document.cookie;
	this.readCookie=function(key){
		var cookie=this.cookie.split(/;\s+/);
		var _tmp=null;
		for(var i=0;i<cookie.length;i++){
			_tmp=cookie[i].split("=");
			if(_tmp[0]===key){
				return JSON.parse(window.decodeURIComponent(_tmp[1]));
			}
		}
	}
	
	this.delCookie=function(key,path){
		document.cookie=key+"=; path="+path+"; expires="+new Date(1970-01-01)+";";
	}
	
	this.plus=function(data,key,num){
		var _str="{";
		var _flag=0;
		for(var k in data){
			if(key===k){
				data[k]+=num;
				_flag=1;
			}
			_str+="\""+k+"\":"+data[k]+",";
		}
		if(_flag==1){
			_str=_str.replace(/,$/g,"");
		}else{
			_str+="\""+key+"\":"+num;
		}
		_str+="}";
		return _str;
	}

	
	this.editCookie=function(key,value,path,expires){
		document.cookie=key+"="+window.encodeURIComponent(value)+"; path="+path+"; expires="+expires+";";
	}
}
*/





