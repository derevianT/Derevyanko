;(function ($) {
    $(function () {
        $('.icon').on('click', function () {
            $('.shortcut-menu').toggleClass('active');
        });

        $('a[href^="#"]').on('click', function () {
            var target = $(this).attr('href');

            $('html, body').animate({
                scrollTop:
                $(target).offset().top
            }, 800);
            return false
        });

        $('.program').animated('fadeInUp');
        $('.circle-wrapper').animated('fadeInLeft', 'fadeOutRight');
        $('.team').animated('fadeIn');



        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.prev-p',
            nextArrow: '.next-p',
            slide: '.slide__item',
            centerMode: true,
            dots: true,
            centerPadding: '1px',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToScroll: 1,
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.slider-team').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            slide: '.slide-team__item',
            centerMode: true,
            prevArrow: '.prev',
            nextArrow: '.next',
            asNavFor: '.text',
            centerPadding: '1px'
        });
        $('.text').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.slider-team',
            fade: true
        });

        var show = true;
        var countbox = '.challenge';
        $(window).on("scroll load resize", function(){
            if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height();        // Высота окна браузера
            var d_height = $(document).height();      // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                $(".spincrement").spincrement({
                    thousandSeparator: '',
                    duration: 1200
                });
                show = false;
            }
        });

       /* $('.spincrement').spincrement({
            thousandSeparator: ''
        });*/

        $.fn.scrollToTop = function () {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function () {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function () {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        };
        $('.top').scrollToTop();

    });
})(jQuery);

