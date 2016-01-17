/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     var cW = $('.container').width();
     
    if( !device.tablet() && !device.mobile() ) {

      var sW = vW-120;
        $('.fullwidth').css('width',sW);
        /* Activate Parallax effect if non-mobile device is detected*/ 
        $('.parallax-home').parallax("50%", 0.1);
                
    } else {
      
      $('.fullwidth').css('width',vW);
      /* Dectivate Parallax effect if mobile device is detected (bg image is displayed)*/ 
      $('.parallax').addClass('no-parallax');
      
    }
      
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends











  

