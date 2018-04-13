;(function($) {
    $(function() {

        function heightDetect() {
            $('#header').css('height', $(window).height());
        };
        heightDetect();

        $('.icon').on('click', function () {
            $('.main-menu').toggleClass('active');
        });
        $('.popup-form').magnificPopup({
            type: 'inline',
            focus: '#name'
        });

        $('a[href^="#"]').on('click',function () {
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop:
            $(target).offset().top},800);
            return false
        });

        $('.main-slide').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slide:'.slide-item',
            autoplay: true,
            arrows: false,
            autoplaySpeed:3000
        });
        $(".gallery").animated("fadeIn");
        $(".team .container").animated("slideInUp", "zoomOutDown");
        $(".anim-left").animated("slideInLeft", "zoomOutDown");
        $(".anim-right").animated("slideInRight", "zoomOutDown");
        $('#number').mask('+38(999) 999-99-99');
        var map;
        var marker;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 48.763514, lng: 37.589586},
                zoom: 16
            });
            marker = new google.maps.Marker({
                position: {lat: 48.763514, lng: 37.589586},
                map: map,
                title: 'Стоматология',
                icon: {
                    url: 'img/logo1.png'
                }
            })
        }
        initMap();
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
    });
}) (jQuery);

