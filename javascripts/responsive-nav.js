jQuery(document).ready(function(){
								
	jQuery('#nav-button').click(function() {
			jQuery('#options, .more-info').toggle();
	});
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() < 959) {
	jQuery('#options, .more-info').hide();
	}
	});
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() > 959) {
			jQuery('#options, .more-info').show();
	}
	});
	
});	
	