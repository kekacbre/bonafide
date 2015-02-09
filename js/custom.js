document.createElement('header');
document.createElement('nav');
document.createElement('menu');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');

//$(document).ready(function() {
//
//	$('.cl1').waypoint(function() {$('.cl1').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.cl2').waypoint(function() {$('.cl2').addClass('animated fadeInUp');}, {offset: '55%'});
//	$('.cl3').waypoint(function() {$('.cl3').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.cl4').waypoint(function() {$('.cl4').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.cl5').waypoint(function() {$('.cl5').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.cl6').waypoint(function() {$('.cl6').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.cl7').waypoint(function() {$('.cl7').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.cl8').waypoint(function() {$('.cl8').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.cl9').waypoint(function() {$('.cl9').addClass('animated fadeInUp');}, {offset: '75%'});
//	$('.pest').waypoint(function() {$('.pest').addClass('animated fadeIn');}, {offset: '75%'});
//	$('.b2b').waypoint(function() {$('.b2b').addClass('animated fadeIn');}, {offset: '95%'});
//	$('.des1').waypoint(function() {$('.des1').addClass('animated fadeInLong');}, {offset: '75%'});
//	$('.des2').waypoint(function() {$('.des2').addClass('animated fadeInLong');}, {offset: '75%'});
//	$('.des3').waypoint(function() {$('.des3').addClass('animated fadeInLong');}, {offset: '75%'});
//	$('.des4').waypoint(function() {$('.des4').addClass('animated fadeInLong');}, {offset: '75%'});
//	$('.p1').waypoint(function() {$('.p1').addClass('animated fadeInDownBig');}, {offset: '75%'});
//	$('.p2').waypoint(function() {$('.p2').addClass('animated fadeInDownBig');}, {offset: '75%'});
//	$('.p3').waypoint(function() {$('.p3').addClass('animated fadeInDownBig');}, {offset: '75%'});
//
//
//	$('.wp0').waypoint(function() {
//		$('.wp0').addClass('animated fadeInDown');
//	}, {
//		offset: '80%'
//	});
//	$('.box1').waypoint(function() {
//		$('.box1').addClass('animated fadeInUp');
//	}, {
//		offset: '75%'
//	});
//	$('.box2').waypoint(function() {
//		$('.box2').addClass('animated fadeInUp');
//	}, {
//		offset: '75%'
//	});
//	$('.footer').waypoint(function() {
//		$('.footer').addClass('animated fadeInUp');
//	}, {
//		offset: '95%'
//	});
//	$('#shop-index').waypoint(function() {
//		$('#shop-index').addClass('animated fadeInLeft');
//	}, {
//		offset: '75%'
//	});
//	$('#comment1-title').waypoint(function() {
//		$('#comment1-title').addClass('animated fadeInUp');
//	}, {
//		offset: '80%'
//	});
//	$('.wp4').waypoint(function() {
//		$('.wp4').addClass('animated fadeInDown');
//	}, {
//		offset: '75%'
//	});
//	$('.wp5').waypoint(function() {
//		$('.wp5').addClass('animated fadeInUp');
//	}, {
//		offset: '75%'
//	});
//	$('.wp6').waypoint(function() {
//		$('.wp6').addClass('animated fadeInDown');
//	}, {
//		offset: '75%'
//	});
//
//
//	
//});


// textarea count characters
function countChar(val) {
	var len = val.value.length;
	if (len >= 401) {
	  val.value = val.value.substring(0, 400);
	} else {
	  $('#charNum').text(400 - len + " characters left.");
	}
};

// scroll to top
$(document).ready(function(){ 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.gore1').fadeIn();
		} else {
			$('.gore1').fadeOut();
		}
	}); 
	
	$('.gore1').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

// smooth scroling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-83
        }, 1000);
        return false;
      }
    }
  });
});

// mobile menu
$('#menu-button').click(function() {
	$('.overlay').toggleClass('visina');
	$('#menu-button').toggleClass('top');
});

// search
$('.search-button').click(function(e) {
	e.stopPropagation();
	$('#search').toggleClass('show-search');
	$('.search-polje').focus();
});
$('html').click(function() {
	$('#search').removeClass('show-search');
});
$('#search').click(function(e) {
	e.stopPropagation();
	$('#search').addClass('show-search');
});


$('#log-overlay, .close').click(function(){
	$('#log-overlay').fadeOut();
	$('#reg-box').fadeOut();
	$('#login-box').fadeOut();
	$('#forgot-box').fadeOut();
	$('#myacc-box').fadeOut();
	$('#basket-popup').fadeOut();
});
$('.reg-form').click(function(){
	$('#log-overlay').fadeIn();
	$('#reg-box').fadeIn();
	$('#login-box').fadeOut();
	$('#forgot-box').fadeOut();
	$('#myacc-box').fadeOut();
});
$('.login-form').click(function(){
	$('#log-overlay').fadeIn();
	$('#reg-box').fadeOut();
	$('#login-box').fadeIn();
	$('#forgot-box').fadeOut();
	$('#myacc-box').fadeOut();
});
$('.forgot-form').click(function(){
	$('#log-overlay').fadeIn();
	$('#reg-box').fadeOut();
	$('#login-box').fadeOut();
	$('#forgot-box').fadeIn();
	$('#myacc-box').fadeOut();
});
$('.myacc-form').click(function(){
	$('#log-overlay').fadeIn();
	$('#reg-box').fadeOut();
	$('#login-box').fadeOut();
	$('#forgot-box').fadeOut();
	$('#myacc-box').fadeIn();
});
$('.modal').click(function(){
	$('.modal-overlay').fadeIn();
	$('.modal-box').fadeOut();
});
	$('#basket-popup').fadeOut();

$('.basket-button').click(function(){
	$('#log-overlay').fadeIn();
	$('#reg-box').fadeOut();
	$('#login-box').fadeOut();
	$('#forgot-box').fadeOut();
	$('#myacc-box').fadeOut();
	$('#basket-popup').fadeIn();
});


});