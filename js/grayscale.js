/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// scroll = false;
// changed = false;

// $(window).scroll(function() {
//     console.log($('.navbar').offset().top);
//     if ($('.navbar').offset().top > 50) {
//         $('.navbar-fixed-top').addClass('top-nav-collapse');
//     } else {
//         $('.navbar-fixed-top').removeClass('top-nav-collapse');
//     }

//     if ($('.navbar').offset().top >= 620) {
//         scroll = true;
//     }
//     else
//     {
//         changed = false;
//         scroll = false;
//     }
//     if (scroll && !changed)
//     {
//       changed = true;
//       a = document.getElementsByClassName('intro');
//       console.log(a);
//       var v = Math.floor(Math.random() * 24.0) + 1;
//       for (i = 0; i < a.length; i++)
//       {
//         a[i].style.setProperty('background', 'url(img/' + v + '.jpg) no-repeat bottom center scroll');
//         a[i].style.setProperty('background-size', 'cover');
//       }
//     }
// });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
