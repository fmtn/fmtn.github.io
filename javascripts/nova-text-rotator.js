jQuery(document).ready(function($) {
    
    $(window).load(function(){
        $('.text-rotator').each(function(){
            
            var text_rotator_content = $(this).html();
            $(this).empty();
            $(this).html('<div class="rotator-wrap"></div>')
            this_item = $(this).children('.rotator-wrap');
            var text_rotator_content_split = text_rotator_content.split(',');
            var item_size = text_rotator_content_split.length;
            nova_text_rotator(text_rotator_content_split, this_item, item_size);
        });
        
        function nova_text_rotator(item_array, this_item, item_size, my_index){
            
            if(my_index == undefined)
                var my_index = -1;

            my_index++

            if(my_index < item_size)
            {

                this_item.fadeOut(800, function(){
                    this_item.html('<span>'+ item_array[my_index] +'</span>');
                    this_item.fadeIn(800);
                    
                });
            }
            else
            {
                my_index = -1;
            }

            setTimeout(function() {
                 nova_text_rotator(item_array, this_item, item_size, my_index);
            }, 2500);
        }
    });  
});    