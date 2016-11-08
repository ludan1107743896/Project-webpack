function ajax(url,fnSucc,fnFail){
	var xhr = null;
	if(window.ActiveXObject){
		xhr = new ActiveXObject("MSXML2.XMLHttp");
	}else{
		xhr = new XMLHttpRequest();
	}
	xhr.open("GET",url+"?d="+new Date().getTime(), true);
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if(xhr.readyState == 4){
			if(xhr.status === 200){
					if(fnSucc){
						fnSucc(xhr.responseText);
					}
			}else{
				if(fnFail){
					fnFail(xhr.status);
				}
			}
		}
	}
}