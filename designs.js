// Authored by Chris Miller with much assistance from the following sites
// https://www.w3schools.com/
// https://developer.mozilla.org/en-US/
// using google API jQuery

var height, width, color;

// gathering inputs from HTML

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);

})

// making the grid

function makeGrid(x, y) {

  $('tr').remove();  // clears any residual boxes

  // creating the table's rows/columns

  for (var a = 1; a <= x; a++) {
    $('#pixelCanvas').append('<tr id=table' +a+'></tr>');
      for (var b = 1; b <= y; b++) {
        $('#table' + a).append('<td></td>');
      }
  }

  // choosing cell color
  // I attempted to use jQuery .draggable instead of click
  // but could not get it to work

  $('td').click(function addColor() {
      color = $('#colorPicker').val();

      if ($(this).attr('style')) {  // jQuery *this* is sepcific to
          $(this).removeAttr('style')
      } else {
          $(this).attr('style', 'background-color:' + color);
      }
  })
}
