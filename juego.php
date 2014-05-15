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
				<div><i class="btn-blanco">Play</i><i class="btn-blanco">Pause</i></div>
				<div><p>Lineas: 0</p><p><i class="icon-clock"> </i> 0:00</p></div>
			</section>
		</div>
	</main>

	<script>
		LoadSidebar();
	</script>
<?php
	print_footer();
?>