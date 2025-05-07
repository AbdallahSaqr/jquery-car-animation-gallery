$(document).ready(function() {
    
    // Step 1: Initialize Slick first
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });

    // Step 2: When Slick finishes initializing
    $('.slider').on('init', function(event, slick){
        zoomCurrentImage();
    });

    // Step 3: Also re-apply zoom whenever the slide changes
    $('.slider').on('afterChange', function(event, slick, currentSlide){
        zoomCurrentImage();
    });

    // Function to apply ElevateZoom on current visible image
    function zoomCurrentImage() {
        // Remove any previous zoom instance
        $('.zoomContainer').remove();
        $('.slider img').removeData('elevateZoom');

        // Apply zoom only on the visible image
        $('.slick-current img').elevateZoom({
            zoomType: "lens",
            lensShape: "round",
            lensSize: 200
        });
    }

});
