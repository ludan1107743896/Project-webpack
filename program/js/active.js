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









}