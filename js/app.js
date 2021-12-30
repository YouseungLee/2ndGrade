img_index = 2;
setInterval(function() {
    $("#img_img").attr("src", "./img/" + img_index + ".jpg");
    img_index++;
    if (img_index == 7) {
        img_index = 1;
    }
}, 3000);