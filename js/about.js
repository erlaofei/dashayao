$(function () {
    /*1. 不能垂直居中*/
    /*2. 需要加上背景颜色*/
    /*3. 页面指示器*/

    $('#content').fullpage({
        verticalCentered:false,
        sectionsColor:[],
        //动画切换的时间
        scrollingSpeed:1000,
        //页面渲染完毕
    

    });
    $('.nav ul li a').on('click',function(){
        $(this).fullpage.moveTo($(this).data('index'));
        $(this).parent().addClass('cur').siblings().removeClass('cur')
    })
    ;(function () {
        var index = 0
        var count=$('.font-p').length
        $(".hr a").click(function () {
            $(this).find('span').addClass('fff').css('color', '#0080af')
            $(this).siblings().find('span').removeClass('fff').css('color', '')
            $(this).find('.font-p').show(100)
            $(this).siblings().find('.font-p').hide()
            index = $(this).data('index')
            return false;
        })
        $('.l').click(function () {
          
            index -= 1
            $(".hr a").eq(index).click()
        })
        $('.r').click(function () {
            index += 1
            if(index>=count){
               index=0;
            }
            $(".hr a").eq(index).click()
        })
    }
    )()
});