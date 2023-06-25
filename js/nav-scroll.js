$(window).scroll(function() {
    if($(this).scrollTop()>650) {
        $("nav").addClass('bgnav');
    }
    else{
        $("nav").removeClass();
    }
});

$("#scrolltop").on("click", function() {
   $("html; body").animate( {
       scrollTop:0
   }, 750);
    return false;
});