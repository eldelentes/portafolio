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