<?php

function print_header(){
	echo <<<heredoc
<!DOCTYPE html>
<html>
	<head>
		<title>
			Tetris
		</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Encuentra tu libro favorito">

		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/style-fonts.css">
		
		
	</head>

	<body>

		<!-- *********************** -->
		<!--   Sección de cabecera   -->
		<!-- *********************** -->

		<header>
			<div>
				<h1>Tetris</h1>
			</div>
		</header>
heredoc;
}




function print_footer(){

echo <<<heredoc
		<!-- **************************** -->
		<!--   Sección de pie de página   -->
		<!-- **************************** -->

		<footer>

			<div id="footer-int">
				<h4>Sobre Nosotros</h4>
				<hr>
				<div class="linea">
					<article>
						<img src="img/alex_s.jpg" alt="Alex Jover Morales">
						<h5>Alex Jover Morales</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						 Error accusamus quod earum aspernatur soluta tenetur 
						 facilis ipsam delectus optio amet!</p>
					</article>
					
					<article>
						<img src="img/jmsm_s.jpg" alt="Jose Manuel Serrano">
						<h5>Jose Manuel Serrano</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
						 Optio consectetur quibusdam quae sunt facilis eligendi accusantium 
						 voluptate nihil facere.</p>
					</article>
				</div>

				<a href="acerca.php"><i class="icon-users"></i> Acerca de</a>
			</div>

			<div id="copy">
				<p>Alejandro Jover & Jose Manuel Serrano Martínez. &copy;2014 </p>
			</div>

		</footer>


		<script src="js/principal.js"></script>
	</body>

</html>
heredoc;
}

?>