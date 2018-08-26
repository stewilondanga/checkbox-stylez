var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

// All this jquery is just used for presentation. Not required at all for the radio buttons to work.
$(document).ready(function() {
  //   Hide the border by commenting out the variable below
  var $on = 'section';
  $($on).css({
    'background': 'none',
    'border': 'none',
    'box-shadow': 'none'
  });
});
