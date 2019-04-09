    'use strikct'
    window. jQuery(function ($){
    $('.slider').slick({
    slidesToShow:1,
    slidesToScrole:1,
    infinite: true,
    autoplay:true,
    autoplaySpeed:4500,
    fade: true,
     dots:true,
     customPaging : function(slider, i) {
var thumb = $(slider.$slides[i]).data();
return '<a>1</a>';
},
  });
    });

   