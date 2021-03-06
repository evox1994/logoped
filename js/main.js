$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	function animImg(){
		if ($('.anim-images').find('img').length > 1){
			setInterval(function(){
				var el = $('.anim-images').find('img.active');
				var next_el = el.next();
				if (next_el.length === 0){
					next_el = el.parents('.anim-images').find('img:first-child');
				}
				el.removeClass('active');
				setTimeout(function(){next_el.addClass('active');},500);
			},5000);
		}
	}
	animImg();

	function inputId(){
		var i = 0;
		$('.b-input').each(function(){
			i++;
			$(this).find('label').attr('for','inp-'+i);
			if ( $(this).find('input').length ){
				$(this).find('input').attr('id','inp-'+i);
			} else {
				$(this).find('textarea').attr('id','inp-'+i);
			}
		});
	}
	inputId();

	$('.b-select select').chosen({
		disable_search: true
	});

	$('.personal-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.gal-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$(document).on('click','.filter-gal li',function(){
		var el = $(this).attr('data-filter');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.filter-gal').find('li').removeClass('active');
			$(this).parents('.ekr').find('.galleries-item').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
		}
	});

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top;

		$('body,html').animate({scrollTop: des},800);
		return false;
	});

	function burgerScroll(){
		var st = $(window).scrollTop();
		var hh = $('.header').outerHeight();

		if ( $(window).width() > 1024 ){
			$('.header-scroll').removeClass('active');
		} else {
			if ( st > hh ){
				$('.header-scroll').addClass('active');
			} else {
				$('.header-scroll').removeClass('active');
			}
		}
	}
	burgerScroll();

	function scrollBanner(){
		if ( $('.scroll-banner').length ){
			if ( $(window).width() > 768 ) {
				var vg = $('.scroll-wrap').offset().top - 60;
				var ng = vg + $('.scroll-wrap').outerHeight() - $('.scroll-banner').outerHeight();
				var st = $(window).scrollTop();
				$('.scroll-wrap').css('min-height',$('.scroll-banner').outerHeight());

				if ( st > vg ) {
					if ( st > ng ) {
						$('.scroll-banner').removeClass('scroll');
						$('.scroll-banner').addClass('bottom');
					} else {
						$('.scroll-banner').addClass('scroll');
						$('.scroll-banner').removeClass('bottom');
					}
				} else {
					$('.scroll-banner').removeClass('scroll');
					$('.scroll-banner').removeClass('bottom');
				}
			} else {
				$('.scroll-banner').removeClass('scroll');
				$('.scroll-banner').removeClass('bottom');
				$('.scroll-wrap').removeAttr('style');
			}
		}
	}
	scrollBanner();

	$(window).on('scroll',function(){
		burgerScroll();
		scrollBanner();
	});

	$(window).resize(function(){
		burgerScroll();
		scrollBanner();
	});

});