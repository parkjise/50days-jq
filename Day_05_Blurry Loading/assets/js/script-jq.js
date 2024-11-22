$(function () {
  let num = 0;

  let interval = setInterval(function () {
    num++;
    if (num > 99) {
      clearInterval(interval);
      return;
    }
    // $(".load-text").text(`${num}%`);
    $(".loading-text").text(`${num}%`);
    $(".loading-text").css("opacity", scale(num, 0, 100, 1, 0));
    $(".bg").css("filter", `blur(${scale(num, 0, 100, 30, 0)}px)`);
  }, 30);
  const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
});
