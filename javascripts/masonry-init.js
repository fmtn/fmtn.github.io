
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


    $(window).load(function(){
    

        
        var $container = $('.news-container');

        var gutter = 0;
        var min_width = 320;
        $container.imagesLoaded( function(){
            $container.masonry({
                itemSelector : '.news-item',
                gutterWidth: gutter,
                isAnimated: true,
                  columnWidth: function( containerWidth ) {
                    var box_width = (((containerWidth - 2*gutter)/3) | 0) ;

                    if (box_width < min_width) {
                        box_width = (((containerWidth - gutter)/2) | 0);
                    }

                    if (box_width < min_width) {
                        box_width = containerWidth;
                    }

                    $('.news-item').width(box_width);

                    return box_width;
                  }
            });
        });


        // window resize and layout regenerate
        $(window).resize(function() {
            $container.masonry({
                itemSelector : '.news-item',
                gutterWidth: gutter,
                isAnimated: true,
                  columnWidth: function( containerWidth ) {
                    var box_width = (((containerWidth - 2*gutter)/3) | 0) ;

                    if (box_width < min_width) {
                        box_width = (((containerWidth - gutter)/2) | 0);
                    }

                    if (box_width < min_width) {
                        box_width = containerWidth;
                    }

                    $('.news-item').width(box_width);

                    return box_width;
                  }
            });
        });


    });

      
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

