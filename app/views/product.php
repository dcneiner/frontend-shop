<?php 

	if ( is_xhr() || isset( $_GET[ 'callback' ] ) && trim( $_GET[ 'callback' ] ) !== "" ) {
		if ( is_xhr() ) {
			header( "Content-type: text/json" );
			echo json_encode( $product );
		} else {
			$callback = preg_replace( '|[^a-z0-9-_$]|i', '', $_GET[ 'callback' ] );
			header( "Content-type: text/javascript" );
			echo $callback . "(" . json_encode( $product ) . ");";
		}

		exit;
	}

?>

<?php include dirname( __FILE__ ) . "/../partials/header.php" ?>

	<article class="product-details">
		<div class="primary-visuals">
			<img src="/products/<?= $product[ 'photos' ][0][ 'filename' ] ?>" width="800" height="533" class="product-thumbnail">
		</div>
		<div class="primary-details">
			<h2><?= $product[ 'name' ] ?></h2>
			<div class="description">
				<?= $product[ 'description' ] ?>
			</div>

			<div class="price-colors">
				<h3>Price</h3>
				<p class="price">$<?= $product[ 'price' ] ?> <?= $product[ 'currency' ] ?></p>

				<h3>Color Choices</h3>
				<ul class="color-choices">
					<li title="Blue" style=""></li>
				</ul>
			</div>
		</div>
	</article>

<?php include dirname( __FILE__ ) . "/../partials/footer.php" ?>