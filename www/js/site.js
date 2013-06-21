(function ( $ ) {

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

$doc.on( "click", ".product", function ( e ) {
	$body.addClass( "show-quick-view" );
	e.preventDefault();
});


}( jQuery ));