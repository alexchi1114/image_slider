var numberOfImages = $('.image').length;
var previousImage = 4;
var currentImage = 0;
var nextImage = 1;



var slideNextImageLeft = function(){
	$('#image-'+currentImage).animate({left:-700+(-700*(currentImage))},1000);
	$('#image-'+nextImage).animate({left:-700+(-700*(nextImage-1))},1000);
	previousImage = currentImage;
	currentImage = nextImage;
	nextImage = ((nextImage)+1)%5;
	$('#image-'+nextImage).css({left:-700+(-700*(nextImage-2))});
};

var slidePreviousImageRight = function(){
	$('#image-'+previousImage).css({left:-700*(previousImage+1)});
	$('#image-'+previousImage).animate({left:-700*previousImage},1000);
	$('#image-'+currentImage).animate({left:700-700*currentImage},1000);
	currentImage = previousImage;
	nextImage = (currentImage+1)%5;
	previousImage = (currentImage+4)%5;
};

$(document).ready(function(){
	$('#next-button').click(function(){
		slideNextImageLeft();
	});	

	$('#previous-button').click(function(){
		slidePreviousImageRight();
	});
});
