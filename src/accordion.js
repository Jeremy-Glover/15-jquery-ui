export default function() {
  var bar = $(`.accordion__item--header`);

  bar.on(`click`, function(ev) {
    $(this).parent().siblings().find(`.accordion__list`).slideUp();
    $(this).siblings().slideToggle();
    ev.preventDefault();
  });
}
