img_index = 2;
setInterval(function() {
    $("#img_img").attr("src", "./img/" + img_index + ".jpg");
    img_index++;
    if (img_index == 14) {
        img_index = 1;
    }
}, 3000);

var slide_index = 1;
$(".a_right").on("click", function() {
  console.log("working");
  $("#img_slide").attr("src", "./gal/" + slide_index + ".jpg");
  slide_index++;
  if (slide_index <= 0) {
    slide_index = 1;
  } else if (slide_index == 25) {
    slide_index = 1;
  }
});
$(".a_left").on("click", function() {
  console.log("working");
  $("#img_slide").attr("src", "./gal/" + slide_index + ".jpg");
  slide_index--;
  if (slide_index <= 0) {
    slide_index = 1;
  } else if (slide_index <= 25) {
    slide_index = 1;
  }
});
