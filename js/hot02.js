/*
* @Author: admin
* @Date:   2018-06-27 15:52:49
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-28 21:37:39
*/
$(function(){
	$(window).scroll(function(event) {
		if($(window).scrollTop()>150){
			$('.h_nav .move').addClass('nav_top');
		}else{
			$('.h_nav .move').removeClass('nav_top');
		}
		 if($(window).scrollTop()>$('.on').eq(5).offset().top-370){
				$('.h_nav ul').children().eq(5).addClass('font');
				$('.h_nav ul').children().eq(5).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('.on').eq(4).offset().top-370){
				$('.h_nav ul').children().eq(4).addClass('font');
				$('.h_nav ul').children().eq(4).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('.on').eq(3).offset().top-370){
				$('.h_nav ul').children().eq(3).addClass('font');
				$('.h_nav ul').children().eq(3).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('.on').eq(2).offset().top-370){
				$('.h_nav ul').children().eq(2).addClass('font');
				$('.h_nav ul').children().eq(2).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('.on').eq(1).offset().top-370){
				$('.h_nav ul').children().eq(1).addClass('font');
				$('.h_nav ul').children().eq(1).siblings().removeClass('font');
			}else{
				$('.h_nav ul').children().eq(0).addClass('font');
				$('.h_nav ul').children().eq(0).siblings().removeClass('font');
			}
	});
			
})