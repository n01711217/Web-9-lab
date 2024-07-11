// script.js
$(document).ready(function() {
    // Filter images by category
    $('.filter-btn').click(function() {
        const category = $(this).attr('data-category');
        if (category === 'all') {
            $('.gallery-item').fadeIn();
        } else {
            $('.gallery-item').fadeOut();
            setTimeout(() => {
                $(`.gallery-item[data-category="${category}"]`).fadeIn();
            }, 400);
        }
    });

    // Lightbox feature
    $('.gallery-item img').click(function() {
        const src = $(this).attr('src');
        $('#lightbox-img').attr('src', src);
        $('#lightbox').fadeIn();
    });

    $('.close').click(function() {
        $('#lightbox').fadeOut();
    });
});
