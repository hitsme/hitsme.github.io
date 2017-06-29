/*!
 * 
 * author: xx
 */

(function(win, $) {
    //tab切换
    
$(".tabsqh").children().eq(0).show().siblings().hide();
$("#tabs").children().click(function(event) {
	var num=$("#tabs").children().index($(this));
	$(".tabsqh").children().eq(num).show().siblings().hide();
});



$.ajax({
	url: '../project/test/data.json',
	type: 'GET',
	dataType: 'json',
	//data: data,
})
.done(function(data) {
	

console.log(data);
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});



}(this, jQuery));