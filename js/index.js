$(function() {
  //banner
  jQuery(".banner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime : 4000,delayTime:700});
  //轮播
  jQuery("#thisBegin").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "leftLoop",
    autoPlay: true,
    vis: 4
  });

  jQuery(".picScroll-left.white").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "leftLoop",
    autoPlay: true,
    vis: 5
  });

  $(".slide_tu").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,interTime : 3000,delayTime:500,vis: 3});
  //点击头像切换内容
  $(".box_tutor .right img").click(function() {
    var index = $(this).index();
    $(".box_tutor .left div")
      .eq(index)
      .fadeIn(1000)
      .siblings()
      .hide();
    $('.box_tutor .center img')
    .eq(index)
    .fadeIn(1000)
    .siblings()
    .hide();
  });


  $(function () {
    //标注了每个图片要运动到的位置
    var config = [
      {
        width: 120,
        height:176,
        top: '50%',
        bottom:0,
        marginTop:'-88px',
        left: 1070,
        opacity: 1,
        zIndex: 0
      },//0
      {
        width: 120,
        height:176,
        top: '50%',
        bottom:0,
        marginTop:'-88px',
        left: 0,
        opacity: 1,
        zIndex: 0
      },//1
      {
        width: 148,
        height:192,
        top: '50%',
        bottom:0,
        marginTop:'-96px',
        left: 80,
        opacity: 1,
        zIndex: 2
      },//2
      {
        width: 160,
        height:208,
        top: '50%',
        bottom:0,
        marginTop:'-104px',
        left: 170,
        opacity:1,
        zIndex: 3
      },//3
      {
        width: 171,
        height:222,
        top: '50%',
        bottom:0,
        marginTop:'-111px',
        left: 268,
        opacity:1,
        zIndex: 4
      },//4
      {
        width: 185,
        height:240,
        top: '50%',
        bottom:0,
        marginTop:'-120px',
        left: 388,
        opacity:1,
        zIndex: 5
      }//5
      ,{
        width: 215,
        height:280,
        top: '50%',
        bottom:0,
        marginTop:'-140px',
        left: 520,
        opacity:1,
        zIndex: 6
      }//6
      ,{
        width: 185,
        height:240,
        top: '50%',
        bottom:0,
        marginTop:'-120px',
        left: 680,
        opacity:1,
        zIndex: 4
      }//5
      ,{
        width: 171,
        height:222,
        top: '50%',
        bottom:0,
        marginTop:'-111px',
        left: 780,
        opacity:1,
        zIndex: 3
      },//4
      {
        width: 160,
        height:208,
        top: '50%',
        bottom:0,
        marginTop:'-104px',
        left: 880,
        opacity:1,
        zIndex: 2
      },//3
      {
        width: 148,
        height:192,
        top: '50%',
        bottom:0,
        marginTop:'-96px',
        left: 986,
        opacity: 1,
        zIndex: 1
      }//2
    ];//config其实就是一个配置单 规定了每张图片的大小位置层级透明度
    //1 获取元素
    var $box = $('#wrap');
    var $slide = $('#slide');
    var $lis = $('.w li');
    var $arrBox = $('.w #arrow');
    var $arrLeft = $('.w #arrLeft');
    var $arrRight = $('.w #arrRight');
    
    //2 设置每个li的默认显示位置
    changePos();
    
    //3 设置移入移出箭头的渐入渐出效果
    $box.mouseenter(function () {
      $arrBox.stop().animate({opacity: 1});
    });
    $box.mouseleave(function () {
      $arrBox.stop().animate({opacity: 0});
    });
    
    
    //4 右按钮点击操作
    $arrRight.click(function () {
      config.push(config.shift());
      changePos();
    });
    
    //5 左按钮点击操作
    $arrLeft.click(function () {
      //将数组的最后一个元素移动到数组最前面
      config.unshift(config.pop());
      changePos();
    });
    
    function changePos() {
      for (var i = 0; i < config.length; i++) {
        $lis.eq(i).animate(config[i]);
      }
    }
  });
});
