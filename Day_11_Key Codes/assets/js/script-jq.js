$(function () {
  $(window).on("keydown", function (e) {
    $("#insert").html(
      `
      <div class="key">
        ${e.key === " " ? "Space" : e.key} 
        <small>event.key</small>
      </div>
      <div class="key">
        ${e.keyCode} 
        <small>event.keycode01</small>
      </div>
      <div class="key">
        ${e.code} 
        <small>event.keycode02</small>
      </div>
      `
    );
  });
});
