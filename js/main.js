
(function () {

    $('.intro-carousel').on('afterChange', function (slick, currentSlide) {
        var $carousel = $(this);
        $carousel.find('.slick-track .slick-slide').removeClass('slide-vis');

        setTimeout(function () {
            //console.log(currentSlide.currentSlide + 1);
            $carousel.find('.slick-track .slick-slide:nth-of-type(' + (currentSlide.currentSlide + 1) + ')').addClass('slide-vis');
        }, 100);
    });

    $('.intro-carousel').on('init', function (slick) {
        $(this).find('.slick-track .slick-slide:first-of-type').addClass('slide-vis');
    });

    $('.intro-carousel').slick({
        arrows: false,
        dots: true,
        fade: true
    });

    $('.block-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    })

    $('.whatsnew-carousel').slick({
        arrows: false,
        dots: true
    })

    $('.social-carousel').slick({
        dots: true,
        arrows: false,
        speed: 250
    });


    // Mobile Navigation
    $('nav.main-nav ul li a').click(function (event) {

        event.preventDefault();

        var navHeight = $('.main-header').outerHeight();
        $this = $(this),
        $dropdown = $this.parent('li').find('.dropdown');

        $dropdown.css({ 'top': navHeight + 'px' });

        //Scroll to top of page
        //$("html, body").animate({ scrollTop: 0 }, 100)


        if ($this.hasClass('active')) {
            $('body').css({ 'padding-top': '0px' });
            $this.removeClass('active');
            $dropdown.removeClass('open');
            $dropdown.removeClass('visible');
            $('body').removeClass('no-scroll');
        }
        else {
            $('body').css({ 'padding-top': navHeight + 'px' });
            $this.addClass('active');
            $dropdown.addClass('open');
            $('body').addClass('no-scroll');
            setTimeout(function () {
                $dropdown.addClass('visible');
            }, 400);
        }

    });

    $('.covervid-video').coverVid(1920, 1080);
    $('.covervid-video').get(0).play();
        

})();