$(document).ready( function() {
   
});

$(window).scroll( function() {
   animation();
});

function animation() {
   var st = $(window).scrollTop();
   
   function stickyNav() { 
      var headNav = $('.sticky-nav');
      
      if ( st > 70 && st < 499 ) {
         headNav.css('margin-top', '-70px');
      } else if ( st > 500 ) {
         headNav.css('margin-top', '');
         headNav.addClass('unsticky');   
      } else {
         if ( st <= 500 ) {
            headNav.css('margin-top', '');
            headNav.removeClass('unsticky');
         }
      }  
   }
   
   function animate() {
      var hero = $('.hero-blurb'),
          asset = $('.asset-flexitem'),
          plus = $('.plus-flexitem-flex'),
          contact = $('.contact-flex');
      
      if ( st > hero.offset().top / 4 ) {
         hero.addClass('hero-animate');
      }
      
      if ( st > asset.offset().top / 2.5 ) {
         asset.addClass('asset-animate');
      }       
      
      if ( st > plus.offset().top / 2 ) {
         plus.addClass('plus-animate');
      }
      
      if ( st > contact.offset().top / 1.4 ) {
         contact.addClass('contact-animate');
      }
   
   console.log(contact.scrollTop());
   }
   
   stickyNav();
   animate();
};