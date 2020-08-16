$(document).ready(function () {

    /* Sticky navigation */
    
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Button scroll */
    
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });


    /* Navigation scroll */
    
    $('a[href*="#"]') // Select all links with hashes
        .not('[href="#"]') // Remove links that don't actually link to anything
        .click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });


    /* Animation on scroll */

    ['.js--wp-1', '.js--wp-2', '.js--wp-3', '.js--wp-4'].forEach(el => $(el).waypoint(function(){
        let animation = '';
        const nmbrOfElem = parseInt( el.split('wp-')[1] );
        switch (nmbrOfElem){
            case 1:
            case 3:
                animation = 'animated fadeIn';
                break;
            case 2:
                animation = 'animated fadeInUp';
                break;
            case 4:
                animation = 'animated pulse';
                break;
        }

        $(el).addClass(animation);
    }, {
        offset: '50%'
    }));

    /* Mobile nav */
    $('.js--nav-icon').click(function(){
        const nav = $('.js--main-nav');
        const icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });
});