;(function($) {
    $(function() {
        $('.icon').on('click', function () {
            $('#main-menu').toggleClass('active');
        });
        $('.responsive').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.responsiveArrow.prev',
            nextArrow: '.responsiveArrow.next',
            slide:'.slider-item',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.my-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            prevArrow: '.arrow.prev',
            nextArrow: '.arrow.next',
            fade: true,
            cssEase: 'linear',
            slide:'.slide-item'
        });
        $('a[href^="#"]').on('click',function () {
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop:
            $(target).offset().top},800);
            return false
        });

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
        $(".top").scrollToTop();

        var map;
        var marker;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 48.734371, lng: 37.579560},
                zoom: 16
            });
            marker = new google.maps.Marker({
                position: {lat: 48.734371, lng: 37.579560},
                map: map,
                title: 'BA-Kramatorsk',
                icon: {
                    url: 'img/Logo.png'
                }
            })
        }
        initMap();

    });
}) (jQuery);

