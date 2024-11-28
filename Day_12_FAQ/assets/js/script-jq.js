$(function () {
  $(".faq-toggle").on("click", function () {
    $(this).parent(".faq").toggleClass("active");
    $(this).parent(".faq").siblings(".faq").removeClass("active");
  });
});
