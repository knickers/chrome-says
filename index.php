<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="sensors.css">
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
		<script type="text/javascript" src="main.js"></script>
		<title>Chrome Says</title>
		<style>
			.button {
				width: 50px;
				height: 30px;
				cursor: pointer;
				border: 1px solid black;
				text-align: center;
				padding-top: 10px;
				border-radius: 10px;
				margin-bottom: 8px;
				background-color: #3cc;
			}
			.button:hover {
				background-color: #5dd;
			}
			.active {
				background-color: #ff6
			}
			.active:hover {
				background-color: #ff0;
			}
			#chrome {
				position: relative;
			}
			#chrome > svg {
				position: absolute;
				width: 100%;
				height: 100%;
			}
		</style>
	</head>
	<body>
		<div class="button" id="spin">Spin</div>
		<div class="button" id="flash">Flash</div>
		<div id="chrome">
			<?php include 'images/drawing.svg" ?>
			<!--
			<img src="images/drawing.svg?d">
			<ul id="sensors">
				<li class="green n1"><a></a></li>
				<li class="green n2"><a></a></li>
				<li class="green n3"><a></a></li>
				<li class="green n4"><a></a></li>
				<li class="green n5"><a></a></li>
				<li class="green n6"><a></a></li>
				<li class="green n7"><a></a></li>
				<li class="green n8"><a></a></li>
				<li class="green n9"><a></a></li>
				<li class="red n1"><a></a></li>
				<li class="red n2"><a></a></li>
				<li class="red n3"><a></a></li>
				<li class="red n4"><a></a></li>
				<li class="yellow n1"><a></a></li>
				<li class="yellow n2"><a></a></li>
				<li class="yellow n3"><a></a></li>
				<li class="yellow n4"><a></a></li>
				<li class="yellow n5"><a></a></li>
				<li class="yellow n6"><a></a></li>
				<li class="yellow n7"><a></a></li>
				<li class="yellow n8"><a></a></li>
				<li class="blue n1"><a></a></li>
				<li class="blue n2"><a></a></li>
				<li class="blue n3"><a></a></li>
			</ul>
			-->
		</div>
	</body>
</html>