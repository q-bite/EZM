/* mobile NAV */
$(document).ready(function() {

    /* Pages active */
    $('a[href="#home"]').on('click', function(e){
        e.preventDefault();
        $('.block-hidden-window').removeClass('active');
        $('.window-home').addClass('active');
        $('.top-line-page h2').text('');
    });
    $('a[href="#about"]').on('click', function(e){
        e.preventDefault();
        $('.block-hidden-window').removeClass('active');
        $('.window-about').addClass('active');
        $('.top-line-page h2').text('About Us');
    });
    $('a[href="#gallery"]').on('click', function(e){
        e.preventDefault();
        $('.block-hidden-window').removeClass('active');
        $('.window-gallery').addClass('active');
        $('.top-line-page h2').text('Gallery');
    });
    $('a[href="#services"]').on('click', function(e){
        e.preventDefault();
        $('.block-hidden-window').removeClass('active');
        $('.window-services').addClass('active');
        $('.top-line-page h2').text('Services');
    });
    $('a[href="#contact"]').on('click', function(e){
        e.preventDefault();
        $('.block-hidden-window').removeClass('active');
        $('.window-contact').addClass('active');
        $('.top-line-page h2').text('Contact Us');
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
