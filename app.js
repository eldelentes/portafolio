$.jribbble.setToken('7804718bfcc9998c45e107f5cd36abbd4e6cff197ecdc652f98d8270ad52d5bb');

$.jribbble.users('eldelentes').shots({per_page: 12}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<article class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank" style="background-image:url('+ shot.images.normal +');">');
    html.push('</a></article>');
  });
  
  $('.work').html(html.join(''));
});

$(document).ready(function(){
   $('.header').midnight();
});

$(window).scroll(function(e){
	var windowPosition = $(this).scrollTop();
	var rotation =  windowPosition * 0.15;
	$('.logo').css('transform', 'rotate(' + rotation + 'deg)');
	
	if (windowPosition > 100) {
		$('.scroll').fadeOut();
	} else {
		$('.scroll').fadeIn();
	}
});

document.onmousemove = function(e){
    mX = e.pageX * 0.02;
    mY = e.pageY * 0.02;

	var img_src = 'assets/intro.png';
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var imageData;

	var img = new Image();
	img.crossOrigin = 'Anonymous';
	img.src = img_src;
	img.onload = function() {
		ctx.drawImage(img, 0, 0, 800, 800);
		
		for(var i = 0; i < 50; i++) {
			createDisplacement();
		}
	}

	function createDisplacement() {
		var xVal = Math.round(Math.random() * mY - 4);
		var yVal = Math.round(Math.random() * canvas.height);
		var height = Math.round(Math.random() * mX + 1);
		
		var data = ctx.getImageData(0, yVal, canvas.width, height);
		ctx.clearRect(0, yVal, canvas.width, height);
		ctx.putImageData(data, xVal, yVal);
	}
}