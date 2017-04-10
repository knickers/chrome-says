var resizeChromeLogo = function() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	if (width < height) {
		$('#chrome_logo').css({
			'width': width+'px',
			'height': width+'px'
		});
	} else {
		$('#chrome_logo').css({
			'width': height+'px',
			'height': height+'px'
		});
	}
};

jQuery(function($) {
	resizeChromeLogo();
	
	var group_red = $('#group_red'),
		group_green = $('#group_green'),
		group_blue = $('#group_blue'),
		group_yellow = $('#group_yellow'),
		A = $('#group_red, #group_blue, #group_green, #group_yellow'),
		sequence = {
			'group_green': 'group_red',
			'group_red': 'group_yellow',
			'group_yellow': 'group_green'
		},
		states = {
			'group_red': {
				'release': {'x': 0.25, 'y': -0.75},
				'press': {'x': 0, 'y': 0},
				'light': {'x': 0, 'y': 0}
			},
			'group_green': {
				'release': {'x': -1, 'y': 0},
				'press': {'x': 0, 'y': 0},
				'light': {'x': 0, 'y': 0}
			},
			'group_blue': {
				'release': {'x': 2, 'y': 1, 'q': 1, 'w': 1},
				'press': {'x': 0, 'y': 0, 'q': 0, 'w': 0},
				'light': {'x': 0, 'y': 0, 'q': 0, 'w': 0}
			},
			'group_yellow': {
				'release': {'x': 0.5, 'y': 0.5},
				'press': {'x': 0, 'y': 0},
				'light': {'x': 0, 'y': 0}
			}
		},
		speed = 1000/3,
		spinning = 0, next = 'group_green',
		flashing = 0, on = true;
	
	var move = function(e, x, y) {
		e.attr('transform', 'translate('+x+', '+y+')');
	};
	var scale = function(e, x, y) {
		e.attr('transform', 'translate(-'+x/2+', -'+y/2+') scale(1.0'+x+', 1.0'+y+')');
	};
	
	var transform = function(id, e) {
		if ('x' in states[id][e] && 'y' in states[id][e]) {
			move(eval(id), states[id][e].x, states[id][e].y);
		}
		if ('q' in states[id][e] && 'w' in states[id][e]) {
			scale(eval(id), states[id][e].q, states[id][e].w);
		}
	};
	
	var release = function() {
		transform(this.id, 'release');
	};
	var light = function() {
		transform(this.id, 'light');
	};
	var press = function() {
		transform(this.id, 'press');
	};
	
	A.mousedown(press).mouseup(release).mouseenter(light).mouseleave(release);
	A.mouseleave();
	
	var spin = function() {
		eval(next).mouseleave();
		next = sequence[next];
		eval(next).mouseenter();
	};

	$('#spin').click(function() {
		var self = $(this);
		if (self.hasClass('active')) {
			clearInterval(spinning);
			A.mouseleave();
		} else {
			spin();
			spinning = setInterval(spin, speed);
		}
		self.toggleClass('active');
	});

	var flash = function() {
		if (on) {
			A.mouseenter();
		} else {
			A.mouseleave();
		}
		on = !on;
	};

	$('#flash').click(function() {
		var self = $(this);
		if (self.hasClass('active')) {
			clearInterval(flashing);
			A.mouseleave();
		} else {
			flash();
			flashing = setInterval(flash, speed);
		}
		self.toggleClass('active');
	});
});
