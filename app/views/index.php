<?php include dirname( __FILE__ ) . "/../partials/header.php" ?>

	<section class="products">
		<?php foreach ($products as $product): ?>
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