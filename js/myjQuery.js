/*global $ , console*/

$(document).ready(function () {
  
  'use strict';
  
  //Adjust nav 
  
  $('.links li a').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
    $('html,body').animate({
      scrollTop : $('#' + $(this).data('value')).offset().top
    }, 1000);
  });
  
  $('.down a').click(function () {
    $('html,body').animate({
      scrollTop : $('.down').offset().top
    }, 1000);
  });
  
  // Trigger bxslider
  $('header .bxslider').bxSlider({
    pager : false
  });
  
  $('.case-study .bxslider').bxSlider({
    pager : true,
    controls : false,
    auto: true,
    pause : 1500,
    autoHover : true
  });
  
  $('.slider').css("padding-top", $('header').height() / 8);
  
  
  
  $('.top img:eq(0)').css('margin-bottom', '10px');
  $('.top img:eq(1)').css('margin-bottom', '20px');
  $('.top img:eq(2)').css('margin-bottom', '20px');
  $('.top img:eq(3)').css('margin-bottom', '20px');
  
  
  // smooth scrollTop 
  
  
  
  
  // Adjust price box
  
  $('.price-box').hover(function () {
    $(this).css('cursor', 'pointer');
    $(this).addClass('hover').siblings().removeClass('hover');
    
  });
  
  $(".member-info1 span:contains('Diaa')").css('color', '#E74C3C');
  $(".member-info2 span:contains('Diaa')").css('color', '#E74C3C');
  $(".member-info3 span:contains('Diaa')").css('color', '#E74C3C');
  $(".member-info4 span:contains('Diaa')").css('color', '#E74C3C');
  $(".member-info5 span:contains('Diaa')").css('color', '#E74C3C');

  
  $(".member1").hover(function () {
    $('.member-info1').toggle(1000);
  });
    
  $(".member2").hover(function () {
    $('.member-info2').toggle(1000);
  });
    
  $(".member3").hover(function () {
    $('.member-info3').toggle(1000);
  });
    
  $(".member4").hover(function () {
    $('.member-info4').toggle(1000);
  });
    
  $(".member5").hover(function () {
    $('.member-info5').toggle(1000);
  });
  
  
  // adjust portofolio 
  
  $('.img:eq(0)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(0)').toggle(1000);
  });
  
  $('.img:eq(1)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(1)').toggle(1000);
  });
  
  $('.img:eq(2)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(2)').toggle(1000);
  });
  
  $('.img:eq(3)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(3)').toggle(1000);
  });
  
  $('.img:eq(4)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(4)').toggle(1000);
  });
  
  $('.img:eq(5)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(5)').toggle(1000);
  });
  
  $('.img:eq(6)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(6)').toggle(1000);
  });
  
  $('.img:eq(7)').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.img .work-info:eq(7)').toggle(1000);
  });
  
  $('#Container').mixItUp();
  
  // adjust go-top
  
    
  $('.go-top').click(function () {
    $("html,body").animate({scrollTop: 0}, 1100);
  });
 
 
  // loading page 
  
  $('.sk-cube-grid').fadeOut(2000, function () {
    $(this).parent().fadeOut(2000, function () {
      $('body').css('overflow', 'auto');
    });
  });
  
  var scroll =  $("html").niceScroll();


  
  
  
  
});



//