$('#green-color, #black-color, #white-color').click(function () {
    $("#green-color").removeClass('active-side-image');
    $(this).siblings().removeClass('active-side-image');
    $(this).toggleClass('active-side-image')

})

