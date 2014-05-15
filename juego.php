<?php
	require_once("inc/includes.php");
	print_header();
?>
	<script>
		if(!ComprobarLogin())
			location.href = "index.php";
	</script>

		<!-- ************************ -->
		<!--   Sección de contenido   -->
		<!-- ************************ -->

	<main>
		<div>
			<section id="juego">
				<canvas width="300" height="450"></canvas>		
			</section>


			<section id="sidebar">
				<div><h5></h5><span class="btn-rojo">Logout</span></div>
				<div><h5>Nivel</h5><span class="btn-azul">1</span>
					<span class="btn-azul">2</span>
					<span class="btn-azul">3</span>
					<span class="btn-azul">4</span>
					<span class="btn-azul">5</span></div>
				<div><img onclick="Play(this);" src="img/btn-play.png" height="35" width="35">
					<img onclick="Stop(this);" src="img/btn-stop.png" height="35" width="35" style="display:none;">
					<img onclick="Pausa(this);" src="img/btn-pause.png" class="btn-inactive" height="35" width="35"></div>
				<div><p>Lineas: 0</p><p><i class="icon-clock"> </i> 0:00</p></div>
			</section>
		</div>
	</main>

	<script>
		LoadSidebar();
		SetPunt(40, 428);
	</script>
<?php
	print_footer();
?>