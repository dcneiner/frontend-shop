(function ( $ ) {

var app = window.app = {};

var $doc  = $( document );
var $body = $( document.body );

var quickViewScript = (function () {
	// This Immediately Invoking Function Expression (IFFE)
	// provides a closure for this private variable where
	// we store our deferred.
	var _quickViewScript;

	// This after this executes, "quickViewScript" will
	// be set to this function:
	return function () {
		if ( !_quickViewScript ) {
			_quickViewScript = $.Deferred( function ( d ) {
				$.getScript(
					"/js/quick-view.js" 
				).then( function () {
					d.resolve( app.QuickView );	
				}, d.reject );
			});
		}

		return _quickViewScript;
	};
}());

var quickView;

$doc.on( "click", ".product a", function ( e ) {
	$body.addClass( "quick-view-loading" );
	var href = $( this ).attr( "href" );

	$.when( 
		quickViewScript(),
		$.getJSON( href )
	).then( function ( script, data ) {
		// Clean up the previous one, if it exists
		if ( quickView ) quickView.destroy();
		
		// Create the new object
		quickView = new app.QuickView( data[ 0 ] );
	});

	e.preventDefault();
});

/* This is a demo, without any support for the cart button
   this keeps the forms from submitting */
$doc.on( "submit", function ( e ) {
	e.preventDefault();
});

/* This part of the script was not covered in the talk,
   its only purpose was to keep the visual color selector
   in sync with the select box */
$doc.on( "click", ".visual-select li", function () {
	var $el   = $( this ),
		index = $el.index(),
		select;

	$el.siblings().removeClass( "current" );
	$el.addClass( "current" );
	select = $el.closest( ".visual-select" ).prev()[0];
	select.selectedIndex = index;
});

}( jQuery ));