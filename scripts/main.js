var numberOfImages = $('.image').length;
var previousImage = 4;
var currentImage = 0;
var nextImage = 1;

moveImages = setInterval(function(){
	fillInBubbles();
	slideNextImageLeft();

}, 5000);


var slideNextImageLeft = function(){
	$('#image-'+nextImage).css({left:-700+(-700*(nextImage-2))});
	$('#image-'+currentImage).animate({left:-700+(-700*(currentImage))},1000);
	$('#image-'+nextImage).animate({left:-700+(-700*(nextImage-1))},1000);
	currentImage = nextImage;
	nextImage = ((nextImage)+1)%5;
	previousImage = (nextImage+3)%5;
	fillInBubbles();
};

var slidePreviousImageRight = function(){
	$('#image-'+previousImage).css({left:-700*(previousImage+1)});
	$('#image-'+previousImage).animate({left:-700*previousImage},1000);
	$('#image-'+currentImage).animate({left:700-700*currentImage},1000);
	currentImage = previousImage;
	nextImage = (currentImage+1)%5;
	previousImage = (currentImage+4)%5;
	fillInBubbles();
};

var createNavigation = function(){
	
	for(i=0;i<5;i++){
		$('#bubbles').append(`<div class = nav-bubble id = nav-${i}></div>`);
	}
}

var selectLocation = function(element){
	var id = element.attr('id');
	var number = parseInt(id[id.length-1]);
	nextImage = number;
	slideNextImageLeft();
	
}

var fillInBubbles = function(){
	$('.nav-bubble').css('opacity','0.3');
	$('#nav-'+currentImage).css('opacity','0.9');
}

$(document).ready(function(){

	createNavigation();
	fillInBubbles();

	$('#next-button').click(function(){
		slideNextImageLeft();
		clearInterval(moveImages);
		moveImages = setInterval(function(){
			slideNextImageLeft();
		}, 5000);
		
	});	

	$('#previous-button').click(function(){
		slidePreviousImageRight();
		clearInterval(moveImages);
		moveImages = setInterval(function(){
			slideNextImageLeft();
		}, 5000);
		
	});

	$('.nav-bubble').click(function(){
		var id = $(this).attr('id');
		var number = parseInt(id[id.length-1]);
		if(number!==currentImage){
			selectLocation($(this));
			fillInBubbles();
			clearInterval(moveImages);
			moveImages = setInterval(function(){
				slideNextImageLeft();
			}, 5000);
		};
	});
});



