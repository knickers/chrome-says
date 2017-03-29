jQuery(function($) {
	var set = function(x, y) {
		$('#chrome').css('background-position', x+'px '+y+'px');
	};
	$('.red')
		.mouseenter(function() { set(-1280,   0); })
		.mousedown( function() { set(-1280,-610); });
	$('.blue')
		.mouseenter(function() { set(-2560,   0); })
		.mousedown( function() { set(-2560,-610); });
	$('.green')
		.mouseenter(function() { set(-640 ,   0); })
		.mousedown( function() { set(-640 ,-610); });
	$('.yellow')
		.mouseenter(function() { set(-1920,   0); })
		.mousedown( function() { set(-1920,-610); });
	$('#sensors li')
		.mouseleave(function() { set(0, 0); })
		.mouseup(function() { $(this).mouseenter(); });
	
	var green = $('.green.n1'),
		red = $('.red.n1'),
		yellow = $('.yellow.n1'),
		next = 'green',
		speed = 1000/3;
	
	var spin = function() {
		if (next == 'green') {
			next = 'red';
			green.mouseenter();
			yellow.mouseleave();
		} else if (next == 'red') {
			next = 'yellow';
			red.mouseenter();
			green.mouseleave();
		} else if (next == 'yellow') {
			next = 'green';
			yellow.mouseenter();
			red.mouseleave();
		}
	};

	var spinning;
	$('#spin').click(function() {
		var self = $(this);
		if (self.hasClass('active')) {
			self.removeClass('active');
			clearInterval(spinning);
			set(0, 0);
		} else {
			self.addClass('active');
			spin();
			spinning = setInterval(spin, speed);
		}
	});

	var on = true;
	var flash = function() {
		set(0, on ? -610 : 0);
		on != on;
	};

	var flashing;
	$('#flash').click(function() {
		var self = $(this);
		if (self.hasClass('active')) {
			self.removeClass('active');
			clearInterval(flashing);
			set(0, 0);
		} else {
			self.addClass('active');
			flash();
			flashing = setInterval(flash, speed);
		}
	});
});
