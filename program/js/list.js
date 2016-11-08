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
//右侧点击加减号
	$.get("content/list/list_4.json",function(data){
		var _html = "";
		for(var i=0;i<data.length;i++){
			_html += "<li><h4><img class=\"list_img\" src=\""+data[i]["img"]+"\" alt=\"\">"+data[i]["name"]+"</h4><ul class=\"list_ul\"><li>"+data[i]["name1"]+"</li><li>"+data[i]["name2"]+"</li><li>"+data[i]["name3"]+"</li><li>"+data[i]["name4"]+"</li><li>"+data[i]["name5"]+"</li><li>"+data[i]["name6"]+"</li></ul></li>"
		}
		$(".all>ul").html(_html)
		add_j();
	},"json");

	function add_j(){
		$(".list_img").click(function(){
			if($(this).attr("src")=="images/list/list1.jpg"){
				$(this).attr("src","images/list/list2.jpg");
				$(this).parents().next().eq(0).css("display","block")
			}else{
				$(this).attr("src","images/list/list1.jpg");
				$(this).parents().next().eq(0).css("display","none");
			}
		});

	}

//数据加载(为你推荐)
	$.get("content/list/list.json",function(data){
		var _html = "";
		for(var i=0;i<data.length;i++){
			_html += "<dl class=\"week_dl\"><dt><a href=\"#\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></dt><dd><h4>"+data[i]["name"]+"</h4><h5>"+data[i]["eng"]+"</h5><h6>"+data[i]["money"]+"</h6></dd></dl>" 
		}
		$(".week").append(_html);
	},"json");

//数据加载(main2_1)
	$.get("content/list/list1.json",function(data){
		var _html = "";
		for(var i=0;i<data.length;i++){
			_html += "<dl class=\"main2_dl\"><dt><img src=\""+data[i]["img"]+"\" alt=\"\"></dt><dd><h4>"+data[i]["name"]+"</h4><h5>"+data[i]["eng"]+"</h5><h6>"+data[i]["money"]+"</h6><p class= \""+data[i]["id"]+"\">加入购物车</p></dd></dl>" 
		}
		$(".main2_1").append(_html);
	},"json");

	
//数据额加载（main2_2）
	$.get("content/list/list2.json",function(data){
		var _html = "";
		for(var k in data){
			_html += "<p id=\""+k+"\"><em>"+data[k]["name"]+"</em><span>不限</span></p>" 
		}
		$(".main2_2").html(_html);
		bindEvend(data);
	},"json");

	function bindEvend(data){
		var _html="";
		for(var k in data){
			$(".main2_2 p").each(function(){
				if(k===this.id){
					_html="<a href=\"#\">"+data[k]["node"]["name1"]+"</a><a href=\"#\">"+data[k]["node"]["name2"]+"</a><a href=\"#\">"+data[k]["node"]["name3"]+"</a><a href=\"#\">"+data[k]["node"]["name4"]+"</a><a href=\"#\">"+data[k]["node"]["name5"]+"</a><a href=\"#\">"+data[k]["node"]["name6"]+"</a><a href=\"#\">"+data[k]["node"]["name7"]+"</a><a href=\"#\">"+data[k]["node"]["name8"]+"</a>";
					$("#"+k).append(_html);
				}
			});
		}
	}

//数据加载(main2_5)
function con(i){
	$.get("content/list/list"+(i+3)+".json",function(data){
		var _html = "";
		for(var i=0;i<data.length;i++){
			_html += "<dl class=\"main25_dl\"><dt><a href=\"#\"><img src=\""+data[i]["img"]+"\" alt=\"\"></a></dt><dd><p>"+data[i]["name"]+"</p><p>"+data[i]["eng"]+"</p><h4>明星单品 热销特惠</h4><h5>"+data[i]["money"]+"</h5><h6>加入购物车</h6><h3><span>"+data[i]["ping1"]+"<br>好评论</span><span>"+data[i]["ping2"]+"<br> 评论</span><span>"+data[i]["ping3"]+"<br> 售出</span></h3></dd></dl>" 
		}
		$(".main2_5").html(_html);
	},"json");
}
//*********************************分页******************************//
	var len =  $(".fenye p span");
	for(var i=0;i<len.length;i++){
		len[i].index = i;
		len[i].onclick = function(){
			for(var i=0;i<len.length;i++){
				len[i].className = "";
			}
			this.className = "active";
			console.log(this.index);
			con(this.index);
		}
		
	}




}
