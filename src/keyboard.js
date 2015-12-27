export default function() {
  var enter = $(`#enter`);
  var shift = false;
  var capslock = false;

  $(`.keys li`).click(function() {
    var char = $(this).html();

    if ($(this).hasClass(`left-shift`) || $(this).hasClass(`right-shift`)) {
      $(`.letter`).toggleClass(`uppercase`);
      $(`.symbol span`).toggle();
      shift = (shift === true);
      capslock = false;
      return false;
    }

    if ($(this).hasClass(`capslock`)) {
      $(`.letter`).toggleClass(`uppercase`);
      capslock = true;
      return false;
    }

    if ($(this).hasClass(`delete`)) {
      var html = enter.html();
      enter.html(html.substr(0, html.length - 1));
      return false;
    }

    if ($(this).hasClass(`symbol`))
      char = $(`span:visible`, $(this)).html();

    if ($(this).hasClass(`space`))
      char = ` `;

    if ($(this).hasClass(`tab`))
      char = `\t`;

    if ($(this).hasClass(`return`))
      char = '\n';

    if ($(this).hasClass('uppercase'))
      char = char.toUpperCase();

    if (shift === true) {
      $(`.symbol span`).toggle();
      if (capslock === false) $(`.letter`).toggleClass('uppercase');

      shift = false;
    }

    enter.html(enter.html() + char);

  });
}
