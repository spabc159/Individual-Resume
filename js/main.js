$(document).ready(function() {
	var x=10;
	var y=20;//设置定位
	$("a.tooltip-list").mouseover(function(e) {
		/* Act on the event */
		this.myTitle = this.title;
		this.title = "";
		//创建div元素
		var tooltip = "<div id='tooltip'><img src='"+this.href+"' alt='你在干什么'/></div>";
		// 插入文档中
		$("body .touxiang").append(tooltip);
		$("#tooltip")
			.css({
			"top":(e.pageY+y)+"px",//e.pageX相对与文档，e.clientX相对于可视区
			"left":(e.pageX+x)+"px",
			"position": "fixed"
		}).show("fast");
		}).mouseout(function(e) {
			/* Act on the event */
			this.title = this.myTitle;
			$("#tooltip").remove();
		}).mousemove(function(e) {
			/* Act on the event */
			$("#tooltip")
			.css({
			"left":(e.pageX+x)+"px",
			"top":(e.pageY+y)+"px",
			"position": "fixed"
		});
	});
});

$(document).ready(function() {
	myFocus.set({
	id:'picBox',//焦点图盒子ID
	pattern:'mF_taobaomall',//风格应用的名称
	time:7,//切换时间间隔(秒)
	trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
	width:360,//设置图片区域宽度(像素)
	height:240,//设置图片区域高度(像素)
	txtHeight:'default'//文字层高度设置(像素),'default'为默认高度，0为隐藏
});
})


