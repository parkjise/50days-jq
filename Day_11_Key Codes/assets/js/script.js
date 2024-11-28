const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key}
  <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keycode01</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.keycode02</small>
  </div>
  `;
});
