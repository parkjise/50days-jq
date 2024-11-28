$(function () {
  $(".left").on("mouseenter", function () {
    $(this).parent(".container").addClass("hover-left");
  });
  $(".left").on("mouseleave", function () {
    $(this).parent(".container").removeClass("hover-left");
  });
  $(".right").on("mouseenter", function () {
    $(this).parent(".container").addClass("hover-right");
  });
  $(".right").on("mouseleave", function () {
    $(this).parent(".container").removeClass("hover-right");
  });
});
