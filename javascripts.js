$(document).ready(function() {
  $('.projects').hide();
  $('.contact').show();
  $('.chat-sock').hide();
  $('.glossol').hide();
  $('.asteroid').hide();
  $('.slogan').text(getText());
  
  $('#home').click(function(event) {
    event.preventDefault("slow");
    $('.glossol').hide("slow");
    $('.contact').show("slow");
    $('.intro').show("slow");
    $('.chat-sock').hide("slow");
    $('.asteroid').hide("slow");
  });
  
  $('#chat-sock').click(function(event) {
    event.preventDefault("slow");
    $('.glossol').hide("slow");
    $('.contact').hide("slow");
    $('.chat-sock').show("slow");
    $('.asteroid').hide("slow");
    $('.intro').hide("slow");
  });
  
  
  $('#glossol-genius').click(function(event) {
    event.preventDefault();
    $('.contact').hide("slow");
    $('.glossol').show("slow");
    $('.chat-sock').hide("slow");
    $('.asteroid').hide("slow");
    $('.intro').hide("slow");
  });
  
  $('#asteroids').click(function(event) {
    event.preventDefault("slow");
    $('.contact').hide("slow");
    $('.glossol').hide("slow");
    $('.chat-sock').hide("slow");
    $('.asteroid').show("slow");
  });
  
  function getText() {
    var i = Math.floor(Math.random() * nits.length);
    console.log(i);
    return nits[i];
  };
});

var nits = [
  '"Ruby is groovy, but Clojure is huge . . . er"',
  '"If I had a nickel for every time I curried a function, I\'d probably have a few bucks by now."',
  '"Climbing trees only to fall down through every branch over and over."',
  '"So excited I lost my compiler.  It hasn\'t been too bad."',
  '"I can tune a guitar, but not the JVM . . . yet."'
]