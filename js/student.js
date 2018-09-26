$(function(){
    
    $(".foucebox").slide({
        effect: "fold", autoPlay: true, delayTime: 300, startFun: function (i) {
            $(".foucebox .showDiv").eq(i).find("h2").css({display: "none", bottom: 0}).animate({
                opacity: "show",
                bottom: "60px"
            }, 300);
            $(".foucebox .showDiv").eq(i).find("p").css({display: "none", bottom: 0}).animate({
                opacity: "show",
                bottom: "10px"
            }, 300);
        }
    });

    new WOW({
        offset: 0,
        mobile: true,
        live: true
        }).init();

})