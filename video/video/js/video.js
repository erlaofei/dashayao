$(function(){
    jQuery(".banner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime : 4000,delayTime:700}); 
           // 初始化分页: 
                // 1> 总页数: 35
                // 2> 显示多少可视页面: 8
                $( '#page' ).twbsPagination( {
                    totalPages: 8,
                    visiblePages: 3,
                    first: '首页',
                    last: '尾页',
                    prev: '上一页',
                    next: '下一页',
                    loop: true,
                    onPageClick: function (event, page) {
                      // alert( '点击了: ' + page );
                    }
                  } );
})