(function( $, app ) {

var $doc = $( document );
var $body = $( document.body );

var _template;
/* This is the alternate way to to create this without an IFFE
   (As used in site.js). This exposes the variable to the rest of 
   this file, which is fine */
var template = function () {
	if ( !_template ) {
		_template = $.Deferred( function ( d ) {
			$.get( "/templates/quick-view.tmpl.html" )
			 .then( function ( data ) {
			 	// Take the returned data and compile it using
			 	// underscore's template. 
			 	data = _.template( data );

			 	// Resolve the deferred with the compiled template.
			 	d.resolve( data );
			 });
		}).promise();
	}
	return _template;
};

/* Attaches a delegated handler to handle closing the dialog */
$doc.on( "click", ".quick-view-overlay, .quick-view-close", function ( e ) {
	$body.removeClass( "show-quick-view" );
	e.preventDefault();
});

/* Our constructor */
var QuickView = function ( data ) {
	this.data = data;
	this.initialize();
}

/* This code just loops through the object and attaches the keys/values
   to the prototype of QuickView */
$.extend( QuickView.prototype, {
	initialize: function () {
		// Create our wrapper element
		this.$el = $( "<div>", {
			"class": "quick-view product-details"
		});
		this.render();
	},
	render: function () {
		var $el = this.$el;
		var data = this.data;

		// Wait for the template to load and be usable
		template().then( function ( t ) {
			// Merge the template with the data, and update
			// the element with the resulting HTML
			$el.html( t( { product: data } ) );
			$body.append( $el );

			// We wait to apply the classes to so it 
			// transitions in correctly.
			setTimeout( function () {
				$body.removeClass( "quick-view-loading" );
				$body.addClass( "show-quick-view" );
			}, 100 );
		});
	},
	destroy: function () {
		// Clean this puppy up
		this.$el.remove();
	}
});

// Expose this on our app namespace
app.QuickView = QuickView;

}( jQuery, window.app ));