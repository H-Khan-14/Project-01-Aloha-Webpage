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

  $('.about-li').on('click', function() {
    document
      .querySelector('.bbanner-text')
      .scrollIntoView({ behavior: 'smooth' });
  });
  $('.shop-li').on('click', function() {
    document.querySelector('#featured').scrollIntoView({ behavior: 'smooth' });
  });
  $('.featured-li').on('click', function() {
    document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
  });
  $('.updates-li').on('click', function() {
    document.querySelector('#update').scrollIntoView({ behavior: 'smooth' });
  });
});
