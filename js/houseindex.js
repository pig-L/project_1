/*
* @Author: Administrator
* @Date:   2018-06-28 22:18:42
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-30 14:40:50
*/

$(function(){
	var num=0;
	var timer;
	function gogo(){
		timer=setInterval(function(){
		num++;
		if(num>4){
			num=0;
		}
		$('.b_l li').eq(num).css('z-index', '2');
		$('.b_l li').eq(num).fadeIn();
		$('.b_l li').eq(num).siblings().css('z-index', '0');
		$('.b_l li').eq(num).siblings().fadeOut();
		$('.banner ol li').eq(num).addClass('current');
		$('.banner ol li').eq(num).siblings().removeClass('current');
	},10000)
	}
	gogo();
	$('.banner ol li').click(function(event) {
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
		$('.b_l li').eq($(this).index()).css('z-index', '2');
		$('.b_l li').eq($(this).index()).fadeIn();
		$('.b_l li').eq($(this).index()).siblings().css('z-index', '0');
		$('.b_l li').eq($(this).index()).siblings().fadeOut();
	});

	$('header .right').click(function(event) {
			num++;
			if(num>4){
				num=4;
			}
			$('.b_l li').eq(num).css('z-index', '2');
			$('.b_l li').eq(num).fadeIn();
			$('.b_l li').eq(num).siblings().css('z-index', '0');
			$('.b_l li').eq(num).siblings().fadeOut();
			$('.banner ol li').eq(num).addClass('current');
			$('.banner ol li').eq(num).siblings().removeClass('current')
	});
	$('header .left').click(function(event) {
		num--;
		if(num<0){
			num=0;
		}
		$('.b_l li').eq(num).css('z-index', '2');
		$('.b_l li').eq(num).fadeIn();
		$('.b_l li').eq(num).siblings().css('z-index', '0');
		$('.b_l li').eq(num).siblings().fadeOut();
		$('.banner ol li').eq(num).addClass('current');
		$('.banner ol li').eq(num).siblings().removeClass('current')
	});

	$('.nav_one ol li').click(function(event) {
		$(this).addClass('olbg');
		$(this).siblings().removeClass('olbg');
		$('.nav_one div').eq($(this).index()).addClass('show_down');
		$('.nav_one div').eq($(this).index()).siblings('div').removeClass('show_down');
	});

	$('nav ul').children('li').eq(0).click(function(event) {
		$('.nav_one').addClass('show_down');
		return false;
	});	
	$('.nav_one').click(function(event) {
		return false;
	});
	$('.nav_four').click(function(event) {
		return false;
	});

	$('nav ul').children('li').eq(3).click(function(event) {
		$('.nav_four').addClass('show_down');
		return false;
	});
	$(document).click(function(event) {
		$('.nav_one').removeClass('show_down');
		$('.nav_four').removeClass('show_down');
	});

	$('.nav_one ul li a').click(function(event) {
		$('#ipt').val($(this).html());
	});
	$('.nav_four ul li a').click(function(event) {
		$('#ipt2').val($(this).html());
	});
})
	