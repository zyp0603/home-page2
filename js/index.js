$(function(){

    var mySwiper = new Swiper ('.swiper-container', {

        direction: 'horizontal',//�ֲ�ͼ�л�����
        loop: true,//ѭ��
        speed:1000,//�����ٶ�
        grabCursor:true,//��������
        autoplay:{//�Զ��л�
            delay:3000
        },
        effect:'coverflow',//�л�Ч��

        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination',
            clickable:true//��ҳ���������
        },

        // �����Ҫǰ�����˰�ť
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // �����Ҫ������
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

















});














