const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", function () {
//     panels.forEach((item) => {
//       item.classList.remove("active");
//     });
//     panel.classList.add("active");
//   });
// });
