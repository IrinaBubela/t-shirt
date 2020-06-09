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

idImageMap = {
    "img1": 'img/first.jpg',
    "img2": 'img/second.jpg',
    "img3": 'img/third.jpg',
    "img4": 'img/fourth.jpg',
}

function toggleImage(imageId) {
    $(".image").attr('src', idImageMap[imageId]);
}
$('.modal').css('overflow-y', 'auto');

