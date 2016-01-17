/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

		if( !device.tablet() && !device.mobile() ) {

			/* Activate Parallax effect if non-mobile device is detected*/ 
		  	$('.parallax, .page-head').parallax("50%", 0.4);
								
		} else {
			
			/* Dectivate Parallax effect if mobile device is detected (bg image is displayed)*/ 
			$('.parallax, page-head').addClass('no-parallax');
			
		}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

