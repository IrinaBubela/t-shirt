
const img1Carousel = document.getElementById('img1Carousel');


$('#img1, #img2, #img3').click(function () {
    toggleImage($(this).attr('id'))
})

function toggleImage(imageId) {
    console.log(imageId);
    if (imageId === "img1") {
        $(".image").attr('src', 'img/first.jpg');
        $("slideEngine").toggleClass("active")
    }
    if (imageId === "img2") {
        $(".image").attr('src', 'img/second.jpg');
        $("slideEngine").toggleClass("active")
    }
    if (imageId === "img3") {
        $(".image").attr('src', 'img/third.jpg');
        $("slideEngine").toggleClass("active")
    }
};

