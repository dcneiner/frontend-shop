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

	<div class="quick-view product-details">
		<header>
			<h2>Mug</h2>
			<p class="quick-view-price">$19.99 <span class="currency">USD</span></p>
			<a class="quick-view-close">X</a>
		</header>
		<form action="POST" class="quick-view-content">
			<div class="quick-product-image">
				<img src="/products/product-mug.jpg" width="800" height="533" class="product-thumbnail">
			</div>
			<div class="quick-product-details">
				<div class="description">
					<p>An exquisite design for a conference mug. Great gifts for friends and family alike.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
			</div>
		</form>
	</div>
	<div class="quick-view-overlay"><div class="quick-view-loader"></div></div>

<?php include dirname( __FILE__ ) . "/../partials/footer.php" ?>