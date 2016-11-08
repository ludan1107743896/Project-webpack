
$(document).ready(function(){ 
	var iUser = document.cookie.split("=")[0]
	var iPwd = getCookie("");
	$("#btn1").click(function(){
		if(iUser==$(".txt1")[0].value && iPwd == $(".txt2")[0].value){
			$(this).attr("href","index.html");
		}else{
			alert("账号或密码有误");
		}

	});

});

 