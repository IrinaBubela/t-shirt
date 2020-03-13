


// $('#img1').click(function () {
//     $("#img1Carousel").attr('src', 'img/fourth.jpg');
// });

// $('#img2').click(function () {
//     $("#img2Carousel").attr('src', 'img/second.jpg');
// });

$('#img1').click(function () {
    var $img1Carousel = $('#img1Carousel');
    if ($img1Carousel.attr('src', 'img/second.jpg')) {
        $img1Carousel.removeAttr('src', 'img/second.jpg');
    } else {
        $img1Carousel.attr('src', 'img/second.jpg');
    }
});