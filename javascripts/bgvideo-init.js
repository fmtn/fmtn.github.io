
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

		if(!Modernizr.video || device.tablet() || device.mobile() ) {

      $('body').addClass('poster-img');
      $('#okplayer').remove();

		}

});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends
