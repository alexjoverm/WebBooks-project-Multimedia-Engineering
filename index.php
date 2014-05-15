<?php 
	require_once("inc/includes.php");
	print_header();
?>
		<!-- ************************ -->
		<!--   Sección de contenido   -->
		<!-- ************************ -->

		<main>
			<div>
				<section id="login">
					<div>
						<h3>¡Juega!</h3>
						<form action="juego.php" method="post" onsubmit="return HacerLogin(this);">
							<label for="user">Usuario:</label>
							<input id="user" name="user" type="text" placeholder="Usuario..." required>
							<label for="pass">Contraseña:</label>
							<input id="pass" name="pass" type="password" placeholder="Contraseña..." required>
							<input type="submit" value="Entrar">
						</form>
					</div>
				</section>


				<section id="puntuaciones">
					<div>
						<h3>Ultimas puntuaciones</h3>
						<ul>
							
						</ul>
					</div>
				</section>
			</div>
		</main>
	<script>
		PedirPuntuaciones();
	</script>


<?php
	print_footer();
?>

	