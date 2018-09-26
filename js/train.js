$(function(){
    jQuery(".product .picScroll-left").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 4
      });
      jQuery(".evaluate .slideBox").slide({mainCell:".bd ul",autoPlay:true});
      new WOW({
        offset: 0,
        mobile: true,
        live: true
        }).init();
})

