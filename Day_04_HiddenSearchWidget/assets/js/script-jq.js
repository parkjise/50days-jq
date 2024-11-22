$(function () {
  $(".btn").on("click", function () {
    $(this).closest(".search").toggleClass("active");
  });
});
