const $ = jQuery;
$(".focusable, .button").on("mousedown", function(e) {
  // blur only on mouse click
  // for accessibility, keep focus when keyboard focused
  e.preventDefault();
  $(this).attr("tabindex", "0");
});
$(".server").on("click", function() {
  const activeServer = $(".server.active").eq(0);
  activeServer.removeClass("active");
  activeServer.removeAttr("aria-selected");
  $(this).addClass("active");
  $(this).attr("aria-selected", true);
});
$(".channel-text").on("click", function() {
  $(".channel-text.active").eq(0).removeClass("active");
  $(this).addClass("active");
});
// focus/blur on channel header click
$(".channels-header").eq(0).on("click", e => {
  e.preventDefault();
  const focused = document.activeElement === e.target;
  focused ? $(e.target).blur() : $(e.target).focus();
});
