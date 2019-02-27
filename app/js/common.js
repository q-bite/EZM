/* mobile NAV */
$(document).ready(function() {

    /* Настройка плагина FullPage.js */
    $(document).ready(function(){
        if ($(window).width() > 400) {
            /* FullPage.js */
            $('#fullpage').fullpage({
                scrollingSpeed: 1500,
                easing: 'easeInOutCubic',
                lazyLoading: true,
                scrollOverflow: true,
                controlArrows: true,
                //verticalCentered: false,
                navigation: true,
                //navigationTooltips: ['Главная', 'Кто я', 'Программа', 'Стоимость', 'Контакты'],
                navigationPosition: 'right',
                anchors:['section_1', 'section_2', 'section_3','section_4', 'section_5']
            });
        }
    });

    // function dopic() {
    //     if($('.window-home.active')){
    //         $('.top-line-page + ul').css('display','flex')
    //     }
    // }
    // dopic();

    /* Pages active */
    $('a[href="#home"]').on('click', function(e){
        e.preventDefault();
        $('.main-nav a').removeClass('active');
        $('a[href="#home"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-home').addClass('active');
        $('.top-line-page h2').text('');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','flex')

    });
    $('a[href="#about"]').on('click', function(e){
        e.preventDefault();
        $('.main-nav a').removeClass('active');
        $('a[href="#about"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-about').addClass('active');
        $('.top-line-page h2').text('About Us');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    });
    $('a[href="#gallery"]').on('click', function(e){
        e.preventDefault();
        $('.main-nav a').removeClass('active');
        $('a[href="#gallery"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-gallery').addClass('active');
        $('.top-line-page h2').text('Gallery');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    });
    $('a[href="#services"]').on('click', function(e){
        e.preventDefault();
        $('.main-nav a').removeClass('active');
        $('a[href="#services"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-services').addClass('active');
        $('.top-line-page h2').text('Services');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    });
    $('a[href="#contact"]').on('click', function(e){
        e.preventDefault();
        $('.main-nav a').removeClass('active');
        $('a[href="#contact"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-contact').addClass('active');
        $('.top-line-page h2').text('Contact Us');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    });

    /* Btn Open Nav */
	$('a[href="#nav"]').on('click', function(e){
        e.preventDefault();
        $('.contain-window').toggleClass('nav-active');
    })
    $('.main-nav a').on('click', function(e){
        e.preventDefault();
        $('.main-nav a').removeClass('active');
        $(this).addClass('active');
        $('.contain-window').toggleClass('nav-active');
        // dopnav();
    })


});

/* Popup Magnific Gallery */
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by EZMSIGN Company</small>';
            }
        }
    });
});

