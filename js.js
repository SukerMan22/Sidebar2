$('.main i').on('click',function(){
   $('.sidebar').toggleClass('ocultar');
   
   $('.content').toggleClass('mostrar');    
    
});


$('.sub i').click(function(){
   $('.sub ul').toggleClass('showsub');
});