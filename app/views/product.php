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
		<form  method="POST" class="primary-details">
			<h2><?= $product[ 'name' ] ?></h2>
			<p class="price">$<?= $product[ 'price' ] ?> <span class="currency"><?= $product[ 'currency' ] ?></span></p>
			<div class="description">
				<?= isset( $product[ 'long_description' ] ) ? $product[ 'long_description' ] : $product[ 'description' ] ?>
			</div>

			<div class="settings-group price-colors">
				<h3>Color Choices</h3>
				<select class="color-choice" name="color">
					<option value="blue" selected>Blue</option>
					<option value="red">Red</option>
					<option value="orange">Orange</option>
				</select>
				<ul class="color-choices visual-select">
					<li class="current" data-value="blue" title="Blue" style="background-color: blue;"></li><li title="Red" data-value="red" style="background-color: red;"></li><li title="Orange" data-value="orange" style="background-color: orange;"></li>
				</ul>
			</div>
			<div class="settings-group">
				<h3>Size</h3>
				<select name="size" class="sizes">
					<option value="s">Adult Small</option>
					<option value="m">Adult Medium</option>
					<option value="l">Adult Large</option>
					<option value="xl">Adult XL</option>
					<option value="xxl">Adult XXL</option>
				</select>
			</div>

			<button class="add-to-cart" type="submit">Add to Cart</button>
		</form>
	</article>

	<section class="products">
	<?php foreach ($products as $index => $product): 
		if ( $index === 4 ) break;
	?>
		<article class="product">
			<a href="/product/<?= $product[ 'slug' ] ?>">
				
				<h2><?= $product[ 'name' ] ?></h2>
				
				<img src="/products/thumb-<?= $product[ 'photos' ][0][ 'filename' ] ?>" width="300" height="200" class="product-thumbnail">
				
				<span class="price">
					$<?= $product[ 'price' ] ?> <?= $product[ 'currency' ] ?>
				</span>
				
				<?= $product[ 'description' ] ?>
			</a>
		</article>
	<?php endforeach ?>
	</section>
<?php include dirname( __FILE__ ) . "/../partials/footer.php" ?>