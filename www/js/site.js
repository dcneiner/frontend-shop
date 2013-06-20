(function ( $ ) {

var $doc = $( document );



$doc.on( "click", ".shorten", function ( e ) {
	e.preventDefault();
	$( this ).removeClass( "shorten" );
});

}( jQuery ));