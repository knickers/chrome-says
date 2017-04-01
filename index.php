<!DOCTYPE html>
<html>
	<head>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
		<script type="text/javascript" src="main.js"></script>
		<title>Chrome Says</title>
		<style>
			button {
				vertical-align: top;
			}
			.active {
				opacity: 0.6;
			}
			#svg_sensors {
				width: 640px;
				height: 610px;
				background: url('images/chrome.png') 0 0;
			}
			#svg_sensors path,
			#svg_sensors ellipse {
				fill: transparent;
				stroke: transparent;
				stroke-width: 0.05px;
			}
			/*
			#svg_sensors #path_green:hover { fill: green; }
			#svg_sensors #path_red:hover { fill: red; }
			#svg_sensors #path_yellow:hover { fill: yellow; }
			#svg_sensors #path_blue:hover { fill: blue; }
			*/
		</style>
	</head>
	<body>
		<div class="button" id="spin">Spin</div>
		<div class="button" id="flash">Flash</div>
		<?= file_get_contents('images/sensors.svg') ?>
	</body>
</html>
