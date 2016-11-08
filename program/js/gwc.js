window.onload=function(){
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

//读取cookie
	$(function(){
		var _cookie = new CookieOperate();
		var num = 0;
		var src1 = _cookie.readCookie("cart2");
		var money = _cookie.readCookie("cart3");
		var sum = 49;//初始值保存
		var num = _cookie.readCookie("cart1");
		//所有初始值
		$(".text").html(num);
		$(".zong").html(num);
		$(".p2").html("￥"+(num*sum)+".0");
		$(".g_span2").html("￥"+num*sum+".0");
		$(".g_span1").html(num);
		$(".img_g").attr("src",src1);


		//添加
		$(".add").click(function(){
			num++;
			if(num>99){
				num=99;
			}
			$(".text").html(num);
			$(".zong").html(num);//合计总共多少
			$(".g_span1").html(num);
			$(".p2").html("￥"+num*sum+".0");//价格累加
			$(".g_span2").html("￥"+num*sum+".0");//价格累加
			_cookie.editCookie("cart1",num);
			_cookie.editCookie("cart3",num*sum);

		});


		//减少
		$(".jian").click(function(){
			num--;
			if(num<0){
				num=0;
			}
			$(".text").html(num);
			$(".zong").html(num);//合计总共多少
			$(".g_span1").html(num);
			$(".p2").html("￥"+num*sum+".0");//价格累加
			$(".g_span2").html("￥"+num*sum+".0");//价格累加
			_cookie.editCookie("cart1",num);	
			_cookie.editCookie("cart3",num*sum);
		})
		


		//叉号删除
		$(".cha").click(function(){
			$(".gwc_p1")[0].style.display="none";
		});
		$(".delate").click(function(){
			$(".gwc1")[0].style.display = "none"
		});

//***************************************************************************//
//传送数据
		function content_1(id,src){
			$.get(src,function(data){
				var _html="";
				for(var i=0;i<data.length;i++){
					_html+="<dl class=\"dapei_dl\"><dt><a href=\"#\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></dt><dd><h4>"+data[i]["name"]+"</h4><h5>促销价</h5><p>"+data[i]["money"]+"</p><h6><span class=\"jian1\">-</span><span class=\"text1\">1</span><span class=\"add1\">+</span></h6><h3 class=\"tian\" id=\""+i+"\">加入购物车</h3></dd></dl>";
				}
				$(id).html(_html);
				sum_a();
			},"json");
		}
//划过时数据传输改变
		$(".dapei_1 .li1").click(function(){
			$(".dapei_1 li").css("background","#f1eeeb").eq(this);
			$(this).css("background","#fff");
			content_1(".dapei_2","content/gwc.json");
		});
		$(".dapei_1 .li2").click(function(){
			$(".dapei_1 li").css("background","#f1eeeb").eq(this);
			$(this).css("background","#fff");
			content_1(".dapei_2","content/gwc2.json");
		});
		$(".dapei_1 .li3").click(function(){
			$(".dapei_1 li").css("background","#f1eeeb").eq(this);
			$(this).css("background","#fff");
			content_1(".dapei_2","content/gwc3.json");
		});

//实现按钮的点击加减
		function sum_a(){
			var suma=0;
			$(".add1").click(function(){
				suma++;
				if(suma>99){
					suma = 99;
				}
				$(".text1").html(suma);
			});

			$(".jian").click(function(){
				suma--;
				if(suma<0){
					suma = 0;
				}
				$(".text1").html(suma);
			});
		} 	

//*****************************************************************************//	
//传送数据
		function content(id,src){
			$.get(src,function(data){
				var _html="";	
				for(var i=0;i<data.length;i++){
					_html+="<dl class=\"dapei_dl\"><dt><a href=\"#\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></dt><dd><h4>"+data[i]["name"]+"</h4><h5>促销价</h5><p>"+data[i]["money"]+"</p><h6><span class=\"jian1\">-</span><span class=\"text1\">1</span><span class=\"add1\">+</span></h6><h3 class=\""+data[i]["id"]+"\">加入购物车</h3></dd></dl>";
				}
				$(id).html(_html);
				add_Cookie();
			},"json");
		}
		content(".dapei_2","content/gwc.json");

		function add_Cookie(){
			var arr = [];
			var _cookie = new CookieOperate();
			$(".dapei_dl h3").click(function(){
				var id = parseInt($(this).attr("class"));
				arr.push(id);
				console.log(arr)
				_cookie.editCookie("id",arr); 
			});
			add_arr();
		}
		

		function add_arr(){
		var _cookie = new CookieOperate();
		var str1 = _cookie.readCookie("id");
			if(str1!=null){
				var arr=str1.split(",");
				$.get("content/gwc.json",function(data){	
				for(var i=0;i<arr.length;i++){
					id=parseInt(arr[i]);
					$(".gwc").append("<div class=\"gwc1\"><input type=\"checkbox\"/><img class=\"img_g\" src=\""+data[id]["img"]+"\" alt=\"\"><h5 class=\"gwc_h5\"><p>"+data[id]["name"]+"</p><p>Yellow Tail Shairaz</p></h5><p class=\"p1\">￥49.0</p><div class=\"gwc2\"><span class=\"jian\">-</span><span class=\"text\">1</span><span class=\"add\">+</span></div><p class=\"p2\">"+data[id]["money"]+"</p><div class=\"gwc3\"><p>加入收藏夹</p><p class=\"delate\">删除</p></div></div>");
					}
				},"json");
				delate();	
			}
		}
	});

}


