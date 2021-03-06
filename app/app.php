<?php 
	// Change this if you want the other theme :)
	$ios = true;

	// Get original "Masked" path
	$path = $_SERVER[ 'REQUEST_URI' ];
	$path = explode( "?", $path );
	$path = substr($path[0], 1);

	// Load and prepare the products
	$products = file_get_contents( dirname( dirname( __FILE__ ) ) . "/data/products.json" );
	$products = json_decode( $products, true );
	$product_hash = array();

	foreach ($products as $product) {
		$product_hash[ $product[ 'slug' ] ] = $product;
	}


	// Really simple routing
	if ( $path == "" || $path === "index.php" ) {
		// Home Route
		include dirname( __FILE__ ) . "/views/index.php";
	} else {
		$path = explode( "/", $path );

		// Try to match a product
		if ( count( $path ) >= 2 && $path[ 0 ] === "product" && isset( $product_hash[ strtolower( $path[ 1 ] ) ] ) ) {
			// Look up product
			$product = $product_hash[ strtolower( $path[ 1 ] ) ];
			
			include dirname( __FILE__ ) . "/views/product.php";
			exit;
		}
		
		header("HTTP/1.0 404 Not Found");
		echo "Page Not Found";
	}