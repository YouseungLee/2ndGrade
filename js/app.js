img_index = 2;
setInterval(function() {
    $("#img_img").attr("src", "./img/" + img_index + ".jpg");
    img_index++;
    if (img_index == 14) {
        img_index = 1;
    }
}, 3000);

var slide_index = 0;
$(".a_right").on("click", function() {
  console.log(slide_index);
  $("#img_slide").attr("src", "./gal/" + slide_index + ".jpg");
  slide_index++;
  if (slide_index <= -1) {
    slide_index = 0;
  } else if (slide_index == 24) {
    slide_index = 0;
  }
});
$(".a_left").on("click", function() {
  console.log(slide_index);
  $("#img_slide").attr("src", "./gal/" + slide_index + ".jpg");
  slide_index--;
  if (slide_index <= -1) {
    slide_index = 0;
  } else if (slide_index == 24) {
    slide_index = 0;
  }
});
