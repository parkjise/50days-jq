$(function () {
  const panels = $(".panel");

  panels.each(function () {
    panels.on("click", function () {
      panels.removeClass("active");
      $(this).addClass("active");
    });
  });
});
