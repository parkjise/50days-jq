const boxs = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 4) * 4;

  boxs.forEach((box) => {
    const boxTop = box.offsetTop - window.scrollY;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
