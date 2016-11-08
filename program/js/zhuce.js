$(function(){
	var mobr = null;
	var yzm  = null;
	var sjyzm = null;
	var pwd  = null;
	var pwd1 = 1;
	var str1,str4
	
	//手机号判定
	$(".p1>input").blur(function(){
		str1 = $(".p1>input").val();
		var reg1 = /[1]\d{10}/;
		if(reg1.test(str1)==false){
			alert("正确输入手机号");
		}else{
			mobr = 1;
		}
	});
	//验证码
	$(".p2>input").blur(function(){
		var	str2 = $(".p2>input").val();
		var reg2 = /vfya/i;
		if(reg2.test(str2)==false){
			alert("正确输入验证码");
		}else{
			yzm = 1;
		}
	});

	$(".p3>input").blur(function(){
		var str3 = $(".p3>input").val();
		var reg3 = /\d{4}/;
		if(reg3.test(str3)==false){
			alert("请正确的输入手机验证码");
		}else{
			sjyzm = 1;
		}
	});

	$(".p4>input").blur(function(){
		str4 = $(".p4>input").val();
		var reg4 = /\d{6}/;
		if(reg4.test(str4)==false){
			alert("请正确的输入手机密码");
		}else{
			pwd = 1;
		}
	});

	$(".p5>input").blur(function(){
		var str5 = $(".p5>input").val();
		var reg5 = /\d{6}/;
		if(reg5.test(str5)==false){
			alert("请输入相同密码,再次确认");
		}else{
			pwd1 = 1;
		}
	});

	$(".p6>a").click(function(){
		if(mobr==1 && yzm==1 && sjyzm==1 && pwd==1 && pwd1==1){
			$(this).attr("href","register.html");
			createCookie(str1,str4,setCookieTime(7));
			alert("恭喜您注册成功");
		}
	});
	
});