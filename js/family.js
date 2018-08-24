/*
* @Author: admin
* @Date:   2018-06-27 13:49:51
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-28 21:57:24
*/

$(function(){
			$('.main_ul li span').click(function() {
				$(this).toggleClass('like');
			});
			$('#btn').click(function(event) {
				$('#more').removeClass('m_hide');
			});
			$('#up').click(function(event) {
				$('#more').addClass('m_hide');
			});
			$('#btn1').click(function(event) {
				$('#more1').removeClass('m_hide');
			});
			$('#up1').click(function(event) {
				$('#more1').addClass('m_hide');
			});
			$('#btn2').click(function(event) {
				$('#more2').removeClass('m_hide');
			});
			$('#up2').click(function(event) {
				$('#more2').addClass('m_hide');
			});
			$('#btn3').click(function(event) {
				$('#more3').removeClass('m_hide');
			});
			$('#up3').click(function(event) {
				$('#more3').addClass('m_hide');
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
			$('#btn6').click(function(event) {
				$('#more6').removeClass('m_hide');
			});
			$('#up6').click(function(event) {
				$('#more6').addClass('m_hide');
			});
			$('#btn7').click(function(event) {
			$('#more7').removeClass('m_hide');
			});
			$('#up7').click(function(event) {
				$('#more7').addClass('m_hide');
			});
			$('#btn8').click(function(event) {
			$('#more8').removeClass('m_hide');
			});
			$('#up8').click(function(event) {
				$('#more8').addClass('m_hide');
			});

		$(window).scroll(function(event) {
			
			if($(window).scrollTop()>150){
				$('.move').addClass('fixed_nav');
			}else{
				$('.move').removeClass('fixed_nav');
			}

			if($(window).scrollTop()>$('._main').eq(7).offset().top){
				$('.holder ul').children().eq(7).addClass('font');
				$('.holder ul').children().eq(7).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('._main').eq(6).offset().top){
				$('.holder ul').children().eq(6).addClass('font');
				$('.holder ul').children().eq(6).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('._main').eq(5).offset().top){
				$('.holder ul').children().eq(5).addClass('font');
				$('.holder ul').children().eq(5).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('._main').eq(4).offset().top){
				$('.holder ul').children().eq(4).addClass('font');
				$('.holder ul').children().eq(4).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('._main').eq(3).offset().top){
				$('.holder ul').children().eq(3).addClass('font');
				$('.holder ul').children().eq(3).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('._main').eq(2).offset().top){
				$('.holder ul').children().eq(2).addClass('font');
				$('.holder ul').children().eq(2).siblings().removeClass('font');
			}else if($(window).scrollTop()>$('._main').eq(1).offset().top){
				$('.holder ul').children().eq(1).addClass('font');
				$('.holder ul').children().eq(1).siblings().removeClass('font');
			}else{
				$('.holder ul').children().eq(0).addClass('font');
				$('.holder ul').children().eq(0).siblings().removeClass('font');
			}
			// console.log($('._main').eq(2).offset().top);
		});
})