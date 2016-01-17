$.fn.setAllToMaxHeight = function(){
return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
}
$.fn.setAllToMaxHeightFromWidth = function(){
return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).width() }) ) );
}
