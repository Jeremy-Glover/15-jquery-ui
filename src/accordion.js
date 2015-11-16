export default function() {
  var bar = $(`.accordion__item--header`);
  var list = $(`.accordion__list`);

  bar.click(function() {
    $(this).siblings(list).slideToggle();
    list.not($(this)).slideUp();
  });
}
