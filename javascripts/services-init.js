/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

		if( !device.tablet() && !device.mobile() ) {

			/* Activate mouse-hover if non-mobile device is detected*/ 
		    $('.service-carousel-item').mouseenter(function(){
		        var serviceTarget = $(this).find('a').attr('data-service-details-expand');
		        $('.service-details').hide();
		        $('#service-details-'+serviceTarget).fadeIn();
		        $('.triangle-arrow-up').removeClass('active-service');
		        $(this).find('.triangle-arrow-up').addClass('active-service');
		        return false;
		    });

		     $('.service-carousel-item a').click(function(){
		        return false;
		    });
								
		} else {
			
			/* Dectivate mouse click to touch effect if mobile device is detected (bg image is displayed)*/ 
		    $('.service-carousel-item a').click(function(){
		        var serviceTarget = $(this).attr('data-service-details-expand');
		        $('.service-details').hide();
		        $('#service-details-'+serviceTarget).fadeIn(2000);
		        $('.triangle-arrow-up').removeClass('active-service');
		        $(this).find('.triangle-arrow-up').addClass('active-service');
		        return false;
		    });
			
		}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

