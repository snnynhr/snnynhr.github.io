/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        // $(".navbar-right").addClass("collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$('.emgen').on('mouseenter mouseleave', function(e) {
    var lace1 = "snnyx";
    var lace2 = "nhr@g";
    var lace3 = "mai";
    var lace4 = "l.com";
    var text = lace1 + lace2 + lace3 + lace4;
    $('.emgen').text(text).fadeIn();
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
