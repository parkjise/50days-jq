const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const interval = setInterval(loading, 30);

function loading() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
