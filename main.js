jQuery(function($) {
	var R = $('#path_red'),
		B = $('#path_blue'),
		G = $('#path_green'),
		Y = $('#path_yellow'),
		sensors = $('#svg_sensors'),
		sequence = {
			'G': 'R',
			'R': 'Y',
			'Y': 'G',
		}
		speed = 1000/3,
		spinning, next = 'G',
		flashing, on = true;
	
	var set = function(x, y) {
		sensors.css('background-position', x+'px '+y+'px');
	};
	
	R	.mouseenter(function() { set(-1280,   0); })
		.mousedown( function() { set(-1280,-610); });
	B	.mouseenter(function() { set(-2560,   0); })
		.mousedown( function() { set(-2560,-610); });
	G	.mouseenter(function() { set(-640 ,   0); })
		.mousedown( function() { set(-640 ,-610); });
	Y	.mouseenter(function() { set(-1920,   0); })
		.mousedown( function() { set(-1920,-610); });
	
	$('path, ellipse')
		.mouseleave(function() { set(0, 0); })
		.mouseup(function() { $(this).mouseenter(); });
	
	var spin = function() {
		eval(next).mouseleave();
		next = sequence[next];
		eval(next).mouseenter();
	};

	$('#spin').click(function() {
		var self = $(this);
		if (self.hasClass('active')) {
			clearInterval(spinning);
			set(0, 0);
		} else {
			spin();
			spinning = setInterval(spin, speed);
		}
		self.toggleClass('active');
	});

	var flash = function() {
		set(0, on ? -610 : 0);
		on = !on;
	};

	$('#flash').click(function() {
		var self = $(this);
		if (self.hasClass('active')) {
			clearInterval(flashing);
			set(0, 0);
		} else {
			flash();
			flashing = setInterval(flash, speed);
		}
		self.toggleClass('active');
	});
});
