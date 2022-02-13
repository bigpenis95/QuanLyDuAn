$(document).ready(function () {
  $(".menu_product").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    prevArrow:
      '<div class="slick-prev"><i class="bx bx-chevron-left"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="bx bx-chevron-right" ></i></div>',
  });
});
