$(function() {

	$('a[href="#nav"]').on('click', function(e){
        e.preventDefault();
        $('.contain-window').toggleClass('nav-active');
    })

});
