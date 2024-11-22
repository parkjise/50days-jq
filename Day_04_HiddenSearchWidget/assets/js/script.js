const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", function () {
  this.closest(".search").classList.toggle("active");
  input.focus();
});
