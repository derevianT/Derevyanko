;(function($) {
    $(function() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.ideas .col-md-6.col-lg-3').toggleClass('mb-4');
            $('.ideas .row.mb-4').toggleClass('mb-4');}


        $('.icon').on('click', function () {
            $('.nav').toggleClass('active');
        });

        $('.main-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slide:'.main-slider__item',
            /*autoplay: true,*/
            arrows: false,
            autoplaySpeed:3000
        });
        $('a[href^="#"]').on('click',function () {
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop:
            $(target).offset().top},800);
            return false
        });
    });
}) (jQuery);