export default function() {
  var bar = $(`.accordion__item--header`);
  var list = $(`.accordion__list`);

  bar.click(function() {
    $(this).next(list).slideToggle();
  });
}

bar.click(function() {
  list.slideUp();
  $(this).next(list).slideToggle;
  return false;
});
