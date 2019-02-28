/* mobile NAV */
$(document).ready(function() {

    function s1(){
        $('.main-nav a').removeClass('active');
        $('a[href="#home"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-home').addClass('active');
        $('.top-line-page h2').text('');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','flex')
    }
    function s2(){
        $('.main-nav a').removeClass('active');
        $('a[href="#about"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-about').addClass('active');
        $('.top-line-page h2').text('About Us');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    }
    function s3(){
        $('.main-nav a').removeClass('active');
        $('a[href="#gallery"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-gallery').addClass('active');
        $('.top-line-page h2').text('Gallery');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    }
    function s4(){
        $('.main-nav a').removeClass('active');
        $('a[href="#services"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-services').addClass('active');
        $('.top-line-page h2').text('Services');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    }
    function s5(){
        $('.main-nav a').removeClass('active');
        $('a[href="#contact"]').addClass('active');
        $('.block-hidden-window').removeClass('active');
        $('.window-contact').addClass('active');
        $('.top-line-page h2').text('Contact Us');
        $('html, body').animate({scrollTop: 0},500);
        $('.top-line-page + ul').css('display','none')
    }

    /* Pages slides */
    $('a[href="#home"]').on('click', function(e){
        e.preventDefault();
        s1();
    });
    $('a[href="#about"]').on('click', function(e){
        e.preventDefault();
        s2();
    });
    $('a[href="#gallery"]').on('click', function(e){
        e.preventDefault();
        s3();
    });
    $('a[href="#services"]').on('click', function(e){
        e.preventDefault();
        s4();
    });
    $('a[href="#contact"]').on('click', function(e){
        e.preventDefault();
        s5();
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


    if ($(window).width() > 1000) {
        window.addEventListener('load', function() {
            var i=1;
            var scrollStatus = {
                wheeling: false,
                functionCall: false
            };
            var scrollTimer = false;
            window.addEventListener('wheel', function(e) {
                scrollStatus.wheeling = true;
                if (!scrollStatus.functionCall) {
                    //parseScroll here
                    console.log(e.deltaY);

                    if (e.deltaY < 0 && i>=1) {
                        //Колесо вверх
                        i=i-1;
                    }
                    if (e.deltaY > 0 && i<=5) {
                        i=i+1;
                        //Колесо вниз
                    }

                    switch (i) {
                        case 1:
                            s2();
                            break;
                        case 2:
                            s3();
                            break;
                        case 3:
                            s4();
                            break;
                        case 4:
                            s5();
                            break;
                    }


                    scrollStatus.functionCall = true;
                }
                window.clearInterval(scrollTimer);
                scrollTimer = window.setTimeout(function() {
                    scrollStatus.wheeling = false;
                    scrollStatus.functionCall = false;
                }, 50); //set this millisecond to your liking
            });
        });
    }



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




