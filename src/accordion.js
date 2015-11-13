export default function() {
  ${`accordion__drop-down`}.hover(function() {
    $(`accordion__list`).slideToggle(400);
  });
}
