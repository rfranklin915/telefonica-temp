
(function () {

    $('.intro-carousel').on('afterChange', function (slick, currentSlide) {
        var $carousel = $(this);
        $carousel.find('.slick-track .slick-slide').removeClass('slide-vis');

        setTimeout(function () {
            console.log(currentSlide.currentSlide + 1);
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

})();