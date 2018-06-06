$(function(){

    var mySwiper = new Swiper ('.swiper-container', {

        direction: 'horizontal',//轮播图切换方向
        loop: true,//循环
        speed:1000,//滑动速度
        grabCursor:true,//鼠标变手型
        autoplay:{//自动切换
            delay:3000
        },
        effect:'coverflow',//切换效果

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable:true//分页器鼠标手型
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

















});














