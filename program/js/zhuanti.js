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

//nav划过时二级菜单划出效果
	$(function(){
		function Mennu(id,menu){
			$(id).mouseover(function(){
				$(menu)[0].style.display = "block";
			});
			$(id).mouseout(function(){
				$(menu)[0].style.display = "none";
			});
		}
		Mennu("._box .li1",".box_1");
		Mennu(".box_1>li:nth-child(1)",".menu1");
		Mennu(".box_1>li:nth-child(2)",".menu2");
		Mennu(".box_1>li:nth-child(3)",".menu3");
		Mennu(".box_1>li:nth-child(4)",".menu4");
		Mennu(".box_1>li:nth-child(5)",".menu5");
		Mennu(".box_1>li:nth-child(6)",".menu6");
	});

//banner图转换
	var oLi = document.getElementById("banner1").children;
	var oSpan = document.getElementById("dian").children;
	var oUl = document.getElementById("banner1");
	var index = 0;
	var timer = setInterval(fun,2000);
	oUl.onmouseover = function(){
		clearInterval(timer);
	}
	oUl.onmouseout = function(){
		timer = setInterval(fun,2000);
	}

	for(var i=0;i<oSpan.length;i++){
		oSpan[i].index = i;
		oSpan[i].onmouseover=function(){
			index =this.index;
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].className="";
			}
			oSpan[index].className = "active";
			move(oUl,"left",-oLi[0].offsetWidth*index);
		}
	}

	function fun(){
		if(index==0){
			index++;
			move(oUl,"left",-oLi[0].offsetWidth*index);
		}
		for(var i=0;i<oSpan.length;i++){
			oSpan[i].className= ""
		}
		oSpan[index].className = "active";
		clearInterval(timer);
		timer = setInterval(fun2,2000)
	}
	function fun2(){
		if(index==1){
			index--;
			move(oUl,"left",oLi[0].offsetWidth*index);	
		}
		for(var i=0;i<oSpan.length;i++){
			oSpan[i].className= ""
		}
		oSpan[index].className = "active";
		clearInterval(timer);
		timer=setInterval(fun,2000);
	}
	//传输数据
	function content_1(src,id){
			$.get(src,function(data){
			var _html="";
			//console.log(data);
			for(var i=0;i<data.length;i++){
				_html+="<ul class=\"com_ul\"><li><dl class=\"product\"><dt><a href=\"#\"><img src=\""+data[i]["img1"]+"\" alt=\"\"></a></dt><dd><h3>活灵魂干红葡萄酒</h3><h4>ALMAVIA</h4><h5><p><span class=\"span1\">JS</span><span class=\"span2\">97</span></p><p><span class=\"span1\">CT</span><span class=\"span2\">93</span></p></h5><h6>浓郁的果味，封满的酒体，柔顺的单宁微微带新香，回味优美美绵长。</h6><h2>特卖价<span>￥998.0</span></h2></dd></dl><p class=\"foot\">可以立即发货  交货地址：<span class=\"dress\">中国大陆</span><span class=\"buy\">立即购买</span></p></li><li><dl class=\"product\"><dt><a href=\"#\"><img src=\""+data[i]["img2"]+"\" alt=\"\"></a></dt><dd><h3>活灵魂干红葡萄酒</h3><h4>ALMAVIA</h4><h5><p><span class=\"span1\">JS</span><span class=\"span2\">97</span></p><p><span class=\"span1\">CT</span><span class=\"span2\">93</span></p></h5><h6>浓郁的果味，封满的酒体，柔顺的单宁微微带新香，回味优美美绵长。</h6><h2>特卖价<span>￥998.0</span></h2></dd></dl><p class=\"foot\">可以立即发货  交货地址：<span class=\"dress\">中国大陆</span><span class=\"buy\">立即购买</span></p></li><li><dl class=\"product\"><dt><a href=\"#\"><img src=\""+data[i]["img3"]+"\" alt=\"\"></a></dt><dd><h3>活灵魂干红葡萄酒</h3><h4>ALMAVIA</h4><h5><p><span class=\"span1\">JS</span><span class=\"span2\">97</span></p><p><span class=\"span1\">CT</span><span class=\"span2\">93</span></p></h5><h6>浓郁的果味，封满的酒体，柔顺的单宁微微带新香，回味优美美绵长。</h6><h2>特卖价<span>￥998.0</span></h2></dd></dl><p class=\"foot\">可以立即发货  交货地址：<span class=\"dress\">中国大陆</span><span class=\"buy\">立即购买</span></p></li></ul>"
			}
			$(id).html(_html);
		},"json");
  	}
	content_1("content/zhuanti.json",".main");
	content_1("content/zhuanti2.json","#qyyx");
	content_1("content/zhuanti3.json","#bztj");
	content_1("content/zhuanti4.json","#mzxg");
	content_1("content/zhuanti3.json","#ydlmz");

	//返回顶部
	$(".scro_top").click(function(){
		$("body,html").animate({scrollTop:0},10000);
	});



}
