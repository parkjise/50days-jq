const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", function () {
  container.classList.add("hover-left");
});
right.addEventListener("mouseenter", function () {
  container.classList.add("hover-right");
});
left.addEventListener("mouseleave", function () {
  container.classList.remove("hover-left");
});
right.addEventListener("mouseleave", function () {
  container.classList.remove("hover-right");
});
