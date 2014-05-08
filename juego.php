<?php 
	require_once("inc/includes.php");
	print_header();
?>
		<!-- ************************ -->
		<!--   Sección de contenido   -->
		<!-- ************************ -->


	<main>
		<div id="wrap-content">
				<section class="buscar_sec">

					<h3><i class="icon-search"></i> Búsqueda</h3>

						<form action="#" onsubmit="return realizarBusqueda(this);">
							<p><input name="checkbox_buscar_titulo" type="checkbox"><label for="input_buscar_titulo">Titulo </label><input name="input_buscar_titulo" id="input_buscar_titulo" type="text" placeholder="Quiero buscar ..."></p>
							<p><input name="checkbox_buscar_autor" type="checkbox"><label for="input_buscar_autor">Autor </label> <input id="input_buscar_autor" name="input_buscar_autor" type="text" placeholder="Autor" list="autores">
								<datalist id="autores">
							</p>
							<p><input name="checkbox_buscar_anyo" type="checkbox"><label for="input_buscar_anyo">Año </label><input name="input_buscar_anyo" id="input_buscar_anyo" type="number" placeholder="ej. 1995" max="2100" min="1990"></p>
							<p><input name="checkbox_buscar_formato" type="checkbox"><label for="input_buscar_formato">Formato </label> <input id="input_buscar_formato" name="input_buscar_formato" type="text" placeholder="Formatos" list="formatos">
								<datalist id="formatos">
							</p>			
							<p><input type="submit" value="Buscar"></p>
						</form>					

				</section>
					
				<hr >

				<section class="libro-sec">
					<h3><i class="icon-books"></i> Resultados</h3> 
					<div>
						<p>
								Ordenar por 
							<select id="ordenarPor" onchange="ordenar();">
								<option value="3" selected>Titulo</option>
								<option value="1">Autor</option>
								<option value="2">Año</option>
							</select>
						</p>
						<p>
								Orden 
							<select id ="ordenPor" onchange="ordenar();">
								<option value="1" selected>Ascendente</option>
								<option value="2" >Descendente</option>
							</select>
						</p>
					</div>

					<section>
						
					</section>
				</section>

			</div>
		</main>

		<script>
			rellenarAutores();
			rellenarFormatos();
			validacionPersonalizada();
		</script>

<?php
	print_footer();
