function heightDetect() {
  $('.center').height($(window).height());
};
heightDetect();
$(window).resize(function() {
  $('.center').height($(window).height());
});
