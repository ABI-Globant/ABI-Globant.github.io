var intCurrentContainer = 1;
var intMaxContainerCount = 3;

function startVideoSwaps() {

	// Every so often fade to next video
	setInterval (function() {

		// Determine next container to display
		var intNextContainer = intCurrentContainer + 1;
		if( intNextContainer > intMaxContainerCount ){
			intNextContainer = 1
		}

		// Swap containers
		swapContainers( intCurrentContainer, intNextContainer );

		// Update new current container
		intCurrentContainer = intNextContainer;

	}, 3000 );

}

function swapContainers( intContainerOut, intContainerIn ) {

	console.log( "Out:" + intContainerOut + " In:" + intContainerIn );

	$( "#divVideoContainer" + intContainerOut ).fadeOut( 300 );
	$( "#divVideoContainer" + intContainerIn ).fadeIn( 300 );


}

$(document).ready(function () {
	startVideoSwaps();
  document.onmousemove = function(e) {
    var x = -(e.clientX/10);
    var y = -(e.clientY/10);

    this.body.style.backgroundPosition = x + 'px ' + y + 'px';
    $('.mask-site').css('left', x + 'px ')
  };
});


