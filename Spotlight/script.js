$(function(){
$(".welcome span").on("mouseover", function () {
	var t = this;
	$(t).addClass("highlighted"), setTimeout(function () {
	    $(t).removeClass("highlighted")
	}, 2e3)
	})
})
