$('#img1, #img2, #img3, #img4').click(function () {
    toggleImage($(this).attr('id'));
    $("#img1").removeClass('active-image');
    $(this).siblings().removeClass('active-image');
    $(this).toggleClass('active-image')

})

$('#green-color, #black-color, #white-color').click(function () {
    $("#green-color").removeClass('active-side-image');
    $(this).siblings().removeClass('active-side-image');
    $(this).toggleClass('active-side-image')

})

function toggleImage(imageId) {
    if (imageId === "img1") {
        $(".image").attr('src', 'img/first.jpg');
    }
    if (imageId === "img2") {
        $(".image").attr('src', 'img/second.jpg');
    }
    if (imageId === "img3") {
        $(".image").attr('src', 'img/third.jpg');
    };
    if (imageId === "img4") {
        $(".image").attr('src', 'img/fourth.jpg');
    };
}

$("#scroll-to-reviews").click(function () {
    $('html, body').animate({
        scrollTop: $(".reviews").offset().top
    }, 1500);
});