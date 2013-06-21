(function ( $, app ) {

var $doc = $( document );
var $body = $( document.body );

var _template = $.Deferred( function ( d ) {
	$.get(
		"/templates/quick-view.tmpl.html" 
	).then( function ( data ) {
		d.resolve( _.template( data ) );
	}, d.reject );
}).promise();

$doc.on( "click", ".quick-view-overlay, .quick-view-close", function ( e ) {
	$body.removeClass( "show-quick-view" );
	e.preventDefault();
});

var QuickView = function ( data ) {
	this.initialize( data );
};

$.extend( QuickView.prototype, {
	initialize: function ( data ) {
		this.data = data;
		this.$el = $( "<div>", {
			"class": "quick-view product-details"
		});
		this.render();
	},
	render: function () {
		var $el = this.$el;
		var data = this.data;

		_template.then( function ( template ) {
			$el.html( template( { product: data } ) );
			$el.appendTo( $body );

			setTimeout( function () {
				$body.removeClass( "quick-view-loading" );
				$body.addClass( "show-quick-view" );
			}, 100 );
		});
	},
	destroy: function () {
		if ( this.$el ) {
			this.$el.remove();
		}
	}
});

app.QuickView = QuickView;


}( jQuery, window.app ));