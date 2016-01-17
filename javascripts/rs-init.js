    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     var cW = $('.container').width();
     var fH = $('.sticky-foot').height();

if( !device.tablet() && !device.mobile() ) {

    var sW = vW-120;
    $('.fullwidth').css('width',sW);

    } else {
    	
    $('header').hide();
    $('.fullwidth').css('width',vW);
    $('#content > .container').css('margin-left',0);
  }      

		var revapi;

		$(document).ready(function() {

			   revapi = $('.tp-banner').revolution(
						{
							delay:15000,
							startwidth:1170,
							startheight:500,
							hideThumbs:10,
							fullWidth:"on",
							fullScreen:"on",
							fullScreenOffsetContainer: ""

						});

		});	
		//ready

