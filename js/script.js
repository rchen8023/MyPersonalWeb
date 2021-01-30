$(document).ready(function(){

    $('#about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '80px;'
    });
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() { /*select the element where a href start with # */
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    $('.bar-js').waypoint(function(direction) {
        $('.bar-js').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    
    $('.photo-js').waypoint(function(direction) {
        $('.photo-js').addClass('animated flipInY');
    }, {
        offset: '70%'
    });
    
    $('.duty-1-js').waypoint(function(direction) {
        $('.duty-1-js').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });
    
    $('.duty-2-js').waypoint(function(direction) {
        $('.duty-2-js').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });
    
    $('.contact-js').waypoint(function(direction) {
        $('.contact-js').addClass('animated fadeInDown');
    }, {
        offset: '70%'
    });
    
    /*Mobile Nav*/
    $('#nav-icon').click(function() {
        var nav = $('#main-nav-js');
        var icon = $('#nav-icon ion-icon');
        nav.slideToggle(200);
        if (icon[0].name == 'menu-outline') {
            icon.attr('name','close-outline'); /* change name to new icon name*/
        } else {
            icon.attr('name','menu-outline');
        }
    });
    
});