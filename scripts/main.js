var numberOfImages = $('.image').length;
var previousImage = 4;
var currentImage = 0;
var nextImage = 1;



var slideNextImageLeft = function(){
	$('#image-'+currentImage).animate({left:-700+(-700*(currentImage))},1000);
	$('#image-'+nextImage).animate({left:-700+(-700*(nextImage-1))},1000);
	currentImage = nextImage;
	nextImage = ((nextImage)+1)%5;
	previousImage = (nextImage+3)%5;
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
	console.log(previousImage);
	console.log(currentImage);
	console.log(nextImage);
	
}

var fillInBubbles = function(){
	$('.nav-bubble').css('opacity','0.3');
	$('#nav-'+currentImage).css('opacity','0.9');
}

$(document).ready(function(){


	createNavigation();

	$('#next-button').click(function(){
		slideNextImageLeft();
		fillInBubbles();
	});	

	$('#previous-button').click(function(){
		slidePreviousImageRight();
		fillInBubbles();
	});

	$('.nav-bubble').click(function(){
		selectLocation($(this));
		fillInBubbles();
	});
});

0 - 3

1 - 4

2 - 0

3 -1

4 - 2


