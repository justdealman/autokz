$(document).ready(function() {
	var nav = $('.lb .nav > div');
	$('.lb .nav > ul > li > a').click(function () {
		nav.stop(true, true).fadeOut(250);
		nav.filter(this.hash).stop(true, true).delay(250).fadeIn(250);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('.lb .nav > div > ul > li > ul, .lb .nav > div > ul > li > ul > li > ul').hide();
	$('.lb .nav > div > ul > li.active > ul, .lb .nav > div > ul > li > ul > li.active > ul').show();
	$('.lb .nav > div > ul > li, .lb .nav > div > ul > li > ul > li').has('ul').children('a').bind('click', function() {
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent('li').children('ul').slideUp(250);
			$(this).parent('li').removeClass('active');
		}
		else {
			$(this).parent('li').children('ul').slideDown(250);
			$(this).parent('li').addClass('active');
		}
		return false;
	});
	$('.cb .introduction .production .carousel').jcarousel({
		vertical: true,
		scroll: 1,
		animation: 500,
		easing: 'easeInOutExpo'
	});
	if ( $('.slider').length > 0 ) {
		$('.cb .slider').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutExpo',
			play: 10000,
			pause: 2500
		});
		var sw = $('.cb').width()-36;
		$('.cb .slider, .cb .slider .container, .cb .slider .container > div > div, .cb .slider .container > div > div > div').width(sw);
		$('.cb .slider .container > div > div img').each(function() {
			$(this).css({
				'left': (sw-$(this).attr('width'))/2+'px'
			});
		});
	}
	var search = $('.cb .search > div > div');
	$('.cb .search > ul li a').click(function () {
		search.stop(true,true).fadeOut(250);
		search.filter(this.hash).stop(true,true).delay(250).fadeIn(250);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('div.table').each(function() {
		if ( $(this).find('div.tbody table').outerHeight() > $(this).find('div.tbody').outerHeight() ) {
			$(this).find('div.thead').css({
				'padding-right': '17px'
			});
			$(this).find('div.tbody').css({
				'overflow-y': 'scroll'
			});
		}
	});
	$('div.table .pagination select, div.table .thead select').selectbox();
	if ( $('.rb .login').length > 0 ) {
		$('.table table td.basket .add').hover(
			function() {
				$('.unlogged').css({
					'left': $(this).offset().left+'px',
					'top': $(this).offset().top+'px'
				});
				$('.unlogged').stop(true,true).delay(250).fadeIn(250);
			},
			function() {
				$('.unlogged').stop(true,true).fadeOut(250);
			}
		);
		$('.table table td.basket .add').bind('click', function() {
			return false;
		});
	}
	var bh = 0;
	$('button.ask').bind('click', function() {
		$('div.ask, .fade').stop(true,true).fadeIn(500);
		$('div.ask').css({
			'margin-left': -$('div.ask').outerWidth()/2+'px',
			'margin-top': -$('div.ask').outerHeight()/2+'px'
		});
		bh = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('div.ask button.close, .fade').bind('click', function() {
		$('div.ask, .fade').stop(true,true).fadeOut(500);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	var cb = 0;
	$('.lb, .rb').each(function() {
		var h = $(this).outerHeight(); 
		cb = h > cb ? h : cb;
	});
	$('.cb > div:first-child').css({
		'min-height': cb+94+'px'
	});
	$('.cb .news > div > div').each(function() {
		if ( $(this).find('img').length > 0 ) {
			$(this).addClass('hasimage');
		}
	});
	$('.basket .minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.basket .plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});