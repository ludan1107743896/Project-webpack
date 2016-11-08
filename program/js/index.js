window.onload = function(){
/*top表头点击事件*/
	function top(num,sum){
		$(num).mouseover(function(){
			$(sum)[0].style.display="block";
		});
		$(num).mouseout(function(){
			$(sum)[0].style.display="none";
		});
	}	
	top(".top1 ul>li:nth-child(3)","#Menu1");
	top(".top1 ul>li:nth-child(4)","#Menu2");
	top(".top1 ul>li:nth-child(6)","#Menu3");

/*top传送过来数据用户名*/
	var iUser = document.cookie.split("=")[0]
	if(iUser==null){
		$(".top1_user").html(9714034);
	}else{
		$(".top1_user").html(iUser);
	}
	
/*logo*/
	$(".txt").focus(function(){
		$(this)[0].value=""
	});
	$(".txt").blur(function(){
		$(this)[0].value="输入您要查找的商品名";
	});
	

//导航传送数据**************************************************//
	$.get("content/index/index.json",function(data){
		var _html = "";
		for(var k in data){
			_html += "<li id=\""+k+"\"><h4>"+data[k]["name"]+"</h4><a href=\"list.html\">"+data[k]["name1"]+"</a><a href=\"list.html\">"+data[k]["name2"]+"</a><a href=\"list.html\">"+data[k]["name3"]+"</a><a href=\"list.html\">"+data[k]["name4"]+"</a><a href=\"list.html\">"+data[k]["name5"]+"</a><a href=\"list.html\">"+data[k]["name6"]+"</a><a href=\"list.html\">"+data[k]["name7"]+"</a><a href=\"list.html\">"+data[k]["name8"]+"</a><a href=\"list.html\">"+data[k]["name9"]+"</a><a href=\"list.html\">"+data[k]["name10"]+"</a><a href=\"list.html\">"+data[k]["name11"]+"</a><ul id=\"ptj\" class=\"com_ptj\"></ul></li>";
		}
		$("#nav2 .ul2").html(_html);
		bindEvend(data);
	},"json");

	function bindEvend(data){
		$(".ul2 li").mouseenter(function(){
			var _html = "";
			for(var k in data){
				if(k === this.id){
					for(var key in data[k]["node"]){
						_html+="<li><h5>"+data[k]["node"][key]["name1"]+"</h5><h6><a href=\"#\">"+data[k]["node"][key]["name2"]+"</a><a href=\"#\">"+data[k]["node"][key]["name3"]+"</a><a href=\"#\">"+data[k]["node"][key]["name4"]+"</a><a href=\"#\">"+data[k]["node"][key]["name5"]+"</a><a href=\"#\">"+data[k]["node"][key]["name6"]+"</a><a href=\"#\">"+data[k]["node"][key]["name7"]+"</a><a href=\"#\">"+data[k]["node"][key]["name8"]+"</a><a href=\"#\">"+data[k]["node"][key]["name9"]+"</a><a href=\"#\">"+data[k]["node"][key]["name10"]+"</a></h6></li>"
					}
				}
				$(".com_ptj").html(_html);
			}
		});
		nav_2();
	}

	function nav_2(){
		$("#nav2 .ul2>li").mouseover(function(){
			$(this).children(".com_ptj")[0].style.display= "block";
		});
		$("#nav2 .ul2>li").mouseout(function(){
			$(this).children(".com_ptj")[0].style.display= "none";
		});
	}

/*banner图轮播*/
	//图片的运动状态
	function banner(id){
		var oLi = document.getElementById(id).children[0].children;
		var banner1 = document.getElementById(id);
		var oSpan = document.getElementById(id).children[1].children;
		var index = 0;
		var zIndex = 2;
		var timer = setInterval(left,1000);
		banner1.onmouseover = function(){
			clearInterval(timer);
		}
		banner1.onmouseout = function(){
			timer = setInterval(left,1000);
		}
		function left(){
			if(index == oLi.length-1){
				index = 0;
			}else{
				index ++;
			}
			commen();
		}
		function commen(){
			oLi[index].style.zIndex = zIndex ++ ;
			oLi[index].style.opacity = 0;
			move(oLi[index],"opacity",100);
			for(var i = 0;i<oSpan.length;i++){
				oSpan[i].className = "";
			}
			oSpan[index].className = "active";	
		}
		for(var i=0;i<oSpan.length;i++){
			oSpan[i].index = i;
			oSpan[i].onmouseover = function(){
				index = this.index;
				for(var i=0;i<oSpan.length;i++){
					oSpan[i].className = ""
					oLi[i].style.opacity = 0;
				}
				oSpan[index].className = "active";
				move(oLi[index],"opacity",100);
			}
		}
	}
	banner("banner1");	
	//轮播传输数据 
	function banner_1(){
		$.get("content/banner.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<li><a href=\""+data[i]["src"]+"\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></li>";
			}
			$("#banner1 ul").html(_html);
		},"json");
	}
	banner_1();

/*purch精品闪购*/
	function purch(){
		var oImg = document.getElementById('Pleft1').children;
		var oSpan = document.getElementById('p').children;
		oSpan[0].onclick = function(){
			//this.style.display = this.style.display = "block"?"none":"block";
			oImg[0].style.display = "block";
			oImg[1].style.display = "none";
			oSpan[0].style.display = "none";
			oSpan[1].style.display = "block";
		}
		oSpan[1].onclick = function(){
			oImg[0].style.display = "none";
			oImg[1].style.display = "block";
			oSpan[0].style.display = "block"
			oSpan[1].style.display = "none"
		}
		var Pleft2 = document.getElementById("Pleft2");
		var oAo = Pleft2.children[0].children;
		var aLi = Pleft2.children[1].children;
		for(var i=0;i<oAo.length;i++){
			oAo[i].index = i;
			oAo[i].onmouseover = function(){	
				for(var i=0;i<aLi.length;i++){
					aLi[i].className ="";
				}
				aLi[this.index].className ="active";
			}
		}
	}
	purch();
//upLoad抢购传输数据
	function content_box(url,id){
		$.get(url,function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html +="<li><div class=\"box_time\">还剩<span>7</span>天<span class=\"span_2\"></span>时<span class=\"span_3\"></span>分</div><dl class=\"box_dl\"><dt><a href=\"#\"><img src=\""+data[i]["img1"]+"\" alt=\"\"></a></dt><dd><h4>"+data[i]["name"]+"</h4><h5>"+data[i]["name2"]+"</h5><h6>抢购价：<span>"+data[i]["money"]+"</span></h6></dd></dl></li>" 
			}
			$(id).html(_html);
			upLoad();
			Time();
		},"json");
	}
	content_box("content/ajax0.json",".box_ul1");
	content_box("content/ajax1.json",".box_ul2");
	content_box("content/ajax2.json",".box_ul3");
	content_box("content/ajax3.json",".box_ul4");
	content_box("content/ajax4.json",".box_ul5");
//倒计时计算
	function Time(){
		$(function(){
			var num = 604800;
			var timer=setInterval(function(){
				num--;
				//$(".span_1").html(parseInt((num/3600)%24));
				//console.log($(".span_1").html());
				$(".span_2").html(parseInt(num/60%60));
				$(".span_3").html(num%60);
				if(num==0){
					clearInterval(timer);
				}
			},1000);
		});
	}

	function upLoad(){
		var aSpan = document.getElementById('Pright').children;
		var oBox   = document.getElementById("box");
		for(var i=0;i<aSpan.length;i++){
			aSpan[i].index = i;
			aSpan[i].onmouseover = function(){
				for(var i=0;i<aSpan.length;i++){
					aSpan[i].className = "";
				}
				this.className = "active";
				move(oBox,"top",-335*this.index)
			}
		}
	}
	
/*love猜你喜欢*/
	function love2_right(){
		var love2_right = document.getElementById("love2_right");
		ajax("content/love2.txt",fnSucc,fnError);
		function fnSucc(str){
			var aData = eval(str);
			for(var i=0;i<aData.length;i++){
				var oDl = document.createElement('dl');
				oDl.innerHTML='<dt><img src="images/'+aData[i].img1+'" alt=""></dt><dd><h5>'+aData[i].name+'</h5><p>'+aData[i].name2+'</p><p>'+aData[i].city+'</p><p>'+aData[i].variety+'</p><p>'+aData[i].remark+'</p><h6>'+aData[i].money+'</h6></dd>';
				love2_right.appendChild(oDl);
			} 		
		}
		function fnError(code){
			if(code == 404){
				oDiv.innerHTML = "";
				oDiv.className = "error";
			}
		}	
	}
	love2_right();

/*reputation*/
	function Hot(){
		var oUl = document.getElementById("Hot").children[0];
		var oLi = oUl.children;
		var oSpan = document.getElementById("Hot").children[1].children;
		var reputation = document.getElementById("reputation1");

		var index = 0;


		//圆点的划过事件
		for(var i=0;i<oSpan.length;i++){
			oSpan[i].index = i;
			oSpan[i].onmouseover = function(){
				for(var i=0;i<oSpan.length;i++){
					oSpan[i].className = ""
				}
				this.className = "active";
				move(oUl,'left',-oLi[0].offsetWidth*this.index);
			}
		}
		//图片的转换事件
		var timer=setInterval(left,2000);
		function left(){
			if(index < oLi.length-1){
				index++;
				move(oUl,"left",-oLi[0].offsetWidth*index);
			}
			if(index==2){
				clearInterval(timer);
				timer = setInterval(right,2000);
			}
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].className =""
			}
			oSpan[index].className = "active";
		}

		function right(){
			if(index > 0){
				index--;
				move(oUl,"left",-oLi[0].offsetWidth*index);
			}
			if(index == 0){
				clearInterval(timer);
				timer = setInterval(left,2000);
			}
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].className =""
			}
			oSpan[index].className = "active";
		}
	}


//第二轮播传输
	function Hot_1(){
		$.get("content/banner_2.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<li><img src=\""+data[i]["img"]+"\" alt=\"\"></li>";
			}
			$("#Hot ul").html(_html);
			Hot();	
		},"json");
	}
	Hot_1();

	function Hot_2(){
		$.get("content/content_2.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<dl class=\"buy\"><dt><img src=\""+data[i]["img"]+"\" alt=\"\"></dt><dd class=\"dd1\">"+data[i]["name"]+"</dd><dd class=\"dd2\">促销信息：<span>商品折扣</span><em>"+data[i]["money"]+"</em></dd><dd class=\"dd3\"><p class=\"p1\">"+data[i]["peo"]+"</p><p>"+data[i]["num"]+"</p></dd></dl>"
			}
			$("#buy_2").html(_html);
		},"json");
	}
	Hot_2();

/*found趣味发现*/
	function found_1(){
		$.get("content/found_1.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<dl><dt><img src=\""+data[i]["img"]+"\" alt=\"\"></dt><dd class=\"dd1\"><h4>"+data[i]["name"]+"</h4><h6>"+data[i]["eng"]+"</h6></dd><dd class=\"dd2\"><h2>"+data[i]["money"]+"</h2><h5>"+data[i]["num"]+"</h5></dd></dl>"
			}
			$("#bottom1").html(_html);
		},"json");
	}
	found_1();

	function found_2(){
		$.get("content/found_2.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<ul><li class=\"li1\">"+data[i]["li1"]+"</li><li>"+data[i]["li2"]+"</li><li>"+data[i]["li3"]+"</li><li>"+data[i]["li4"]+"</li></ul>"
			}
			$("#found_ul").html(_html);
		},"json");
	}
	found_2();

	function found_3(){
		$.get("content/found_3.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<dl><dt><img src=\""+data[i]["img"]+"\" alt=\"\"></dt><dd class=\"dd1\">"+data[i]["name"]+"</dd><dd>"+data[i]["eng"]+"</dd><dd class=\"dd3\">"+data[i]["money"]+"</dd><dd class=\"dd4\">"+data[i]["jian"]+"</dd></dl>"
			}
			$("#bottom2").html(_html);
		},"json");
	}
	found_3();

	function found_4(){
		$.get("content/found_4.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<dl class=\"dl2\"><dt><img src=\""+data[i]["img"]+"\" alt=\"\"></dt><dd class=\"dd1\"><p>"+data[i]["name"]+"</p><p>"+data[i]["eng"]+"</p><p>"+data[i]["eng2"]+"</p></dd><dd class=\"dd2\"><span>"+data[i]["money"]+"</span><em>"+data[i]["gz"]+"</em></dd></dl>"
			}
			$("#bottom3").html(_html);
		},"json");
	}
	found_4();

/*tese*/
	function tese_1(){
		$.get("content/content_3.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<dt><a href=\"\"><img src=\""+data[i]["img1"]+"\" alt=\"\"></a></dt><dd><p><a href=\"\"><img src=\""+data[i]["img2"]+"\" alt=\"\"></a></p><p class=\"p1\"><a href=\"\"><img src=\""+data[i]["img3"]+"\" alt=\"\"></a></p></dd><dd><p><a href=\"\"><img src=\""+data[i]["img4"]+"\" alt=\"\"></a></p><p class=\"p1\"><a href=\"\"><img src=\""+data[i]["img5"]+"\" alt=\"\"></a></p></dd>"
			}
			$("#tese_1").html(_html);
		},"json");
	}
	tese_1();

/*product*/
	//百叶窗形式的
	function listBox(url,id){
		$.get(url,function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<li class=\"boxLi\"><a href=\"\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></li>";
			}
			$(id).html(_html);	
		},"json");
	}
	listBox("content/banner_3.json","#listBox");
	//图片向左滑动
	function listBox2_1(){
		$.get("content/banner_4.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<li><img src=\""+data[i]["img"]+"\" alt=\"\"></li>";
			}
			$("#listBox2 ul").html(_html);
			listBox2(data);
		},"json");
	}
	listBox2_1();
	//滑动函数
	function listBox2(data){
		var listBox2 = document.getElementById('listBox2');
		var oLi = listBox2.children[0].children;
		for(var i=0;i<oLi.length;i++){
			oLi[i].onmouseover = function(){
				move(this.children[0],"margin-left",-104);
			}
		}
		for(var i=0;i<oLi.length;i++){
			oLi[i].onmouseout = function(){
				move(this.children[0],"margin-left",0);
			}
		}		
	}

/*Condition酒友品鉴*/
	function Con_1(){
		$.get("content/Con_1.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<dl><dt><img src=\""+data[i]["img1"]+"\" alt=\"\"></dt><dd class=\"dd1\"><h4>"+data[i]["name"]+"</h4><p>"+data[i]["money"]+"</p></dd><dd class=\"dd2\"><h6><img src=\""+data[i]["img2"]+"\" alt=\"\"></h6><h5><p>"+data[i]["ping1"]+"</p><span>"+data[i]["nei1"]+"</span></h5></dd><dd class=\"dd2\"><h6><img src=\""+data[i]["img3"]+"\" alt=\"\"></h6><h5><p>"+data[i]["ping2"]+"</p><span>"+data[i]["nei2"]+"</span></h5></dd></dl>";
			}
			$("#Con_1").html(_html);	
		},"json");
	}
	Con_1();

/*Improt进口葡萄酒*/
	function Improt2_3(url,id){
		$.get(url,function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<a href=\"#\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a>";
			}
			$(id).html(_html);
		},"json");
	}
	Improt2_3("content/content_1.json",".com_p1");
	Improt2_3("content/content_1.json","#Foregin_1_left");
	Improt2_3("content/content_1.json",".com_p1_F");

	function Improt2_1(url,id,id2,name){
		$.get(url,function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<li><img src=\""+data[i]["img"]+"\" alt=\"\"></li>";
			}
			$(id).html(_html);
			Improt2_2(data,id2,name);
		},"json");
	}
	Improt2_1("content/banner_5.json",".Improt_21","Improt2_1","Improt2_h6");
	Improt2_1("content/banner_5.json",".Improt_21_F","Improt2_1_F","Improt2_h6_F");
	Improt2_1("content/banner_6.json","#Foregin_1_right","Foregin_1_right","For_num");

	function Improt2_2(data,id2,name){
		var oUl = document.getElementById(id2);
		var oLi = oUl.children;
		var oSpan= document.getElementById(name).children;
		oUl.style.width = oLi[0].offsetWidth*oLi.length+"px";	
		var index = 0;
		var timer = setInterval(fun,2000);
		//圆点的划过事件
		for(var i=0;i<oSpan.length;i++){
			oSpan[i].index = i;
			oSpan[i].onmouseover = function(){
				for(var i=0;i<oSpan.length;i++){
					oSpan[i].className = ""
				}
				this.className = "active";
				move(oUl,'margin-left',-oLi[0].offsetWidth*this.index);
			}
		}

		function fun(){	
			if(index < oLi.length-1){
				index++;
				move(oUl,"margin-left",-oLi[0].offsetWidth*index);
			}
			if(index==2){
				clearInterval(timer);
				timer = setInterval(fun1,2000);
			}
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].className =""
			}
			oSpan[index].className = "active";
		}
		function fun1(){
			if(index > 0){
				index--;
				move(oUl,"margin-left",-oLi[0].offsetWidth*index);
			}
			if(index == 0){
				clearInterval(timer);
				timer = setInterval(fun,2000);
			}
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].className =""
			}
			oSpan[index].className = "active";
		}
	}
	
	function Im_ul(url,id){
		$.get(url,function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<ul class=\"comm_ul\"><li class=\"li1\"><img src=\""+data[i]["img1"]+"\" alt=\"\"></li><li class=\"li2\">"+data[i]["name"]+"</li><li class=\"li3\">"+data[i]["eng"]+"</li><li class=\"li4\">"+data[i]["money"]+"</li><li class=\"li5\"><span>"+data[i]["num"]+"</span><em>"+data[i]["ping"]+"</em></li></ul>";
			}
			$(id).html(_html);
		},"json");
	}
	Im_ul("content/content_4.json","#Im_ul");
	Im_ul("content/content_4.json","#Im_ul_F");
	Im_ul("content/content_4.json","#Foregin_2");
	Im_ul("content/content_5.json","#Im_ul_1");
	Im_ul("content/content_5.json","#Im_ul_1_F");


	function Improt3_2(url,id){
		$.get(url,function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html += "<dl class=\"Improt3_dl\"><dt><em>"+data[i]["num"]+"</em><a href=\"#\"><img src=\""+data[i]["img1"]+"\" alt=\"\"></a></dt><dd><h4>"+data[i]["name"]+"</h4><h5>"+data[i]["shop"]+"</h5><h6>"+data[i]["money"]+"</h6></dd></dl>";
			}
			$(id).html(_html);
		},"json");
	}
	Improt3_2("content/content_6.json","#Improt3_right");
	Improt3_2("content/content_6.json","#Improt3_right_F");


//右侧滑动出现	
	function knsd_1(id){
		var oLi = document.getElementById(id).getElementsByTagName('p');
		var odl= document.getElementById(id).getElementsByTagName('dl');
		//console.log(odl);
		var index = 0;
		for(var i=0;i<oLi.length;i++){
			oLi[i].index = i;
			oLi[i].onmouseover =function(){
				//alert(1);
				for(var i=0;i<oLi.length;i++){
					oLi[i].style.display = "block"	
				}
				for(var i=0;i<odl.length;i++){
					odl[i].className = "";
				}
				this.style.display = "none"
				odl[this.index].className = "active";
			}	
		}
	}
	
//传送数据
	function cont(url,id){
		$.get(url,function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<li><p>"+data[i]["content"]+"</p><dl id=\"knsdm\" class=\"knsdm\"><dt><em>"+(i+3)+"</em><a href=\"#\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></dt><dd><h4>"+data[i]["name"]+"</h4><h5>"+data[i]["num"]+"</h5><h6>"+data[i]["money"]+"</h6></dd></dl></li>"
			}
			$(id).append(_html);
			knsd_1("knsd_1");
			knsd_1("knsd_1_F");
			knsd_1("knsd_1_FF");
		});
	}
	cont("content/index/knsd.json","#knsd_1");
	cont("content/index/knsd.json","#knsd_1_F");
	cont("content/index/knsd2.json","#knsd_1_FF");
	

/*footer1_2*/	
	function footer1_2(){
		var  footer_a =document.getElementById("footer1_1p").children[13];
		var footer_p = document.getElementById("footer1_2p");
		footer_a.onmouseover = function(){
			footer_p.style.display = footer_p.style.display == "block"?"none":"block";
		}
	}
	footer1_2();	



/*w_body*/
	$(".w_img").click(function(){
		$(".w_body")[0].style.display ="none";
	});


}



   
