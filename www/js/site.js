(function ( $ ) {

var app = window.app = {};

var $doc = $( document );
var $body = $( document.body );

$doc.on( "submit", function ( e ) {
	e.preventDefault();
});

$doc.on( "click", ".visual-select li", function () {
	var $el   = $( this ),
		index = $el.index(),
		select;

	$el.siblings().removeClass( "current" );
	$el.addClass( "current" );
	select = $el.closest( ".visual-select" ).prev()[0];
	select.selectedIndex = index;
});

$doc.on( "click", ".quick-view-overlay, .quick-view-close", function ( e ) {
	$body.removeClass( "show-quick-view" );
	e.preventDefault();
});

var _quickViewTemplate;
var quickViewTemplate = function () {
	if ( !_quickViewTemplate ) {
		_quickViewTemplate = $.Deferred( function ( d ) {
			$.get(
				"/templates/quick-view.tmpl.html" 
			).then( function ( template ) {
			 	d.resolve( _.template( template ) );
			}, d.reject );
		}).promise();
	}

	return _quickViewTemplate;
};

var friendlyJSON = function ( path ) {
	return $.Deferred( function ( d ) {
		$.getJSON( path ).then( function ( data ) {
			d.resolve( data );
		}, d.reject );
	}).promise();
};

var overlaySetup = false;
var $quickView;

$doc.on( "click", ".product a", function ( e ) {

	$body.addClass( "quick-view-loading" );
	var href = $( e.currentTarget ).attr( "href" );

	$.when(
		quickViewTemplate(), 
		friendlyJSON( href )
	).then( function ( template, json ) {
		if ( $quickView ) $quickView.remove();

		$quickView = $( "<div>", {
			"class": "quick-view product-details",
			html: template( { product: json } )
		}).appendTo( $body );

		setTimeout( function () {
			$body.removeClass( "quick-view-loading" );
			$body.addClass( "show-quick-view" );
		}, 100 );
	});
	e.preventDefault();
});


}( jQuery ));