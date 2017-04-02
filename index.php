<!DOCTYPE html>
<html>
	<head>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
		<script type="text/javascript" src="main.js"></script>
		<title>Chrome Says</title>
		<style>
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
