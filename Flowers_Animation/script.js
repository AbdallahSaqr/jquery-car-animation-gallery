// Jquery onload function
$(document).ready(function() {

    // Flower Animation Rotation and Scaling
    $("img").animate({ borderSpacing: 360 }, {
        step: function(now, fx) {
            const scale = 1 + (now / 360) * 0.5;
            $(this).css({
                'transform': 'rotate(' + now + 'deg) scale(' + scale + ')',
                'transform-origin': '150% 150%'
            });
        },
        duration: 10000,
        easing: 'linear'
    });
});