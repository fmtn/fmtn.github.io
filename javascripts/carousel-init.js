
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

   




    $("#testimonial-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });


     $("#service-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 4,
        itemsDesktop: [3000,4],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[1024,4],
        itemsTabletSmall: [600,3],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,

     });


     $("#awards-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 4,
        itemsDesktop: [3000,4],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[1024,4],
        itemsTabletSmall: [600,3],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,

     });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

