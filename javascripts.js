$(document).ready(function() {
  $('.projects').hide();
  $('.contact').show();
  $('.chat-sock').hide();
  $('.glossol').hide();
  $('.asteroid').hide();
  
  $('#home').click(function(event) {
    event.preventDefault();
    $('.glossol').hide();
    $('.contact').show();
    $('.chat-sock').hide();
    $('.asteroid').hide();
  });
  
  $('#chat-sock').click(function(event) {
    event.preventDefault();
    $('.glossol').hide();
    $('.contact').hide();
    $('.chat-sock').show();
    $('.asteroid').hide();
  });
  
  
  $('#glossol-genius').click(function(event) {
    event.preventDefault();
    $('.contact').hide();
    $('.glossol').show();
    $('.chat-sock').hide();
    $('.asteroid').hide();
  });
  
  $('#asteroids').click(function(event) {
    event.preventDefault();
    $('.contact').hide();
    $('.glossol').hide();
    $('.chat-sock').hide();
    $('.asteroid').show();
  });
});