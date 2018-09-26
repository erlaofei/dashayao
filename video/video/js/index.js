 $(function () {
      var $divs = $('.main');
      $('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $divs.eq(index).addClass('selected').siblings().removeClass('selected');
      });

    });