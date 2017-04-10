<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
		<script type="text/javascript" src="main.js"></script>
		<title>Chrome Says</title>
		<style>
			* { box-sizing: border-box; }
			body { margin: 0; padding: 0; }
			#buttons {
				position: absolute;
			}
			.active {
				opacity: 0.6;
			}
			#chrome_logo {
				width: 100%;
				max-width: 100%;
				max-height: 100%;
				width: 450px;
				height: 450px
			}
		</style>
	</head>
	<body>
		<div id="buttons">
			<button id="spin">Spin</button>
			<button id="flash">Flash</button>
		</div>
		<?= file_get_contents('images/logo.svg') ?>
	</body>
</html>
