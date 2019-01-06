$(window).scroll(function(){

    var pos = $(window).scrollTop(); 

    if($(window).scrollTop() > $('header').height()){
        $('.nav').addClass('bgNav');
    } else {
        $('.nav').removeClass('bgNav');
    }

    $('.the-img').css('transform' , 'translateY(' + pos/1.5 + 'px)');
    $('.text-img').css('transform' , 'translateX(' + pos/1 + 'px)');
    $('.text-img p').css('color' , '#' + pos );
    if($(window).scrollTop() === 0){
        $('.text-img p').css('color' , '#fff' );
    }
    console.log(pos);
});


