(function ( $ ) {

var $doc = $( document );

$doc.on( "click", ".visual-select li", function () {
	var $el = $( this );
	var index = $el.index();
	$el.siblings().removeClass( "current" );
	$el.addClass( "current" );
	$el.closest( ".visual-select" ).prev()[0].selectedIndex = index;
});


}( jQuery ));