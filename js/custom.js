$(function(){

  // ============= preloader Pare js   ============= 
    
    $(window).on('load',function(){
      $('.preloader').delay(500).fadeOut(1000);
  }); 


    // ====== Sidebar ======
    
    $('.sidebar-click').on('click', function(){
        $('.sidebar').toggleClass('ber-hou');
        $('.side').toggleClass('fa-bars');
    });  
    
    // banner slider
    
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        autoplaySpeed: 2000,
    });
    
      //Wow Js about
      new WOW().init();  
    
    // VENUBOX Service part
      $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    // ====== COUNTER
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });


    //    ================= BACK TO TOP PART ============

    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop:0}, 1000);
  });
  

//    ================= SCROLLING PART ============

  $(window).scroll(function () {
      var scrolling = $(this).scrollTop();

      if (scrolling > 200) {
          $('.back-to-top').fadeIn(800);
      } 
    else {
          $('.back-to-top').fadeOut(800);
      }

      //    ================= ADD CLASS STICKY MENU PART ============

      if (scrolling > 250) {
        $('.navbar').addClass('bg');
    } else {
        $('.navbar').removeClass('bg'); 
    }

    });
       $('.banner1-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  nextArrow: '.right',
  prevArrow: '.left',
  autoplaySpeed: 2000,
});
    
    
});





















