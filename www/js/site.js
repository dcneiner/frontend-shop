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

var _quickView;
var quickView = function () {
	if ( !_quickView ) {
		_quickView = $.Deferred( function ( d ) {
			$.getScript(
				"/js/quick-view.js"
			).then(
				function () {
					d.resolve( app.QuickView );
				},
				d.reject
			);
		}).promise();
	}

	return _quickView;
};

var quickCache;
$doc.on( "click", ".product a", function ( e ) {
	$body.addClass( "quick-view-loading" );
	var href = $( e.currentTarget ).attr( "href" );

	$.when(
		quickView(), 
		$.getJSON( href )
	).then( function ( QuickView, json ) {
		if ( quickCache ) quickCache.destroy();
		quickCache = new QuickView( json[ 0 ] );
	});
	e.preventDefault();
});


}( jQuery ));