export default function() {
  var bar = $(`.accordion__item--header`);
  var list = $(`.accordion__list`);

  bar.on(`click`, function(ev) {
    $(this).siblings().slideToggle();

    ev.preventDefault();
  });
}
