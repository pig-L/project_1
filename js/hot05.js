/*
* @Author: Administrator
* @Date:   2018-06-27 21:17:25
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-28 22:13:10
*/

$(function(){
	$(window).scroll(function(event) {
		if($(window).scrollTop()>472){
			$('nav').addClass('hot05_fixed');
		}else{
			$('nav').removeClass('hot05_fixed');
		}
	});
	$('.main_ul li span').click(function() {
				$(this).toggleClass('like');
	});
	$('#btn4').click(function(event) {
		$('#more4').removeClass('m_hide');
	});
	$('#up4').click(function(event) {
		$('#more4').addClass('m_hide');
	});
	$('#btn5').click(function(event) {
		$('#more5').removeClass('m_hide');
	});
	$('#up5').click(function(event) {
		$('#more5').addClass('m_hide');
	});
	
})