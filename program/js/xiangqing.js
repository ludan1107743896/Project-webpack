
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
/*top传送过来数据用户名*/
	var iUser = document.cookie.split("=")[0]
	if(iUser==null){
		$(".top1_user").html(9714034);
	}else{
		$(".top1_user").html(iUser);
	}
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

		//右边划入弹出
		Mennu(".xfk_1 .p1",".xfk_1d");
		Mennu(".xfk_1 .p2",".xfk_2d");
		Mennu(".xfk_1 .p6",".xfk_3d");
	});
//放大镜
	$("#box .shade").mousemove(function(e){	
		var $x = e.clientX;
		var $y = e.clientY;
		var $l = $("#box").offset().left; 
		var $t = $("#box").offset().top-$("body").scrollTop();
		var $w = $("#box .move").width()/2; 
		var $h = $("#box .move").height()/2;
		var $left = $x - $l - $w;
		var $top = $y - $t - $h;
		//判定边界
		if($top < 0){
			$top = 0;
			}else if($top > ($("#box .shade").height() - $h * 2 - 2)){
				$top = $("#box .shade").height() - $h * 2 - 2;
			};	
		if($left < 0){
			$left = 0;
			}else if($left >  ($("#box .shade").width() - $w * 2 - 2)){
				$left = $("#box .shade").width() - $w * 2 - 2;
			}
		$("#box .move").css({left:$left,top:$top});
		var $yd_w = $("#box .shade").width() - $w * 2; 
		var $yd_h = $("#box .shade").height() - $h * 2;
		var $yd_wbl = $left / $yd_w; 
		var $yd_hbl = $top / $yd_h;
		var $big_left = ($("#box .bimg img").width() - $("#box .bimg").width()) * $yd_wbl; 
		var $big_top = ($("#box .bimg img").height() - $("#box .bimg").height()) * $yd_hbl;
		$("#box .bimg img").css({left:-$big_left,top:-$big_top});	
	});
//放大镜下部图片的移动
	$(".botimg_1 img").click(function(){
		var src1 = $(this).attr("src");
		$(this).siblings().css("opacity","0.6");
		$(this).css("opacity","1");
		$(".img_1").attr("src",src1);
		$(".bimg img").attr("src",src1);
	});

//购物车加减
	$(document).ready(function(){
//划过显示
		$("#box .shade").hover(function(){
			$("#box .move").show();
			$("#box .bimg").show();
		},function(){
			$("#box .move").hide();
			$("#box .bimg").hide();
		});
//点加加一减一
			var num = 0;
			var _cookie= new CookieOperate();
			var str= $(".img_1")[0].src;
			var money = $(".money").html();

			//console.log(money);
			$(".span_1").click(function(){
				num--;
				if(num<0){
					num=0
				}
				$(".btn_1").val(num);
			_cookie.editCookie("cart1",num);
			_cookie.editCookie("cart2",str);
			_cookie.editCookie("cart3",money);
			$(".btn_9").html(num);
			});
			
			$(".span_2").click(function(){
				num++;
				if(num>99){
					num=99;
				}
				$(".btn_1").val(num);
			_cookie.editCookie("cart1",num);
			_cookie.editCookie("cart2",str);
			_cookie.editCookie("cart3",money);
			$(".btn_9").html(num);
			});
		

//传输数据
		$.get("content/xiang1.json",function(data){
			var _html = "";
			for(var i=0;i<data.length;i++){
				_html+="<dl class=\"product_dl\"><dt>\<a href=\"#\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></dt><dd class=\"dd1\"><h4>"+data[i]["name"]+"</h4><h5>"+data[i]["eng"]+"</h5><h6>"+data[i]["money"]+"</h6></dd><dd class=\"dd2\"><p><span>好评度</span><span>"+data[i]["ping1"]+"</span></p><p><span>评论</span><span>"+data[i]["ping2"]+"</span></p><p><span>售出</span><span>"+data[i]["num"]+"</span></p></dd></dl>"
			}
			$(".product_2").html(_html);
		},"json");

		
	
//*********************************************************************************//
//评论回复
/*
	var ping = 0;
	$(".wping").click(function(){
		var _cookie = new  CookieOperate();
		var ping3=_cookie.readCookie("ping");	
		ping++;
		_cookie.editCookie("ping",ping);
		$(".ping_bottom").append("<dl class=\"ping_dl\"><dt><img src=\"images/xiangqing/u_1.jpg\" alt=\"\"></dt><dd><h4><p><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"></p><span>购买过</span><em>豪园诗歌庄园甲苯呐红葡萄酒</em><a href=\"#\">2014-02-18 20：30</a></h4><div class=\"huifu\"><p class=\"huifu1\">有点失望</p><div class=\"huifu2\"><h5>此评论对我<span>有用</span>(0)<span>没用</span>(0)<span class=\"hui_btn\">回复</span></h5></div><div class=\"hui_btn1\"><input  class=\"hui_input\" type=\"textarea\" /><span class=\"hui_btn2\">回复</span></div></div></dd></dl>");
	});

	function add(){
		var _cookie = new  CookieOperate();
		var _ping = _cookie.readCookie("ping");
		for(var i=0;i<_ping;i++){
			$(".ping_bottom").append("<dl class=\"ping_dl\"><dt><img src=\"images/xiangqing/u_1.jpg\" alt=\"\"></dt><dd><h4><p><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"></p><span>购买过</span><em>豪园诗歌庄园甲苯呐红葡萄酒</em><a href=\"#\">2014-02-18 20：30</a></h4><div class=\"huifu\"><p class=\"huifu1\">有点失望</p><div class=\"huifu2\"><h5>此评论对我<span>有用</span>(0)<span>没用</span>(0)<span class=\"hui_btn\">回复</span></h5></div><div class=\"hui_btn1\"><input  class=\"hui_input\" type=\"textarea\" /><span class=\"hui_btn2\">回复</span></div></div></dd></dl>");
		}
	}
	add();
*/
//*******************************************************************************//
//点击添加DoM元素
	$(".wping").click(function(){
		$(".ping_bottom").append("<dl class=\"ping_dl\"><dt><img src=\"images/xiangqing/u_1.jpg\" alt=\"\"></dt><dd><h4><p><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"><img src=\"images/xiangqing/xb1.jpg\" alt=\"\"></p><span>购买过</span><em>豪园诗歌庄园甲苯呐红葡萄酒</em><a href=\"#\">2014-02-18 20：30</a></h4><div class=\"huifu\"><p class=\"huifu1\">有点失望</p><div class=\"huifu2\"><h5>此评论对我<span>有用</span>(0)<span>没用</span>(0)<span class=\"hui_btn\">回复</span></h5></div><div class=\"hui_btn1\"><input  class=\"hui_input\" type=\"textarea\" /><span class=\"hui_btn2\">回复</span></div></div></dd></dl>");
	});
//星星点击变色
	$(".ping_dl>dd>h4>p>img").click(function(){
		$(this).attr("src","images/xiangqing/xb2.jpg");
	});
	$(".ping_dl>dd>h4>p>img").dblclick(function(){
		$(this).attr("src","images/xiangqing/xb1.jpg");
	});

//点击回复事件
	$(".ping_bottom").on("click",".hui_btn",function(){
		$(this)[0].style.display = "none";
		$(this).parents().parents().next().eq(0)[0].style.display = "block";
	});
//回复语句
	$(".ping_bottom").on("click",".hui_btn2",function(){
		var content = $(this).parents().eq(0).children().eq(0).val();
		$(this).parents().eq(1).children().eq(0).html(content)
		$(this).parents()[0].style.display = "none";
		$(this).parents().eq(1).children().eq(1).children().children().eq(2).css("display","inline-block");              
	});



	});

}