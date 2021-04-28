$(document).ready(function() {  
  // Mobile nav
  $(".js-nav-icon").click( function(){
    let nav = $(".js-main-nav")
    let icon = $('.js-nav-icon-i')
    let isDown = true

    nav.slideToggle(200);
    
    if (icon.hasClass('ion-navicon')) {
      icon.removeClass('ion-navicon')
      icon.addClass('ion-close-round')
    } else {
      
      icon.removeClass('ion-close-round')
      icon.addClass('ion-navicon')
    }
// ion-close-round
  })
})