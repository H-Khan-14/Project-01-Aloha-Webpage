$(document).ready(function() {
  var count = 1;

  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true
  });
  $('#subscription').on('click', function() {
    alert('Thanks for Subscribing!');
  });

  $('.add-button').on('click', function() {
    alert('Item Added to Cart');
    $('.red-integer').text(count++);
  });
});
