


/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

  // $('.hiding-nav-trigger a').click(function(){
  //   $('#wrapper').slideToggle();
  //   $(this).addClass('hide-me');
  // })

  var vWidth = $(window).width();

  $('#toggle-menu').click(function(){

    $(this).toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');
    var hidden = $('.main-nav');
    if (hidden.hasClass('visible')){
        hidden.animate({"left":'-'+vWidth*1.2}, 1000).removeClass('visible');
    } else {
        hidden.animate({"left":"0px"}, 1000).addClass('visible');
    }
    });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends


