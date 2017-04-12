
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

    //Initiate WOW plugin
    new WOW().init();


    function closeMeganav() {
        $('.tf-meganav').fadeOut(300, function () {
            console.log('REMOVING ALL CLASSES');
            $('.tf-meganav-area').removeClass('visible-area');
            $('nav.main-nav > ul > li > a').removeClass('active');
        });
    }

    $('.tf-meganav').mouseleave(function () {
        console.log('left');
        closeMeganav();
    })

    // Meganav open/close
    $('nav.main-nav > ul > li > a').mouseenter(function (event) {

        event.preventDefault();

        var $this = $(this),
            thisData = $this.attr('data-area-no');
            navHeight = $('.main-header').outerHeight(),
            //$dropdown = $this.parent('li').find('.dropdown');
            $dropdown = $('.tf-meganav-area[data-area="' + thisData + '"]');

            $dropdown.css({ 'top': navHeight + 'px' });
            
            //OPEN MEGANAV
            if (!thisData == '') {
                setTimeout(function () {
                    console.log('ADDING CLASSES');
                    //console.log(thisData);
                    $this.addClass('active');
                    $dropdown.addClass('visible-area');
                    $('.tf-meganav').fadeIn(300);
                }, 310);
            }
            //CLOSE MEGANAV
            else {
                $('nav.main-nav > ul > li > a').removeClass('active');
                closeMeganav();
            }
    });


    // Meganav inner functionality
    $('.tf-meganav-area .left-links ul.tf-meganav-links-left li a').mouseenter(function () {
        var $this = $(this),
        thisData = $(this).attr('data-right-area-no');

        console.log(thisData);

        if (!$this.hasClass('selected')) {
            $('.tf-meganav-area .left-links ul.tf-meganav-links-left li a').removeClass('selected');
            $this.addClass('selected');
            $('.tf-meganav-area .right-links .right-area').removeClass('visible');
            $('.tf-meganav-area .right-links .right-area[data-right-area="' + thisData + '"').addClass('visible');
        };
    })





    $('.covervid-video').coverVid(1920, 1080);
    $('.covervid-video').get(0).play();
        

})();